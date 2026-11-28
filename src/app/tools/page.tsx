import type { Metadata } from "next";
import Link from "next/link";
import { extensions, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Software we have built ourselves: rare Input Helpdesk, a shared-inbox tool that turns emails into tickets, and a set of Chrome extensions.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  const categories = [...new Set(tools.map((t) => t.category))];
  return (
    <>
      <section className="wrap pb-10 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[12ch]">Tools</h1>
        <p className="mt-6 max-w-[52ch] text-xl text-slate">
          Software we have built ourselves, for teams that want less inbox chaos and more done.
        </p>
      </section>
      {categories.map((cat) => (
        <section key={cat} className="wrap pb-20" aria-labelledby={`${cat}-h`}>
          <h2 id={`${cat}-h`} className="display text-3xl">
            {cat}
          </h2>
          <ul className="mt-6 border-t border-line">
            {tools
              .filter((t) => t.category === cat)
              .map((t) => (
                <li key={t.slug} className="border-b border-line">
                  <Link href={`/tools/${t.slug}`} className="group grid gap-4 py-10 md:grid-cols-12">
                    <p className="display text-xl text-slate md:col-span-3">{t.category}</p>
                    <div className="md:col-span-9">
                      <h3 className="display text-3xl group-hover:text-ultra sm:text-4xl">{t.name}</h3>
                      <p className="display mt-2 text-xl text-ultra">{t.tagline}</p>
                      <p className="mt-3 max-w-[60ch] text-slate">{t.summary}</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}

      <section className="wrap pb-20" aria-labelledby="ext-h">
        <h2 id="ext-h" className="display text-3xl">
          Chrome extensions
        </h2>
        <p className="mt-3 max-w-[56ch] text-slate">
          Small browser tools we built and published on the Chrome Web Store.
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extensions.map((e) => (
            <li key={e.name} className="flex flex-col rounded-2xl border-2 border-ink bg-paper p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="display text-2xl">{e.name}</h3>
                <span className="mt-1 flex-none rounded-full bg-ink px-3 py-0.5 text-sm font-semibold text-paper">
                  Free
                </span>
              </div>
              <p className="mt-2 flex-1 text-slate">{e.summary}</p>
              <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                <a
                  href={e.landing}
                  className="text-ultra underline underline-offset-4 hover:text-ink"
                >
                  Learn more
                </a>
                {e.url && (
                  <a
                    href={e.url}
                    rel="noopener"
                    className="text-ultra underline underline-offset-4 hover:text-ink"
                  >
                    Chrome Web Store
                  </a>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
