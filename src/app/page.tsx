import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Capabilities } from "@/components/sections/capabilities";
import { ServicesBento } from "@/components/sections/services-bento";
import { Pricing } from "@/components/sections/pricing";
import { FaqSection } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { StoreMock } from "@/components/store-mock";
import { cases } from "@/lib/work";
import { faqs } from "@/lib/services";

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
  return (
    <>
      <Hero />

      <Stats />
      <Capabilities />

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

      <ServicesBento />

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

      <Pricing />

      <FaqSection items={faqs} />

      <Cta />
    </>
  );
}
