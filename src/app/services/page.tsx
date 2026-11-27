import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { priceLabel, services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services and prices",
  description:
    "Shopify store builds, apps, technical and e-commerce SEO, conversion work, email and paid media. Every service shows its starting price.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.pitch,
        provider: { "@id": `${site.url}/#organization` },
      },
    })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <section className="wrap pb-6 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[14ch]">Services and prices</h1>
        <p className="mt-6 max-w-[52ch] text-xl text-slate">
          Starting prices are for a small store. We confirm a fixed price after a quick look at yours, before any work starts.
        </p>
      </section>

      <div className="wrap">
        {services.map((s) => (
          <section
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-24 gap-8 border-t-2 border-ink py-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <h2 className="display text-4xl">{s.name}</h2>
              <p className="mt-3 text-lg text-slate">{s.short}</p>
              <p className="display mt-6 text-3xl text-volt">{priceLabel(s)}</p>
              {"from" in s.price && s.price.note && (
                <p className="mt-1 text-sm text-slate">{s.price.note}</p>
              )}
              <p className="mt-2 text-slate">{s.time}</p>
              <Link
                href={`/contact?service=${s.slug}`}
                className="btn btn-primary mt-6"
              >
                {"free" in s.price ? "Get my free store check" : "Ask about this"}
              </Link>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-[58ch] text-lg">{s.pitch}</p>
              <ul className="mt-6 space-y-3">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3">
                    <svg aria-hidden viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 flex-none text-volt" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
