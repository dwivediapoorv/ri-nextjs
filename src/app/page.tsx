import Link from "next/link";
import { AuditForm } from "@/components/audit-form";
import { FaqList } from "@/components/faq";
import { pillars, servicesInPillar, type Faq } from "@/lib/services";

const auditChecks = [
  "Product URLs duplicated through /collections/ paths",
  "Collections with no indexable copy",
  "Missing or invalid Product structured data",
  "Theme and app scripts that delay the largest content paint",
  "Pages indexed that should not be, and pages that should be and are not",
  "Redirect chains and 404s left over from past changes",
];

const steps = [
  {
    title: "Audit",
    body: "We review the store, its search data and its competitors, then send you a written audit.",
  },
  {
    title: "Plan",
    body: "We agree the scope, the order of work, and what each fix is expected to be worth.",
  },
  {
    title: "Ship",
    body: "Changes go into a duplicate theme or a staging store first. Nothing goes live until you approve it.",
  },
  {
    title: "Measure",
    body: "A monthly report ties results to the pages and templates we changed.",
  },
];

const reasons = [
  {
    title: "The people fixing your SEO can edit the theme",
    body: "Most Shopify SEO problems sit in Liquid templates and installed apps. We make those changes ourselves instead of writing a ticket for another team.",
  },
  {
    title: "Fixes are made once, at the template",
    body: "A canonical rule or a schema fix applied to the collection template reaches every collection. That is cheaper than page-by-page edits.",
  },
  {
    title: "You approve before anything is published",
    body: "Work happens in a duplicate theme or staging store. You review it, and then we publish.",
  },
];

const faqs: Faq[] = [
  {
    q: "What do I get from the free audit?",
    a: "A written review of your store's crawling, indexing, on-page basics and speed, with the fixes ranked by likely impact. You can hand it to your own team or ask us to do the work.",
  },
  {
    q: "Do you only work with Shopify?",
    a: "Shopify and Shopify Plus are our focus. If you are on another platform and considering a move, we can help you plan the migration.",
  },
  {
    q: "How is pricing set?",
    a: "Builds are quoted as fixed-scope projects. Ongoing SEO, paid media and email run as monthly plans. We quote after the audit or a short call, so the price matches the work.",
  },
  {
    q: "Can you work with our in-house developers?",
    a: "Yes. We can write the fixes as tickets or pull requests for your team, or make the changes ourselves in a duplicate theme.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="wrap grid min-h-[calc(100svh-var(--header-h))] content-center gap-14 py-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="display h-hero max-w-[20ch]">
            Give us your store URL. We&rsquo;ll show you what is holding it
            back.
          </h1>
          <p className="mt-6 max-w-[52ch] text-xl text-slate">
            At rare Input, we build Shopify stores and apps, and run the SEO and
            marketing that brings buyers to them.
          </p>
          <div className="mt-10 max-w-2xl">
            <AuditForm />
            <p className="mt-5 text-[0.95rem] text-slate">
              Free, written, and yours to keep. No call required to receive it.
            </p>
          </div>
        </div>

        <aside
          aria-labelledby="audit-covers"
          className="border-l-2 border-ink pl-6 lg:col-span-5 lg:pl-8"
        >
          <h2 id="audit-covers" className="display text-2xl">
            What the audit looks for
          </h2>
          <ul className="mt-4 space-y-3 text-[1rem]">
            {auditChecks.map((c) => (
              <li key={c} className="flex gap-3">
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  className="mt-[0.35rem] h-4 w-4 flex-none text-ultra"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Tracks */}
      <section aria-labelledby="services-h" className="border-t border-line">
        <div className="wrap py-20">
          <h2 id="services-h" className="display h-section max-w-[20ch]">
            Build it, get it found, grow it.
          </h2>
          <div className="mt-12">
            {pillars.map((p) => (
              <div
                key={p.id}
                className="grid gap-8 border-t border-line py-10 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <h3 className="display text-5xl">{p.name}</h3>
                  <p className="mt-3 max-w-[30ch] text-slate">
                    {p.description}
                  </p>
                </div>
                <ul className="md:col-span-8">
                  {servicesInPillar(p.id).map((s) => (
                    <li
                      key={s.slug}
                      className="border-b border-line first:pt-0 last:border-b-0"
                    >
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-start justify-between gap-6 py-4"
                      >
                        <span>
                          <span className="display block text-2xl group-hover:text-ultra">
                            {s.name}
                          </span>
                          <span className="mt-1 block max-w-[52ch] text-slate">
                            {s.tagline}
                          </span>
                        </span>
                        <svg
                          aria-hidden
                          viewBox="0 0 20 20"
                          className="mt-2 h-5 w-5 flex-none text-ink transition-transform group-hover:translate-x-1 group-hover:text-ultra motion-reduce:transition-none"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 4l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-h" className="bg-wash">
        <div className="wrap py-20">
          <h2 id="process-h" className="display h-section max-w-[18ch]">
            How an engagement runs
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-4">
                <p className="display text-sm text-ultra">Step {i + 1}</p>
                <h3 className="display mt-1 text-2xl">{s.title}</h3>
                <p className="mt-2 text-slate">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why one team */}
      <section aria-labelledby="why-h">
        <div className="wrap py-20">
          <h2 id="why-h" className="display h-section max-w-[20ch]">
            One team builds the store and fixes its search.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="display text-2xl">{r.title}</h3>
                <p className="mt-3 text-slate">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="border-t border-line">
        <div className="wrap grid gap-10 py-20 lg:grid-cols-12">
          <h2 id="faq-h" className="display h-section lg:col-span-4">
            Questions before you start
          </h2>
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="on-ink bg-ink text-paper">
        <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:items-end">
          <h2 className="display h-section lg:col-span-6">
            Start with the audit.
          </h2>
          <div className="lg:col-span-6">
            <p className="mb-6 max-w-[46ch] text-paper/75">
              Send a store URL and we will reply with what we found and what
              we would fix first.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-paper px-6 py-4 text-lg font-semibold text-ink hover:bg-wash"
              >
                Request free audit
              </Link>
              <Link
                href="/contact?service=other"
                className="inline-block rounded-xl border-2 border-paper px-6 py-[0.875rem] text-lg font-semibold text-paper hover:bg-paper/10"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
