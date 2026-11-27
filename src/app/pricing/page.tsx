import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";
import { faqs } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear starting prices: technical SEO from $249, store builds from $2,500, e-commerce SEO from $1,499 a month.",
  alternates: { canonical: "/pricing" },
};

const how = [
  ["Fixed prices.", "You approve one price and a date before work starts. If scope grows, we tell you first."],
  ["Priced by store size.", "Catalog size, installed apps and migrations drive the cost, not hours on a timesheet."],
  ["No lock-in.", "Monthly plans run month to month after the first three months. You own the code, accounts and reports."],
  ["In US dollars.", "All prices are in USD. Ad spend is paid to Google and Meta directly, never through us."],
];

export default function PricingPage() {
  return (
    <>
      <section className="wrap pb-2 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[13ch]">Pricing, up front</h1>
        <p className="mt-6 max-w-[52ch] text-xl text-slate">
          Pick the path that matches where your store is. Prices are starting points for a small store.
        </p>
      </section>
      <Pricing heading={false} />
      <section className="wrap grid gap-10 pt-24 lg:grid-cols-12">
        <h2 className="display h-section lg:col-span-5">How we price</h2>
        <ul className="space-y-5 text-lg lg:col-span-7">
          {how.map(([t, d]) => (
            <li key={t}>
              <strong>{t}</strong> <span className="text-slate">{d}</span>
            </li>
          ))}
        </ul>
      </section>
      <FaqSection items={faqs.filter((f) => /cost|guarantee|free|live/i.test(f.q + f.a)).slice(0, 4)} title="Pricing questions" />
      <Cta />
    </>
  );
}
