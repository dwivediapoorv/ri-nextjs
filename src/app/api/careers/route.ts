import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const MAX_FILE = 4 * 1024 * 1024; // keeps the request under the host's body limit
const ALLOWED = [".pdf", ".doc", ".docx"];

const clean = (v: FormDataEntryValue | null, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry.
  if (clean(form.get("website"), 200)) return NextResponse.json({ ok: true });

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 200);
  const role = clean(form.get("role"), 120);
  const link = clean(form.get("link"), 300);
  const message = clean(form.get("message"), 3000);
  const file = form.get("resume");

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Enter your name and a valid email address." },
      { status: 400 },
    );
  }
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Attach your resume." }, { status: 400 });
  }
  const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  if (!ALLOWED.includes(ext)) {
    return NextResponse.json(
      { error: "The resume must be a PDF or Word file." },
      { status: 400 },
    );
  }
  if (file.size > MAX_FILE) {
    return NextResponse.json(
      { error: "The resume is larger than 4 MB. Attach a smaller file." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to =
    process.env.CAREERS_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    console.error("Careers form is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return NextResponse.json(
      { error: `The form is not connected yet. Email your resume to ${site.email}.` },
      { status: 503 },
    );
  }

  const safeName = file.name.replace(/[^\w.\- ]+/g, "_").slice(0, 120);
  const content = Buffer.from(await file.arrayBuffer()).toString("base64");

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Role: ${role || "-"}`,
    `Link: ${link || "-"}`,
    "",
    message || "(no message)",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Job application: ${name}${role ? ` (${role})` : ""}`,
      text,
      attachments: [{ filename: safeName, content }],
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json(
      { error: `The application was not sent. Email your resume to ${site.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
