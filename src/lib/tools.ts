import type { Faq } from "./services";

export type Tool = {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  summary: string;
  features: { title: string; body: string }[];
  forWho: string[];
  faqs: Faq[];
  /** Value used by the contact form's "service" field. */
  contactService: string;
};

export const tools: Tool[] = [
  {
    slug: "helpdesk",
    category: "Productivity tools",
    name: "rare Input Helpdesk",
    tagline: "Turn every email into a ticket your team can own.",
    summary:
      "A shared-inbox helpdesk. Emails sent to your support addresses become tickets, you assign each one to a team or a person, and replies go out from the shared address the email arrived on. Connect more than one mailbox and handle them all in one place.",
    features: [
      {
        title: "Email becomes a ticket",
        body: "Every email that reaches a connected address turns into a ticket automatically, so nothing sits unseen in a personal inbox.",
      },
      {
        title: "Assign to teams or people",
        body: "Give a ticket to a whole team or to one person, so it is always clear who is handling it.",
      },
      {
        title: "Reply from the shared address",
        body: "Replies go out from the shared email address the message was received on. Customers see one consistent sender, not someone's personal email.",
      },
      {
        title: "Many mailboxes, one place",
        body: "Connect several email addresses, such as support, orders and sales, and work through all of them from a single screen.",
      },
    ],
    forWho: [
      "Teams that share a support or sales mailbox and lose track of who replied",
      "Businesses with several email addresses that want one place to handle them",
      "Companies that want tickets and ownership without a heavy support platform",
    ],
    faqs: [
      {
        q: "How does an email become a ticket?",
        a: "You connect an email address. From then on, every email that arrives there is turned into a ticket your team can assign and answer.",
      },
      {
        q: "Can more than one person reply from the same address?",
        a: "Yes. Replies are sent from the shared address the email was received on, so anyone on the assigned team can answer without using a personal inbox.",
      },
      {
        q: "Can I connect several email addresses?",
        a: "Yes. You can configure multiple email addresses and manage the tickets from all of them in one place.",
      },
      {
        q: "Which email providers does it work with?",
        a: "We confirm the exact providers and setup with you in a demo, based on the mailboxes you use today.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing depends on the size of your team and mailboxes. Ask for a demo and we will send a clear price.",
      },
    ],
    contactService: "helpdesk",
  },
];

export const toolBySlug = (slug: string) => tools.find((t) => t.slug === slug);

export type Extension = {
  name: string;
  summary: string;
  /** Chrome Web Store link. Add it when known; the card links out once it is set. */
  url?: string;
};

export const extensions: Extension[] = [
  {
    name: "Hawk Eye SEO Analyzer",
    summary:
      "Run a fast SEO check on any page in one click: titles, meta descriptions, headings, links and image alt text.",
    url: "https://chromewebstore.google.com/detail/hawk-eye-seo-analyzer/ekjmdffolkdkmedpecfhbdmjappekobe",
  },
  {
    name: "ADA Compliance Checker",
    summary:
      "Check any page for accessibility problems against ADA and WCAG 2.1 AA, with failing elements highlighted by severity.",
    url: "https://chromewebstore.google.com/detail/ada-compliance-checker/lbhjbhonkoihheickcjinkajdcgepnfk",
  },
  {
    name: "Font Scope",
    summary: "See which fonts a page uses.",
  },
  {
    name: "Color Palette Extractor",
    summary:
      "Scan any page in one click and get its colours, with hex codes you can copy.",
    url: "https://chromewebstore.google.com/detail/color-palette-extractor/hiopkkjnogdadhhcfkmjgmlelampebog",
  },
  {
    name: "Image Inspector",
    summary: "Inspect the images on a page.",
  },
];
