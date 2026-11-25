import { Breadcrumbs } from "./breadcrumbs";

export type LegalSection = {
  title: string;
  body: (string | string[])[];
};

export function LegalPage({
  title,
  path,
  updated,
  intro,
  sections,
}: {
  title: string;
  path: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="wrap pb-20 pt-14 sm:pt-20">
      <Breadcrumbs trail={[{ name: title, path }]} />
      <h1 className="display h-hero mt-5">{title}</h1>
      <p className="mt-3 text-slate">Last updated {updated}</p>
      <p className="mt-6 max-w-[62ch] text-xl text-slate">{intro}</p>
      <div className="mt-12 max-w-[68ch] space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="display text-2xl sm:text-3xl">{s.title}</h2>
            <div className="mt-3 space-y-3">
              {s.body.map((b, i) =>
                Array.isArray(b) ? (
                  <ul key={i} className="list-disc space-y-1.5 pl-6">
                    {b.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{b}</p>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
