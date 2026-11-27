import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How rare Input handles the details you send us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="wrap max-w-3xl pb-10 pt-14 sm:pt-20">
      <h1 className="display h-hero">Privacy</h1>
      <div className="mt-8 space-y-5 text-lg">
        <p>
          When you use our contact form we receive your name, email address, store URL and message. We use them only to reply to you and to prepare the work you ask about.
        </p>
        <p>
          We do not sell your details. We use an email delivery service to receive form messages, and it processes them on our behalf.
        </p>
        <p>
          To ask us to delete or correct your details, email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-volt underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <p className="text-slate">This is a short summary and will be expanded before launch.</p>
      </div>
    </section>
  );
}
