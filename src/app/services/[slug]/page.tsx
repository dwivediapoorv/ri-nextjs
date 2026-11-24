import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import {
  pillarById,
  serviceBySlug,
  services,
  servicesInPillar,
} from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: `${s.tagline} ${s.summary}`.slice(0, 200),
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const pillar = pillarById(s.pillar);
  const others = servicesInPillar(s.pillar).filter((o) => o.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.summary,
    provider: { "@id": `${site.url}/#organization` },
    url: `${site.url}/services/${s.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="wrap pb-14 pt-14 sm:pt-20">
        <Breadcrumbs
          trail={[
            { name: "Services", path: "/services" },
            { name: s.name, path: `/services/${s.slug}` },
          ]}
        />
        <h1 className="display h-hero mt-5 max-w-[16ch]">{s.name}</h1>
        <p className="display mt-6 max-w-[28ch] text-2xl leading-tight text-ultra sm:text-3xl">
          {s.tagline}
        </p>
        <p className="mt-6 max-w-[62ch] text-xl text-slate">{s.summary}</p>
        <Link
          href={`/contact?service=${s.slug}`}
          className="mt-8 inline-block rounded-xl bg-ultra px-6 py-4 text-lg font-semibold text-white shadow-[6px_6px_0_0_var(--color-ink)] hover:bg-ink"
        >
          Talk to us about this
        </Link>
      </section>

      {/* Input / output */}
      <section aria-label="Scope" className="border-t border-line bg-wash">
        <div className="wrap grid gap-12 py-16 md:grid-cols-2">
          <div>
            <h2 className="display text-3xl">What you bring</h2>
            <ul className="mt-5 space-y-3">
              {s.bring.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7rem] h-1.5 w-3 flex-none bg-ink" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl">What you get</h2>
            <ul className="mt-5 space-y-3">
              {s.get.map((g) => (
                <li key={g} className="flex gap-3">
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    className="mt-[0.4rem] h-4 w-4 flex-none text-ultra"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-h">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-12">
          <h2 id="faq-h" className="display h-section lg:col-span-4">
            Common questions
          </h2>
          <div className="lg:col-span-8">
            <FaqList items={s.faqs} />
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section aria-labelledby="more-h" className="border-t border-line">
          <div className="wrap py-14">
            <h2 id="more-h" className="display text-3xl">
              More in {pillar.name}
            </h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="group block">
                    <span className="display text-2xl group-hover:text-ultra">
                      {o.name}
                    </span>
                    <span className="mt-1 block text-slate">{o.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
