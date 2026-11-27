import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "rare Input is a small Shopify team in Noida, India, led by Apoorv Dwivedi. One team for the build, the search and the conversion.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["One team, one plan", "The person who builds your theme also thinks about how it ranks and how it converts. Nothing is lost in a handoff."],
  ["Plain reports", "You get what changed, what it did and what is next. No dashboards full of vanity numbers."],
  ["You review first", "Changes land in a duplicate theme. You approve before anything goes live."],
  ["Honest limits", "We do not promise rankings. We promise the work, a timeline and a clear report."],
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap grid items-center gap-10 pb-12 pt-14 sm:pt-20 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="display h-hero max-w-[12ch]">A small team that ships</h1>
          <p className="mt-6 max-w-[48ch] text-xl text-slate">
            rare Input builds, fixes and grows Shopify stores. We are based in Noida, India, and work with brands worldwide.
          </p>
        </div>
        <div className="md:col-span-5">
          <Image
            src="/founder.webp"
            alt="Apoorv Dwivedi, founder of rare Input"
            width={480}
            height={480}
            className="aspect-square w-full max-w-sm rounded-3xl border-2 border-ink object-cover shadow-[8px_8px_0_0_var(--color-lemon)]"
          />
        </div>
      </section>

      <section className="wrap grid gap-10 border-t-2 border-ink py-14 lg:grid-cols-12">
        <h2 className="display h-section lg:col-span-4">Why we exist</h2>
        <div className="max-w-[60ch] space-y-4 text-lg lg:col-span-8">
          <p>
            Most Shopify agencies split the work: one firm builds the store, another does the SEO, a third runs the ads. Each fixes its own corner, and the store still leaks sales between them.
          </p>
          <p>
            rare Input is led by Apoorv Dwivedi, a Shopify developer who also handles search and paid media. That means the theme, the search setup and the tracking are planned together from the first day.
          </p>
        </div>
      </section>

      <section className="wrap border-t-2 border-ink py-14">
        <h2 className="display h-section">How we work</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {principles.map(([t, d]) => (
            <li key={t} className="rounded-2xl border-2 border-ink bg-white p-6">
              <h3 className="display text-2xl">{t}</h3>
              <p className="mt-2 text-slate">{d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-primary">Get my free store check</Link>
          <Link href="/work" className="btn btn-ghost">See our work</Link>
        </div>
      </section>
    </>
  );
}
