"use client";

import { useState } from "react";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-lg placeholder:text-slate/60 focus:border-ultra focus:bg-mark/40 focus:outline-none";

export function CareersForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const file = (form.elements.namedItem("resume") as HTMLInputElement).files?.[0];
    if (file && file.size > 4 * 1024 * 1024) {
      setStatus({
        state: "error",
        message: "The resume is larger than 4 MB. Attach a smaller file.",
      });
      return;
    }
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: new FormData(form),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({
          state: "error",
          message:
            body.error ??
            "The application was not sent. Try again, or email us directly.",
        });
        return;
      }
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: "The application was not sent. Check your connection and try again.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="border-l-4 border-ultra bg-paper p-6">
        <p className="display text-2xl">Application sent</p>
        <p className="mt-2 text-slate">
          Thank you. We will be in touch if a role fits.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-2 block font-medium">
            Your name
          </label>
          <input id="c-name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-2 block font-medium">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-role" className="mb-2 block font-medium">
          Role you are interested in
        </label>
        <input
          id="c-role"
          name="role"
          placeholder="For example, Shopify developer"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="c-link" className="mb-2 block font-medium">
          LinkedIn or portfolio link (optional)
        </label>
        <input
          id="c-link"
          name="link"
          inputMode="url"
          autoComplete="url"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="c-resume" className="mb-2 block font-medium">
          Resume
        </label>
        <input
          id="c-resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          className={`${field} file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-ink file:px-4 file:py-2 file:font-semibold file:text-paper`}
        />
        <p className="mt-2 text-sm text-slate">PDF or Word file, up to 4 MB.</p>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-2 block font-medium">
          Anything you want us to know? (optional)
        </label>
        <textarea id="c-message" name="message" rows={4} className={field} />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="c-website">Leave this empty</label>
        <input id="c-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <p role="alert" className="border-l-4 border-ink bg-mark/60 p-4">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="rounded-xl bg-ultra px-6 py-4 text-lg font-semibold text-white shadow-[6px_6px_0_0_var(--color-ink)] hover:bg-ink disabled:opacity-60"
      >
        {status.state === "sending" ? "Sending…" : "Send application"}
      </button>
    </form>
  );
}
