import type { Metadata } from "next";
import Link from "next/link";
import { pillars, servicesInPillar } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shopify store and app development, on-page and technical SEO, content, paid media, email and analytics for e-commerce brands.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="wrap pb-8 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[14ch]">What we do</h1>
        <p className="mt-6 max-w-[56ch] text-xl text-slate">
          Nine services in three groups. Each page says what we need from you
          to start and what you receive.
        </p>
      </section>

      {pillars.map((p) => (
        <section
          key={p.id}
          aria-labelledby={`${p.id}-h`}
          className="border-t border-line"
        >
          <div className="wrap grid gap-8 py-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 id={`${p.id}-h`} className="display text-5xl">
                {p.name}
              </h2>
              <p className="mt-3 max-w-[30ch] text-slate">{p.description}</p>
            </div>
            <div className="space-y-12 md:col-span-8">
              {servicesInPillar(p.id).map((s) => (
                <article key={s.slug}>
                  <h3 className="display text-3xl">
                    <Link
                      href={`/services/${s.slug}`}
                      className="hover:text-ultra"
                    >
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-slate">{s.summary}</p>
                  {s.startingFrom && (
                    <p className="display mt-3 text-lg text-ultra">
                      {s.startingFrom.options
                        .map(
                          (o) =>
                            `${o.label} from $${o.usd.toLocaleString("en-US")}${o.per ? `/${o.per}` : ""}`,
                        )
                        .join(" · ")}
                    </p>
                  )}
                  <p className="display mt-5 text-lg">Includes</p>
                  <ul className="mt-2 max-w-[62ch] list-disc space-y-1 pl-5 marker:text-ultra">
                    {s.get.slice(0, 3).map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-4 inline-block font-semibold text-ultra underline underline-offset-4 hover:text-ink"
                  >
                    See what we need and what you get
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
