import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pillarById } from "@/lib/services";
import { caseBySlug, cases } from "@/lib/work";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const c = caseBySlug(slug);
  if (!c) return {};
  return {
    title: c.client,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
  };
}

export default async function CasePage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const c = caseBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <section className="wrap pb-14 pt-14 sm:pt-20">
        <Breadcrumbs
          trail={[
            { name: "Work", path: "/work" },
            { name: c.client, path: `/work/${c.slug}` },
          ]}
        />
        <h1 className="display h-hero mt-5 max-w-[18ch]">{c.title}</h1>
        <p className="mt-6 max-w-[60ch] text-xl text-slate">{c.brief}</p>
        {c.url && (
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-semibold text-ultra underline underline-offset-4 hover:text-ink"
          >
            Visit {c.client}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </section>

      <section aria-label="Project facts" className="border-t border-line bg-wash">
        <dl className="wrap grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {c.facts.map((f) => (
            <div key={f.label}>
              <dt className="display text-lg">{f.label}</dt>
              <dd className="mt-1 text-slate">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="did-h">
        <div className="wrap py-16">
          <h2 id="did-h" className="display h-section">
            What we did
          </h2>
          <div className="mt-10">
            {c.sections.map((s) => {
              const p = pillarById(s.pillar);
              return (
                <div
                  key={s.pillar}
                  className="grid gap-6 border-t border-line py-8 md:grid-cols-12"
                >
                  <h3 className="display text-4xl md:col-span-3">{p.name}</h3>
                  <ul className="space-y-3 md:col-span-9">
                    {s.items.map((i) => (
                      <li key={i} className="flex max-w-[64ch] gap-3">
                        <span aria-hidden className="mt-[0.7rem] h-1.5 w-3 flex-none bg-ink" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="problem-h" className="border-t border-line bg-wash">
        <div className="wrap grid gap-8 py-16 lg:grid-cols-12">
          <h2 id="problem-h" className="display h-section lg:col-span-5">
            {c.problem.title}
          </h2>
          <div className="space-y-4 lg:col-span-7">
            {c.problem.body.map((p) => (
              <p key={p} className="max-w-[62ch]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="on-ink bg-ink text-paper">
        <div className="wrap flex flex-wrap items-center justify-between gap-6 py-14">
          <h2 className="display text-3xl sm:text-4xl">
            Have a store like this?
          </h2>
          <Link
            href="/contact"
            className="rounded-xl bg-paper px-6 py-4 text-lg font-semibold text-ink hover:bg-wash"
          >
            Request free audit
          </Link>
        </div>
      </section>
    </>
  );
}
