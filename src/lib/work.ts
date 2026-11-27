export type Case = {
  slug: string;
  client: string;
  line: string;
  result: string;
  tags: string[];
  body: string[];
  url?: string;
  tone: "blue" | "lemon" | "ink";
};

export const cases: Case[] = [
  {
    slug: "clean-and-conscious-care",
    client: "Clean & Conscious Care",
    line: "A personal care brand's whole store, live in 30 days.",
    result: "Live in 30 days",
    tags: ["Store build", "SEO", "Meta ads", "Tracking"],
    url: "https://cleanandconsciouscare.com",
    body: [
      "A small-batch personal care brand with 31 products and a founder who makes, packs and ships everything herself. We took on everything digital.",
      "We created the product catalog, built a custom Shopify theme to her requirements and took the store live in 30 days. Keyword research was mapped to collection and product pages, and a Meta ads plan and ad creative library were set up.",
      "Their checkout stops Meta's standard pixel from seeing purchases, so we planned a server-side Conversions API route to keep ad measurement honest.",
    ],
  },
  {
    slug: "uporthocon-2025",
    client: "UPORTHOCON 2025",
    line: "Website, registration portal and payments for a medical conference.",
    result: "750 doctors and 1,200 students registered",
    tags: ["Website", "Registration portal", "Payments"],
    body: [
      "The annual conference of the Uttar Pradesh Orthopaedic Association, hosted in Ghaziabad by the Ghaziabad Orthopaedic Association.",
      "We built the conference website, the portal where attendees registered, and the payment gateway integration that took registration fees online. Around 750 orthopaedic doctors and 1,200 medical students registered through it.",
    ],
    tone: "lemon",
  },
  {
    slug: "the-string-thing",
    client: "The String Thing",
    line: "A guitar school's website, plus an app that plays song tabs.",
    result: "A browser app students use to play their songs",
    tags: ["Website", "Custom web app"],
    url: "https://thestringthing.in",
    body: [
      "A guitar school in Noida that teaches one-on-one, in-person lessons.",
      "We built the school's website and an app where students play the tabs of any song they have learned, right in the browser with nothing to install.",
    ],
    tone: "ink",
  },
].map((c) => ({ tone: "blue" as const, ...c })) as Case[];
