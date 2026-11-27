import type { Metadata } from "next";
import Link from "next/link";
import { StoreMock } from "@/components/store-mock";
import { cases } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A Shopify store live in 30 days, a conference portal for 1,950 registrants, and a guitar school app. Real projects, plainly described.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="wrap pb-6 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[12ch]">Our work</h1>
        <p className="mt-6 max-w-[52ch] text-xl text-slate">
          Three real projects, described plainly. More detail and screenshots are on the way.
        </p>
      </section>

      <div className="wrap">
        {cases.map((c) => (
          <article key={c.slug} id={c.slug} className="grid scroll-mt-24 gap-8 border-t-2 border-ink py-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <StoreMock tone={c.tone} label={c.client} />
            </div>
            <div className="lg:col-span-7">
              <p className="display text-xl text-volt">{c.result}</p>
              <h2 className="display mt-2 text-4xl">{c.client}</h2>
              <p className="mt-3 text-xl text-slate">{c.line}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li key={t} className="rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 max-w-[60ch] space-y-4">
                {c.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {c.url && (
                <a
                  href={c.url}
                  rel="noopener"
                  className="mt-6 inline-block font-bold text-volt underline underline-offset-4 hover:text-ink"
                >
                  Visit {c.url.replace("https://", "")}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="wrap pt-12">
        <div className="rounded-3xl bg-ink p-8 text-white sm:p-12">
          <h2 className="display h-section max-w-[18ch]">Next on this page could be your store</h2>
          <Link href="/contact" className="btn mt-6 bg-lemon text-ink hover:bg-white">
            Get my free store check
          </Link>
        </div>
      </section>
    </>
  );
}
