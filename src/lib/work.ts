import type { PillarId } from "./services";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  url?: string;
  facts: { label: string; value: string }[];
  brief: string;
  sections: { pillar: PillarId; items: string[] }[];
  problem?: { title: string; body: string[] };
  cta?: { heading: string; label: string; href: string };
};

export const cases: CaseStudy[] = [
  {
    slug: "clean-and-conscious-care",
    client: "Clean & Conscious Care",
    title: "A Shopify store for a small-batch personal care brand",
    summary:
      "Store build, search groundwork, ad strategy and tracking for a handmade personal care brand with 31 products.",
    url: "https://cleanandconsciouscare.com",
    facts: [
      { label: "Client", value: "Clean & Conscious Care, with founder Charu Varshney" },
      { label: "Platform", value: "Shopify, with Fastrr checkout through Shiprocket" },
      { label: "Timeline", value: "Live in 30 days, from creating the products to a custom-built theme" },
      { label: "Scope", value: "Store build, SEO, Meta advertising, tracking" },
    ],
    brief:
      "Clean & Conscious Care makes natural personal care products in small batches: infused oils, essential oils and no synthetic fragrance. Charu handles making, packing and shipping. We took on everything digital: the store, how it shows up in search, how it is advertised, and how sales are measured.",
    sections: [
      {
        pillar: "build",
        items: [
          "Created the product catalog and built a custom Shopify theme to Charu’s requirements, taking the whole store live in 30 days. The catalog has 31 products across hair care, body care, face and lip care, and personal care.",
          "Set up a bundles collection and worked out what a “set of any three” soap bundle needs. Shopify’s own bundles only handle fixed sets, so a third-party app has to be chosen and tested against checkout, shipping and stock counts.",
        ],
      },
      {
        pillar: "rank",
        items: [
          "Researched keywords in SEMrush and mapped them to specific collection and product URLs.",
          "Drafted meta titles and descriptions for the products.",
          "Planned breadcrumb markup for product and collection templates, and review markup for launch.",
        ],
      },
      {
        pillar: "grow",
        items: [
          "Set the Meta advertising plan: hair oils first for cold audiences, one Sales campaign with a broad ad set.",
          "Produced an ad creative library and video scripts for the hair elixirs.",
          "Reviewed homepage and product copy against Meta’s commerce policies and rewrote risky claims in plain cosmetic language.",
          "Verified the business for WhatsApp Business so customer messaging can run from the brand’s own account.",
        ],
      },
    ],
    problem: {
      title: "When the checkout hides your purchases from Meta",
      body: [
        "The store uses Fastrr checkout through Shiprocket instead of Shopify’s own checkout. That is a sensible choice for shipping and payments in India, but it stops the standard Meta pixel from seeing the Purchase event. Without that event, Meta cannot tell which ads lead to sales.",
        "The approach is to send purchases to Meta from the server through the Conversions API, set up inside Shiprocket with the pixel ID and an access token from Events Manager. We mapped the three ways to get that token, depending on who owns the Meta business account, so the setup does not stall on permissions.",
      ],
    },
  },
  {
    slug: "uporthocon-2025",
    client: "Ghaziabad Orthopaedic Association",
    title: "A website and registration portal for UPORTHOCON 2025",
    summary:
      "Conference website, registration portal and payment gateway integration for the Uttar Pradesh Orthopaedic Association's annual conference, hosted in Ghaziabad.",
    facts: [
      { label: "Client", value: "Ghaziabad Orthopaedic Association, organiser of the 2025 conference" },
      { label: "Event", value: "UPORTHOCON 2025, the annual conference of the Uttar Pradesh Orthopaedic Association, in Ghaziabad" },
      { label: "Scope", value: "Website, registration portal, payment gateway integration" },
      { label: "Registrations", value: "Around 750 orthopaedic doctors and 1,200 medical students" },
    ],
    brief:
      "UPORTHOCON is the annual conference of the Uttar Pradesh Orthopaedic Association. The 2025 edition was hosted in Ghaziabad by the Ghaziabad Orthopaedic Association. We built the conference website, the portal where attendees register, and the payment gateway integration that takes registration payments online. Around 750 orthopaedic doctors and 1,200 medical students registered through it.",
    sections: [
      {
        pillar: "build",
        items: [
          "Built the conference website for UPORTHOCON 2025.",
          "Built the registration portal where attendees sign up for the conference.",
          "Integrated a payment gateway so registration payments are made online.",
        ],
      },
    ],
    cta: {
      heading: "Planning a conference or event?",
      label: "Contact Sales",
      href: "/contact?service=other",
    },
  },
  {
    slug: "the-string-thing",
    client: "The String Thing",
    title: "A website and a tab-playing app for a guitar school",
    summary:
      "A website for a guitar school in Noida, plus a web app where students play the tabs of the songs they have learned, right in the browser.",
    url: "https://thestringthing.in",
    facts: [
      { label: "Client", value: "The String Thing, a guitar school in Noida" },
      { label: "Platform", value: "Website and a browser-based app" },
      { label: "Scope", value: "Website, student tab-playing app" },
    ],
    brief:
      "The String Thing teaches one-on-one, in-person guitar lessons in Noida. We built the school's website, and an app that lets students play the tabs of any song they have learned, in their browser, without needing anything installed.",
    sections: [
      {
        pillar: "build",
        items: [
          "Built the school's website, where new students can learn about the lessons and book a trial.",
          "Built an app where students play the tabs of the songs they have learned, in the browser.",
        ],
      },
    ],
    cta: {
      heading: "Need a website or a custom app?",
      label: "Contact Sales",
      href: "/contact?service=other",
    },
  },
];

export const caseBySlug = (slug: string) => cases.find((c) => c.slug === slug);
