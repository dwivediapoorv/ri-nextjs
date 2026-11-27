import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { toolBySlug, tools } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const t = toolBySlug(slug);
  if (!t) return {};
  return {
    title: t.name,
    description: `${t.tagline} ${t.summary}`.slice(0, 200),
    alternates: { canonical: `/tools/${t.slug}` },
  };
}

export default async function ToolPage(props: PageProps<"/tools/[slug]">) {
  const { slug } = await props.params;
  const t = toolBySlug(slug);
  if (!t) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: t.name,
    applicationCategory: "BusinessApplication",
    description: t.summary,
    url: `${site.url}/tools/${t.slug}`,
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="wrap pb-14 pt-14 sm:pt-20">
        <Breadcrumbs
          trail={[
            { name: "Tools", path: "/tools" },
            { name: t.name, path: `/tools/${t.slug}` },
          ]}
        />
        <p className="mt-5 font-semibold text-slate">{t.category}</p>
        <h1 className="display h-hero mt-2 max-w-[14ch]">{t.name}</h1>
        <p className="display mt-6 max-w-[28ch] text-2xl leading-tight text-ultra sm:text-3xl">{t.tagline}</p>
        <p className="mt-6 max-w-[62ch] text-xl text-slate">{t.summary}</p>
        <Link
          href={`/contact?service=${t.contactService}`}
          className="mt-8 inline-block rounded-xl bg-ultra px-6 py-4 text-lg font-semibold text-white shadow-[6px_6px_0_0_var(--color-ink)] hover:bg-ink"
        >
          Ask for a demo
        </Link>
      </section>

      <section aria-labelledby="features-h" className="border-t border-line bg-wash">
        <div className="wrap py-16">
          <h2 id="features-h" className="display text-3xl">
            What it does
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {t.features.map((f) => (
              <li key={f.title} className="rounded-2xl border-2 border-ink bg-paper p-6">
                <h3 className="display text-2xl">{f.title}</h3>
                <p className="mt-2 text-slate">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="who-h">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-12">
          <h2 id="who-h" className="display h-section lg:col-span-4">
            Who it is for
          </h2>
          <ul className="space-y-3 text-lg lg:col-span-8">
            {t.forWho.map((w) => (
              <li key={w} className="flex gap-3">
                <span aria-hidden className="mt-[0.8rem] h-1.5 w-3 flex-none bg-ink" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-h" className="border-t border-line">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-12">
          <h2 id="faq-h" className="display h-section lg:col-span-4">
            Common questions
          </h2>
          <div className="lg:col-span-8">
            <FaqList items={t.faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
