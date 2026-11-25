import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How rare Input collects, uses and protects the information you send through this website.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      `rare Input is a studio based in Noida, India, that builds Shopify stores and apps and runs SEO and marketing for e-commerce brands. This policy explains what we do with the information you send us through this website. You can reach us at ${site.email}.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "We collect only what you choose to send us:",
      [
        "Contact form and audit request: your name, email address, store URL, the service you are interested in, and your message.",
        "Careers form: your name, email address, the role you are interested in, an optional LinkedIn or portfolio link, your resume file, and an optional note.",
        "Job alerts sign-up: your email address.",
      ],
      "Our hosting provider also keeps standard server logs, such as IP address, browser type and the pages requested. We use no advertising cookies on this website. If we add analytics later, we will update this page.",
    ],
  },
  {
    title: "How we use it",
    body: [
      [
        "To reply to your enquiry and prepare the audit or proposal you asked for.",
        "To review your job application and contact you about it.",
        "To email you when a role opens, if you signed up for job alerts.",
        "To keep the website secure and working, and to prevent spam.",
      ],
      "We do not sell your information, and we do not use it for advertising.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "We use a few service providers to run this website, and they handle your information on our behalf:",
      [
        "Vercel, which hosts the website.",
        "Resend, which delivers the emails that the forms send to us.",
      ],
      "We may also share information when the law requires it. These providers may process data on servers outside India.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep enquiries for as long as we need them to reply and to work with you. We keep resumes and job alert sign-ups for hiring purposes. You can ask us to delete your information at any time, and you can ask to leave the job alerts list.",
    ],
  },
  {
    title: "Your choices",
    body: [
      `You can ask to see the information we hold about you, correct it, delete it, or withdraw your consent to our using it. Email ${site.email} and we will respond within a reasonable time. We handle personal data in line with the laws that apply in India, including the Digital Personal Data Protection Act, 2023.`,
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable steps to protect your information, but no website or email is completely secure. Do not send passwords, payment card details or other sensitive information through the forms.",
    ],
  },
  {
    title: "Children",
    body: [
      "This website is for businesses and job applicants. It is not meant for children under 18, and we do not knowingly collect their information.",
    ],
  },
  {
    title: "Links to other sites",
    body: [
      "This website links to other sites, such as LinkedIn and our clients' websites. We are not responsible for their content or privacy practices.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy. The date at the top shows when it last changed.",
    ],
  },
  {
    title: "Contact",
    body: [`Questions about this policy: ${site.email}.`],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="25 November 2026"
      intro="We ask for as little information as we need. This page explains what we collect through the forms on this website, why, and what you can do about it."
      sections={sections}
    />
  );
}
