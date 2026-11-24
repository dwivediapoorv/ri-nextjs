import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from rare Input: Shopify builds, SEO groundwork, ad strategy and tracking for e-commerce brands, plus event websites and registration portals.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="wrap pb-10 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[12ch]">Work</h1>
        <p className="mt-6 max-w-[52ch] text-xl text-slate">
          Projects where we built the site or store, set up search and sorted
          out measurement.
        </p>
      </section>
      <section className="wrap pb-20">
        <ul className="border-t border-line">
          {cases.map((c) => (
            <li key={c.slug} className="border-b border-line">
              <Link
                href={`/work/${c.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-12"
              >
                <p className="display text-xl text-slate md:col-span-3">
                  {c.client}
                </p>
                <div className="md:col-span-9">
                  <h2 className="display text-3xl group-hover:text-ultra sm:text-4xl">
                    {c.title}
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-slate">{c.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
