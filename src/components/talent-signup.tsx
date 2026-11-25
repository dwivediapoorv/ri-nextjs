"use client";

import { useState } from "react";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export function TalentSignup() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "sending" });
    const data = new FormData(e.currentTarget);
    data.set("kind", "signup");
    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({ state: "error", message: body.error ?? "The sign-up was not sent. Try again." });
        return;
      }
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: "The sign-up was not sent. Check your connection and try again." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="border-l-4 border-ultra bg-wash p-6">
        <p className="display text-2xl">You are on the list</p>
        <p className="mt-2 text-slate">We will email you when a role opens.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <label htmlFor="t-email" className="mb-2 block font-medium">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="t-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-lg focus:border-ultra focus:bg-mark/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="whitespace-nowrap rounded-xl bg-ink px-6 py-3 text-lg font-semibold text-paper hover:bg-ultra disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Tell me when roles open"}
        </button>
      </div>
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="t-website">Leave this empty</label>
        <input id="t-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status.state === "error" && (
        <p role="alert" className="mt-4 border-l-4 border-ink bg-mark/60 p-4">
          {status.message}
        </p>
      )}
    </form>
  );
}
