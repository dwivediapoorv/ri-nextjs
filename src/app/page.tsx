import Image from "next/image";
import Link from "next/link";
import { AuditForm } from "@/components/audit-form";
import { FaqList } from "@/components/faq-list";
import { Ladder } from "@/components/ladder";
import { StoreMock } from "@/components/store-mock";
import { cases } from "@/lib/work";
import { faqs, priceLabel, services } from "@/lib/services";

const leaks = [
  {
    title: "Buyers cannot find you",
    body: "Duplicate product URLs, thin collection pages and missing structured data keep good products off page one.",
    fix: "E-commerce SEO",
    href: "/services#ecommerce-seo",
  },
  {
    title: "Visitors do not buy",
    body: "Slow mobile pages, app bloat and unclear product pages send people away before the cart.",
    fix: "Conversion sprint",
    href: "/services#conversion-sprint",
  },
  {
    title: "Buyers do not come back",
    body: "Ads without trustworthy tracking and no email flows mean every sale is paid for twice.",
    fix: "Email and paid media",
    href: "/services#email-and-sms",
  },
];

const steps = [
  { t: "Send your store URL", d: "Takes ten seconds. No call, no card." },
  { t: "Get your free note", d: "Within two working days: the three biggest issues, in plain language." },
  { t: "Get a fixed price", d: "If you want help, we quote one price and a date before any work starts." },
  { t: "We fix, you review", d: "Changes go in a duplicate theme. You approve, then it goes live." },
];

export default function Home() {
  const featured = services.filter((s) => s.featured);

  return (
    <>
      {/* Hero */}
      <section className="wrap grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h1 className="display h-hero rise" style={{ "--d": 0 } as React.CSSProperties}>
            Shopify stores that rank, load fast and sell.
          </h1>
          <p className="rise mt-6 max-w-[34ch] text-xl text-slate sm:text-2xl" style={{ "--d": 2 } as React.CSSProperties}>
            We build, fix and grow Shopify stores. Send your URL and we will show you the three biggest things holding it back.
          </p>
          <div className="rise mt-8" style={{ "--d": 3 } as React.CSSProperties}>
            <AuditForm id="hero" />
          </div>
          <p className="rise mt-6 text-slate" style={{ "--d": 4 } as React.CSSProperties}>
            Technical SEO from <strong className="text-ink">$249</strong>. Store builds from{" "}
            <strong className="text-ink">$2,500</strong>.{" "}
            <Link href="/pricing" className="font-semibold text-volt underline underline-offset-4 hover:text-ink">
              See pricing
            </Link>
          </p>
        </div>
        <div className="rise lg:col-span-6" style={{ "--d": 3 } as React.CSSProperties}>
          <Ladder />
        </div>
      </section>

      {/* Proof */}
      <section aria-label="Recent work" className="border-y-2 border-ink bg-white">
        <div className="wrap grid gap-px sm:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href="/work"
              className="group py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="display text-2xl group-hover:text-volt">{c.result}</p>
              <p className="mt-1 text-slate">{c.client}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Where stores leak */}
      <section className="wrap pt-24">
        <h2 className="display h-section max-w-[18ch]">Most stores lose sales in three places</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {leaks.map((l) => (
            <li key={l.title} className="lift flex flex-col rounded-2xl border-2 border-ink bg-white p-6">
              <h3 className="display text-2xl">{l.title}</h3>
              <p className="mt-3 flex-1 text-slate">{l.body}</p>
              <Link href={l.href} className="mt-6 font-bold text-volt underline underline-offset-4 hover:text-ink">
                Fix it with {l.fix}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="wrap pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display h-section max-w-[16ch]">What we do, and what it costs</h2>
          <Link href="/services" className="font-bold text-volt underline underline-offset-4 hover:text-ink">
            All services
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="lift flex h-full flex-col rounded-2xl border-2 border-ink bg-white p-6"
              >
                <span className="display text-2xl">{s.name}</span>
                <span className="mt-2 flex-1 text-slate">{s.short}</span>
                <span className="mt-5 flex items-center justify-between border-t-2 border-line pt-4">
                  <span className="font-bold">{priceLabel(s)}</span>
                  <span className="text-sm text-slate">{s.time}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section className="wrap pt-24">
        <h2 className="display h-section max-w-[16ch]">Real stores, apps and portals we shipped</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <li key={c.slug}>
              <Link href="/work" className="lift block rounded-2xl border-2 border-ink bg-white p-4">
                <StoreMock tone={c.tone} label={c.client} />
                <p className="display mt-5 text-xl">{c.client}</p>
                <p className="mt-1 text-slate">{c.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="wrap pt-24">
        <h2 className="display h-section max-w-[18ch]">From URL to fixed in four steps</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t-4 border-ink pt-5">
              <span className="display text-lg text-volt">Step {i + 1}</span>
              <p className="display mt-2 text-2xl">{s.t}</p>
              <p className="mt-2 text-slate">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Fit */}
      <section className="wrap grid gap-6 pt-24 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-ink bg-white p-7">
          <h2 className="display text-3xl">Good fit if you</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Sell on Shopify, or plan to move there",
              "Want one team for the build, search and conversion",
              "Prefer plain reports to jargon",
              "Would rather review changes before they go live",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <svg aria-hidden viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 flex-none text-volt" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-line bg-white p-7">
          <h2 className="display text-3xl">Probably not if you</h2>
          <ul className="mt-5 space-y-3 text-slate">
            {[
              "Want a guaranteed #1 ranking. We will not promise it.",
              "Are looking for the lowest price over the best fix",
              "Need an agency that works only on other platforms",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden className="mt-3 h-0.5 w-4 flex-none bg-slate" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section className="wrap grid items-center gap-10 pt-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src="/founder.webp"
            alt="Apoorv Dwivedi, founder of rare Input"
            width={480}
            height={480}
            className="aspect-square w-full max-w-sm rounded-3xl border-2 border-ink object-cover shadow-[8px_8px_0_0_var(--color-lemon)]"
          />
        </div>
        <div className="md:col-span-8">
          <h2 className="display h-section max-w-[20ch]">You deal with the person doing the work</h2>
          <p className="mt-5 max-w-[56ch] text-lg text-slate">
            rare Input is led by Apoorv Dwivedi, a Shopify developer who also does the SEO and the ads. Build choices and
            search choices come from the same person, so nothing gets lost between a designer, a developer and a marketer.
            Based in Noida, working with brands worldwide.
          </p>
          <Link href="/about" className="mt-6 inline-block font-bold text-volt underline underline-offset-4 hover:text-ink">
            More about us
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap grid gap-10 pt-24 lg:grid-cols-12">
        <h2 className="display h-section lg:col-span-4">Questions before you send your URL</h2>
        <div className="lg:col-span-8">
          <FaqList items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="wrap pt-24">
        <div className="rounded-3xl bg-volt p-8 text-white sm:p-14">
          <h2 className="display h-section max-w-[18ch]">Find out what your store is missing</h2>
          <p className="mt-4 max-w-[44ch] text-lg text-white/85">
            Free, written, and yours to keep even if we never work together.
          </p>
          <div className="mt-8">
            <AuditForm id="cta" dark />
          </div>
        </div>
      </section>
    </>
  );
}
