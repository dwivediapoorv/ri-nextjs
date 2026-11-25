import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the rare Input website.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    title: "About these terms",
    body: [
      "These terms cover your use of this website. By using it, you agree to them. If you do not agree, please do not use the website.",
    ],
  },
  {
    title: "Information on this website",
    body: [
      "We write this website to describe our services and our work. It is general information, not professional, legal or financial advice. We try to keep it accurate, but we do not promise it is complete or up to date.",
      "Case studies are shown with the permission of the clients named. Results differ from project to project, and past work does not guarantee future results.",
    ],
  },
  {
    title: "Our services",
    body: [
      "Work we do for you is covered by a separate written agreement or proposal that sets out the scope, price and timeline. These terms do not replace it.",
      "A free store audit is a written review based on what we can see publicly. It is information for you to use, and it does not promise any ranking, traffic or sales.",
    ],
  },
  {
    title: "Forms and applications",
    body: [
      "Sending a form does not create a contract or a job offer. Please give accurate information. We handle what you send as described in our Privacy Policy.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "Please do not misuse the website. In particular, do not:",
      [
        "send spam or false information through the forms,",
        "try to break, overload or gain unauthorised access to the website,",
        "copy the website with automated tools without our written permission.",
      ],
    ],
  },
  {
    title: "Ownership",
    body: [
      "The text, design, logo and code of this website belong to rare Input or its licensors. Names, logos and work of clients and other companies belong to them. You may share links to our pages, but you may not copy or reuse our content without permission.",
    ],
  },
  {
    title: "Links to other sites",
    body: [
      "We link to other websites for your convenience. We do not control them and are not responsible for them.",
    ],
  },
  {
    title: "Limits on our responsibility",
    body: [
      "We provide this website as it is. To the extent the law allows, rare Input is not liable for any loss that comes from using the website or relying on its content. Nothing in these terms limits rights you have under law that cannot be limited.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of India. Any dispute about this website is subject to the courts of India.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these terms. The date at the top shows when they last changed. Using the website after a change means you accept the new terms.",
    ],
  },
  {
    title: "Contact",
    body: [`Questions about these terms: ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      path="/terms"
      updated="25 November 2026"
      intro="These are the terms for using this website. They are written to be read."
      sections={sections}
    />
  );
}
