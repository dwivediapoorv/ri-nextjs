"use client";

import { useState } from "react";
import { services } from "@/lib/services";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-lg placeholder:text-slate/60 focus:border-volt focus:outline-none";

export function ContactForm({
  defaultStore = "",
  defaultService = "",
}: {
  defaultStore?: string;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "sending" });
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({ state: "error", message: body.error ?? "The message was not sent. Try again, or email us." });
        return;
      }
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: "The message was not sent. Check your connection and try again." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-2xl border-2 border-ink bg-lemon p-7">
        <p className="display text-3xl">Got it. Thank you.</p>
        <p className="mt-2">We will reply by email, usually within two working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="store" className="mb-2 block font-bold">Your store URL</label>
        <input id="store" name="store" defaultValue={defaultStore} placeholder="yourstore.com" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-bold">Your name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-bold">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block font-bold">What do you need?</label>
        <select id="service" name="service" defaultValue={defaultService || "free-store-check"} className={field}>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-bold">
          Anything we should know? <span className="font-normal text-slate">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status.state === "error" && (
        <p role="alert" className="rounded-xl border-2 border-ink bg-white p-4 font-semibold">
          {status.message}
        </p>
      )}
      <button type="submit" disabled={status.state === "sending"} className="btn btn-primary w-full sm:w-auto">
        {status.state === "sending" ? "Sending..." : "Send my store for a free check"}
      </button>
      <p className="text-sm text-slate">
        We use your details only to reply. See the <a href="/privacy" className="underline">privacy note</a>.
      </p>
    </form>
  );
}
