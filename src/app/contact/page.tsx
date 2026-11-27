import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free store check",
  description: "Send your store URL and get a free written note with the three biggest issues holding it back.",
  alternates: { canonical: "/contact" },
};

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

async function Prefilled({ searchParams }: { searchParams: PageProps<"/contact">["searchParams"] }) {
  const sp = await searchParams;
  const store = first(sp.store).replace(/^https?:\/\//i, "").slice(0, 200);
  const service = first(sp.service).slice(0, 80);
  return <ContactForm defaultStore={store} defaultService={service} />;
}

export default function ContactPage(props: PageProps<"/contact">) {
  return (
    <section className="wrap grid gap-12 pb-10 pt-14 sm:pt-20 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h1 className="display h-hero">Get your free store check</h1>
        <p className="mt-6 max-w-[34ch] text-xl text-slate">
          Send your store URL. We reply by email in two working days with the three biggest issues and what fixing them would cost.
        </p>
        <ul className="mt-8 space-y-3">
          {["No call needed", "No card, no obligation", "The note is yours to keep"].map((t) => (
            <li key={t} className="flex gap-3 font-semibold">
              <svg aria-hidden viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 flex-none text-volt" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Prefer email?{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-volt underline underline-offset-4 hover:text-ink">
            {site.email}
          </a>
        </p>
      </div>
      <div className="lg:col-span-7">
        <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8">
          <Suspense fallback={<div className="h-96" />}>
            <Prefilled searchParams={props.searchParams} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
