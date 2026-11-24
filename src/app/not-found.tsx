import type { Metadata } from "next";
import Link from "next/link";
import { pillars, servicesInPillar } from "@/lib/services";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="wrap pb-24 pt-16 sm:pt-24">
      <h1 className="display h-hero max-w-[14ch]">This page does not exist</h1>
      <p className="mt-6 max-w-[52ch] text-xl text-slate">
        The link may be old or mistyped. Start from one of these instead.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xl bg-ultra px-6 py-4 text-lg font-semibold text-white shadow-[6px_6px_0_0_var(--color-ink)] hover:bg-ink"
        >
          Go to the home page
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border-2 border-ink px-6 py-[0.875rem] text-lg font-semibold hover:border-ultra hover:text-ultra"
        >
          Contact us
        </Link>
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.id}>
            <h2 className="display text-2xl">{p.name}</h2>
            <ul className="mt-3 space-y-2">
              {servicesInPillar(p.id).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate underline underline-offset-4 hover:text-ultra"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
