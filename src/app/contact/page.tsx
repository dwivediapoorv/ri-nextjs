import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free store audit or tell us about a project.",
  alternates: { canonical: "/contact" },
};

const first = (v: string | string[] | undefined) =>
  (Array.isArray(v) ? v[0] : v) ?? "";

async function PrefilledForm({
  searchParams,
}: {
  searchParams: PageProps<"/contact">["searchParams"];
}) {
  const sp = await searchParams;
  const store = first(sp.store).replace(/^https?:\/\//i, "").slice(0, 200);
  const service = first(sp.service).slice(0, 80);
  return <ContactForm defaultStore={store} defaultService={service} />;
}

export default function ContactPage(props: PageProps<"/contact">) {
  return (
    <section className="wrap grid gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h1 className="display h-hero">Tell us about your store</h1>
        <p className="mt-6 max-w-[40ch] text-xl text-slate">
          Send a store URL and a line about what you need. We reply by email
          with next steps.
        </p>
        <p className="mt-8">
          Prefer email?{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-ultra underline underline-offset-4 hover:text-ink"
          >
            {site.email}
          </a>
        </p>
      </div>
      <div className="lg:col-span-7">
        <Suspense fallback={<ContactForm />}>
          <PrefilledForm searchParams={props.searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
