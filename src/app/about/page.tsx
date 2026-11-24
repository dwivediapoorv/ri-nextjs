import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rare Input is a small studio that builds Shopify stores and apps and runs the SEO and marketing for them.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Say what is wrong, plainly",
    body: "Audits list problems in order of likely impact, with the evidence next to each one. If the store is in good shape, we tell you that too.",
  },
  {
    title: "Fix causes, not symptoms",
    body: "A thousand thin pages usually come from one template or one app. We find it and fix it there.",
  },
  {
    title: "Keep your accounts yours",
    body: "Ad accounts, analytics properties, code and content stay in your name. You can leave at any time and keep everything.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap pb-14 pt-14 sm:pt-20">
        <h1 className="display h-hero max-w-[14ch]">About Rare Input</h1>
        <p className="mt-6 max-w-[60ch] text-xl text-slate">
          Rare Input is a small studio for Shopify brands. We build stores and
          apps, and we run the SEO and marketing that fills them with the
          right visitors.
        </p>
        <p className="mt-5 max-w-[62ch]">
          Most e-commerce teams split this work across a development agency, an
          SEO consultant and a media buyer who rarely talk to each other. Search
          problems then sit between teams: the SEO consultant finds a template
          issue, and nobody owns the fix. We combine the roles so the person who
          finds the problem can also change the theme.
        </p>
      </section>

      <section aria-labelledby="principles-h" className="border-t border-line bg-wash">
        <div className="wrap py-16">
          <h2 id="principles-h" className="display h-section">
            How we work
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="display text-2xl">{p.title}</h3>
                <p className="mt-3 text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="fit-h">
        <div className="wrap grid gap-12 py-16 md:grid-cols-2">
          <div>
            <h2 id="fit-h" className="display text-3xl">
              Who we work with
            </h2>
            <ul className="mt-5 max-w-[52ch] list-disc space-y-2 pl-5 marker:text-ultra">
              <li>Shopify and Shopify Plus brands that depend on organic search</li>
              <li>Stores about to migrate or redesign who want to keep their rankings</li>
              <li>Teams that need a custom app or integration built properly</li>
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl">Who we are not for</h2>
            <ul className="mt-5 max-w-[52ch] list-disc space-y-2 pl-5 marker:text-ultra">
              <li>Anyone looking for guaranteed rankings, which nobody can honestly offer</li>
              <li>Stores that want a theme installed and nothing else</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="on-ink bg-ink text-paper">
        <div className="wrap flex flex-wrap items-center justify-between gap-6 py-14">
          <h2 className="display text-3xl sm:text-4xl">See what we would fix first.</h2>
          <Link
            href="/contact"
            className="rounded-xl bg-mark px-6 py-4 text-lg font-semibold text-ink hover:bg-paper"
          >
            Request free audit
          </Link>
        </div>
      </section>
    </>
  );
}
