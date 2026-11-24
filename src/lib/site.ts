export const site = {
  name: "Rare Input",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rareinput.com",
  email: "hello@rareinput.com",
  logo: "/logo.svg",
  /** Public profiles (LinkedIn, Facebook, Instagram, X...). Used for structured data. */
  sameAs: [
    "https://www.linkedin.com/company/rareinput/",
    "https://www.facebook.com/rareinput",
  ] as string[],
  description:
    "Rare Input builds Shopify stores and apps, and runs the on-page SEO, technical SEO and e-commerce marketing that brings buyers to them.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
