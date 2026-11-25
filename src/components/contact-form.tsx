"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-lg placeholder:text-slate/60 focus:border-ultra focus:bg-mark/40 focus:outline-none";

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
        setStatus({
          state: "error",
          message:
            body.error ??
            "The message was not sent. Try again, or email us directly.",
        });
        return;
      }
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: "The message was not sent. Check your connection and try again.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="border-l-4 border-ultra bg-wash p-6">
        <p className="display text-2xl">Message sent</p>
        <p className="mt-2 text-slate">
          We will reply by email, usually within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="store" className="mb-2 block font-medium">
          Store URL
        </label>
        <input
          id="store"
          name="store"
          defaultValue={defaultStore}
          placeholder="yourstore.com"
          inputMode="url"
          autoComplete="url"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block font-medium">
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService || "audit"}
          className={field}
        >
          <option value="audit">Free store audit</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-medium">
          Anything we should know?
        </label>
        <textarea id="message" name="message" rows={5} className={field} />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <p role="alert" className="border-l-4 border-ink bg-mark/60 p-4">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="rounded-full bg-ultra px-6 py-4 text-lg font-semibold text-white border-2 border-ink shadow-[6px_6px_0_0_var(--color-ink)] btn-pop hover:bg-ink disabled:opacity-60"
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-sm text-slate">
        By sending this, you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-ultra">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
