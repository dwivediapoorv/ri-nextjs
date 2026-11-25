import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CareersForm } from "@/components/careers-form";
import { TalentSignup } from "@/components/talent-signup";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work with rare Input. We hire developers and marketers from time to time. Send your resume.",
  alternates: { canonical: "/careers" },
};

const reasons = [
  {
    title: "One team, build and growth",
    body: "Developers and marketers work side by side, so you see what a change does to search and sales.",
  },
  {
    title: "Varied client work",
    body: "Shopify stores, apps, dashboards, AI agents and websites for brands and businesses of different sizes.",
  },
  {
    title: "A small team",
    body: "You work directly with the people who run the studio, and feedback is quick.",
  },
];

/** Add real quotes from the team here. The section stays hidden until there is at least one. */
const quotes: { text: string; name: string; role: string }[] = [];

const benefits = [
  { title: "Flexible working hours", body: "Arrange your day around the work." },
  { title: "Remote or in office", body: "Both options are available." },
  { title: "Paid leave", body: "Paid time off." },
  { title: "Learning support", body: "Support to keep learning on the job." },
  { title: "Health insurance", body: "Health cover for employees." },
  { title: "Performance bonus", body: "Bonuses tied to results." },
];

const linkedin = site.sameAs.find((u) => u.includes("linkedin.com/company"));

export default function CareersPage() {
  return (
    <>
      <section className="wrap pb-14 pt-14 sm:pt-20">
        <Breadcrumbs trail={[{ name: "Careers", path: "/careers" }]} />
        <h1 className="display h-hero mt-5 max-w-[14ch]">Work with us</h1>
        <p className="mt-6 max-w-[56ch] text-xl text-slate">
          We hire developers and marketers from time to time. Open roles are
          posted on LinkedIn. If your skills fit what we do, send your resume
          below.
        </p>
        <p className="mt-4 max-w-[56ch] text-[0.95rem] text-slate">
          We only hire through this page and our LinkedIn page, and we never
          ask candidates for money.
        </p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-semibold text-ultra underline underline-offset-4 hover:text-ink"
          >
            See open roles on LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </section>

      <section aria-labelledby="why-h" className="border-t border-line">
        <div className="wrap py-16">
          <h2 id="why-h" className="display h-section">
            Why work with us
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <li key={r.title} className="border-t-2 border-ink pt-4">
                <h3 className="display text-2xl">{r.title}</h3>
                <p className="mt-2 max-w-[44ch] text-slate">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="benefits-h" className="border-t border-line bg-wash">
        <div className="wrap py-16">
          <h2 id="benefits-h" className="display h-section">
            Benefits
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span aria-hidden className="mt-[0.7rem] h-1.5 w-3 flex-none bg-ink" />
                <div>
                  <h3 className="display text-xl">{b.title}</h3>
                  <p className="mt-1 text-slate">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate">Benefits may change.</p>
        </div>
      </section>

      {quotes.length > 0 && (
        <section aria-labelledby="voices-h" className="border-t border-line">
          <div className="wrap py-16">
            <h2 id="voices-h" className="display h-section">
              From the team
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {quotes.map((q) => (
                <li key={q.name} className="border-l-4 border-ultra pl-5">
                  <blockquote className="max-w-[44ch] text-xl">{q.text}</blockquote>
                  <p className="mt-3 font-semibold">{q.name}</p>
                  <p className="text-slate">{q.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="fresher-h" className="border-t border-line">
        <div className="wrap py-16">
          <h2 id="fresher-h" className="display h-section">
            Freshers and interns
          </h2>
          <p className="mt-4 max-w-[56ch] text-xl text-slate">
            Starting your career? Freshers and interns are welcome to apply for
            any role that fits their skills. Mention that you are a fresher or
            intern in the note on the form below.
          </p>
        </div>
      </section>

      <section aria-labelledby="apply-h" className="border-t border-line bg-wash">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="apply-h" className="display h-section">
              Send your resume
            </h2>
            <p className="mt-4 max-w-[36ch] text-slate">
              We get in touch when a role fits.
            </p>
          </div>
          <div className="lg:col-span-7">
            <CareersForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="talent-h" className="border-t border-line">
        <div className="wrap py-16">
          <h2 id="talent-h" className="display h-section">
            Not ready to apply?
          </h2>
          <p className="mb-8 mt-4 max-w-[48ch] text-slate">
            Leave your email and we will tell you when a role opens.
          </p>
          <TalentSignup />
        </div>
      </section>
    </>
  );
}
