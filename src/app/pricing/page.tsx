import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { faqs, priceLabel, serviceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear starting prices: technical SEO from $249, store builds from $2,500, e-commerce SEO from $1,499 a month.",
  alternates: { canonical: "/pricing" },
};

const paths = [
  {
    name: "Fix",
    blurb: "One-off fixes for a store that already exists.",
    slugs: ["free-store-check", "technical-seo", "conversion-sprint"],
    cta: "Start with a free check",
    to: "free-store-check",
  },
  {
    name: "Build",
    blurb: "A new store, a move from another platform, or a custom app.",
    slugs: ["shopify-store-build", "shopify-apps"],
    cta: "Plan a build",
    to: "shopify-store-build",
  },
  {
    name: "Grow",
    blurb: "A monthly team for search, ads and email.",
    slugs: ["ecommerce-seo", "paid-media", "email-and-sms"],
    cta: "Plan monthly growth",
    to: "ecommerce-seo",
    best: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="wrap pb-10 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[13ch]">Pricing, up front</h1>
        <p className="mt-6 max-w-[52ch] text-xl text-slate">
          Pick the path that matches where your store is. Prices are starting points for a small store. You get a fixed quote before we begin.
        </p>
      </section>

      <section className="wrap grid gap-6 lg:grid-cols-3">
        {paths.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl border-2 border-ink p-7 ${
              p.best ? "bg-lemon shadow-[8px_8px_0_0_var(--color-ink)]" : "bg-white"
            }`}
          >
            {p.best && (
              <span className="display absolute -top-3 right-6 rounded-lg bg-ink px-3 py-1 text-sm text-lemon">
                Best long-term value
              </span>
            )}
            <h2 className="display text-4xl">{p.name}</h2>
            <p className={`mt-2 ${p.best ? "text-ink/80" : "text-slate"}`}>{p.blurb}</p>
            <ul className="mt-6 flex-1 space-y-4">
              {p.slugs.map((slug) => {
                const s = serviceBySlug(slug)!;
                return (
                  <li key={slug} className="flex items-baseline justify-between gap-4 border-b-2 border-ink/15 pb-4">
                    <Link href={`/services#${slug}`} className="font-bold hover:text-volt">
                      {s.name}
                    </Link>
                    <span className="display flex-none text-lg">{priceLabel(s)}</span>
                  </li>
                );
              })}
            </ul>
            <Link
              href={`/contact?service=${p.to}`}
              className={`btn mt-7 ${p.best ? "bg-ink text-white hover:bg-volt" : "btn-primary"}`}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="wrap grid gap-10 pt-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display h-section">How we price</h2>
        </div>
        <ul className="space-y-5 text-lg lg:col-span-7">
          {[
            ["Fixed prices.", "You approve one price and a date before work starts. If scope grows, we tell you first."],
            ["Priced by store size.", "Catalog size, installed apps and migrations drive the cost, not hours on a timesheet."],
            ["No lock-in.", "Monthly plans run month to month after the first three months. You own the code, accounts and reports."],
            ["In US dollars.", "All prices are in USD. Ad spend is paid to Google and Meta directly, never through us."],
          ].map(([t, d]) => (
            <li key={t}>
              <strong>{t}</strong> <span className="text-slate">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap grid gap-10 pt-24 lg:grid-cols-12">
        <h2 className="display h-section lg:col-span-4">Pricing questions</h2>
        <div className="lg:col-span-8">
          <FaqList items={faqs.filter((f) => /cost|guarantee|free|live/i.test(f.q + f.a)).slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
