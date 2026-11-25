import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CareersForm } from "@/components/careers-form";
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
  {
    title: "Flexible working hours",
    body: "We care about the work getting done well, and you have room to arrange your day around it.",
  },
  {
    title: "Remote or in office",
    body: "Both options are available, so you can work from where you do your best work.",
  },
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
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="border-t-2 border-ink pt-4">
                <h3 className="display text-2xl">{r.title}</h3>
                <p className="mt-2 max-w-[44ch] text-slate">{r.body}</p>
              </li>
            ))}
          </ul>
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
    </>
  );
}
