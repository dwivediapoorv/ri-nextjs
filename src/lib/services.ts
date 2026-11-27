export type Service = {
  slug: string;
  name: string;
  short: string;
  /** What the buyer gets, in plain words. */
  pitch: string;
  price: { from: number; unit?: string; note?: string } | { free: true };
  time: string;
  includes: string[];
  /** Shown on the home page grid. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "free-store-check",
    name: "Free store check",
    short: "The three biggest things holding your store back.",
    pitch:
      "Send your store URL. We review search, speed and the buying path, then send you a short written note with the three issues worth fixing first.",
    price: { free: true },
    time: "Reply within 2 working days",
    includes: [
      "Search: indexing, duplicate URLs, titles and structured data",
      "Speed: mobile load time and the apps that slow it down",
      "Buying path: product page, cart and checkout friction",
      "A written note, no sales call needed",
    ],
    featured: true,
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    short: "Fix what stops Google from crawling and ranking your store.",
    pitch:
      "A full audit of crawling, indexing, speed and structured data, then the fixes made in your theme on a duplicate copy you review before it goes live.",
    price: {
      from: 249,
      note: "Small store. Larger catalogs cost more.",
    },
    time: "1 to 2 weeks",
    includes: [
      "Crawl and indexation audit with a prioritised fix list",
      "Canonicals, pagination and filter URL rules",
      "Product, breadcrumb and organization structured data",
      "robots.txt, sitemap and redirect clean-up",
      "Core Web Vitals work on images, fonts and app scripts",
    ],
    featured: true,
  },
  {
    slug: "ecommerce-seo",
    name: "E-commerce SEO",
    short: "The whole search program for your store, in one monthly plan.",
    pitch:
      "Technical fixes, on-page work for collections and products, content shoppers actually search for, and local SEO if you have shops. One team, one report.",
    price: {
      from: 1499,
      unit: "month",
      note: "Cheaper than buying the parts separately.",
    },
    time: "First results in 3 to 4 months",
    includes: [
      "Everything in Technical SEO",
      "Keyword map for collections, products and the blog",
      "Titles, headings and copy written and published",
      "Buying guides and category content",
      "Local SEO: Google Business Profile, local pages, reviews",
      "Monthly report with clicks, rankings and search revenue",
    ],
    featured: true,
  },
  {
    slug: "conversion-sprint",
    name: "Conversion sprint",
    short: "Turn more of your current visitors into buyers.",
    pitch:
      "Four weeks spent on the pages where shoppers drop off. We find the friction, fix the biggest problems in your theme and measure what changed.",
    price: { from: 1800, note: "One four-week sprint." },
    time: "4 weeks",
    includes: [
      "Analytics and funnel review before anything is changed",
      "Product page, collection page and cart improvements",
      "Mobile checkout and payment friction review",
      "Trust, shipping and returns messaging rewritten",
      "A before and after report on what moved",
    ],
    featured: true,
  },
  {
    slug: "shopify-store-build",
    name: "Shopify store build",
    short: "A fast, editable store built to sell from day one.",
    pitch:
      "A new store or a move from another platform. Online Store 2.0 themes your team can edit without a developer, with search set up so launch does not cost you traffic.",
    price: {
      from: 2500,
      note: "Theme-based launch. Custom themes from $6,000.",
    },
    time: "3 to 8 weeks",
    includes: [
      "Design-led theme setup or a fully custom theme",
      "Metafields and sections so merchandising stays in your hands",
      "Product and data migration with a redirect map",
      "Speed and accessibility pass before launch",
      "Recorded handover for your team",
    ],
    featured: true,
  },
  {
    slug: "shopify-apps",
    name: "Shopify apps and integrations",
    short: "Custom apps, checkout extensions and connected systems.",
    pitch:
      "Private apps for your own operations and public apps for the App Store, plus the integrations that connect Shopify to your ERP, shipping or CRM.",
    price: { from: 4000, note: "Scoped after a short spec." },
    time: "4 to 12 weeks",
    includes: [
      "A written spec and data model before code",
      "Embedded admin app, theme and checkout extensions",
      "Webhook handling with retries",
      "Hosting, logging and monitoring",
      "App Store submission support",
    ],
    featured: true,
  },
  {
    slug: "paid-media",
    name: "Paid media",
    short: "Google and Meta ads with tracking you can trust.",
    pitch:
      "We fix measurement first, then run Google and Meta campaigns that you can read in profit terms, not only in clicks.",
    price: {
      from: 800,
      unit: "month",
      note: "Management fee. Ad spend is paid to the platforms directly.",
    },
    time: "Tracking fixed in week 1",
    includes: [
      "Tracking and conversion setup checked first",
      "Search, Shopping and Meta campaign management",
      "Creative briefs and ad copy",
      "Weekly notes and a monthly report",
    ],
  },
  {
    slug: "email-and-sms",
    name: "Email and SMS",
    short: "Bring back the buyers you already earned.",
    pitch:
      "Welcome, abandoned cart, post-purchase and win-back flows, plus campaigns, built in the platform you already use.",
    price: { from: 600, unit: "month" },
    time: "Core flows live in 3 weeks",
    includes: [
      "Klaviyo or Shopify Email setup and list clean-up",
      "Core flows written and designed",
      "Monthly campaigns",
      "Revenue reporting by flow",
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const priceLabel = (s: Service) =>
  "free" in s.price
    ? "Free"
    : `From $${s.price.from.toLocaleString("en-US")}${s.price.unit ? ` / ${s.price.unit}` : ""}`;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you guarantee rankings or sales?",
    a: "No. Nobody honest can promise a position on Google. We promise the work: what gets fixed, by when, and a report that shows what changed.",
  },
  {
    q: "Is the free store check really free?",
    a: "Yes. You get a written note with the three biggest issues. There is no call, no card and no obligation. If we can help fix them, we send a price. If not, the note is still yours.",
  },
  {
    q: "Do you work on stores that are not on Shopify?",
    a: "Shopify and Shopify Plus are our focus. If you are on another platform and thinking of moving, we can plan and run the migration.",
  },
  {
    q: "Will you edit my live theme?",
    a: "No. Changes go into a duplicate theme. You review it, and we publish only after you say yes.",
  },
  {
    q: "What does it cost to start?",
    a: "A technical SEO audit starts at $249 and a store build at $2,500. Monthly plans start at $600. Final prices depend on catalog size, apps and scope, and we confirm a fixed price before any work starts.",
  },
  {
    q: "How long until we see results?",
    a: "Technical and speed fixes show in Search Console within weeks. Ranking gains from content and on-page work usually take three to four months. We report the early signs from month one.",
  },
];
