export type PillarId = "build" | "rank" | "grow";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  pillar: PillarId;
  name: string;
  tagline: string;
  summary: string;
  /** What the client gives us to start. */
  bring: string[];
  /** What the client receives. */
  get: string[];
  faqs: Faq[];
};

export type Pillar = {
  id: PillarId;
  name: string;
  line: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    id: "build",
    name: "Build",
    line: "Stores and apps your team can run.",
    description:
      "Themes, migrations and custom apps on Shopify's own tooling, built so merchandising can change things without opening a ticket.",
  },
  {
    id: "rank",
    name: "Rank",
    line: "Search fixed at the template level.",
    description:
      "One change to a collection template reaches every collection. We work where Shopify's SEO problems actually live: themes, URLs and apps.",
  },
  {
    id: "grow",
    name: "Grow",
    line: "Paid, email and measurement.",
    description:
      "Channels that bring back buyers the store has already earned, with tracking you can trust before any budget goes in.",
  },
];

export const services: Service[] = [
  {
    slug: "shopify-store-development",
    pillar: "build",
    name: "Shopify store development",
    tagline: "Custom themes your team can edit without a developer.",
    summary:
      "Online Store 2.0 themes built around your brand and catalog. Sections, metafields and metaobjects put merchandising in the theme editor. We also move stores over from WooCommerce, Magento, BigCommerce and others without losing the search traffic they have earned.",
    bring: [
      "Brand assets or design files",
      "Access to the current store, or exports of products, collections and customers",
      "The apps and integrations you use today",
      "Campaigns and pages planned for the next six months",
    ],
    get: [
      "A custom Online Store 2.0 theme in Liquid, with app blocks",
      "Product, collection, cart and landing page templates",
      "Metafields and metaobjects for size charts, ingredients, badges and similar data",
      "Data migration and a redirect map when you are replatforming",
      "A performance and accessibility pass before launch",
      "A written handover and a recorded walkthrough",
    ],
    faqs: [
      {
        q: "Do you build from scratch or start from an existing theme?",
        a: "Either. A well-chosen base theme is faster and cheaper when your design needs are standard. Custom work earns its cost when merchandising or brand requirements push past what a base theme allows. We recommend one after seeing your catalog.",
      },
      {
        q: "Will we lose rankings when we migrate?",
        a: "Rankings drop when URLs change without redirects, or when new templates leave out titles and structured data. We map every indexed URL, keep the ones we can, redirect the rest, and check Search Console after launch.",
      },
      {
        q: "Can we edit the store ourselves afterwards?",
        a: "Yes. That is the reason for building with sections and metafields. The handover shows your team how to change content, and we are available for anything that needs code.",
      },
    ],
  },
  {
    slug: "shopify-app-development",
    pillar: "build",
    name: "Shopify app development",
    tagline: "Custom and public apps, built on Shopify's own tooling.",
    summary:
      "Private apps for your own operations and public apps for the App Store. We build embedded admin screens with Polaris, theme app extensions, checkout UI extensions and Shopify Functions, and connect Shopify to the systems around it.",
    bring: [
      "A description of the workflow today and where it breaks",
      "Access to the systems to connect, such as ERP, 3PL or CRM",
      "A development or staging store",
      "For public apps: who the app is for and a rough pricing idea",
    ],
    get: [
      "A scoped spec and data model before any code is written",
      "An embedded admin app using Shopify CLI, App Bridge and Polaris",
      "Theme app extensions, checkout extensions or Functions where the job needs them",
      "Webhook handling with retries and idempotency",
      "Hosting, logging and error monitoring set up",
      "App Store submission support for public apps",
    ],
    faqs: [
      {
        q: "Should this be a custom app or a public one?",
        a: "A custom app serves one store or one company and skips App Store review. A public app is a product: it needs billing, onboarding and support. We help you decide before scoping.",
      },
      {
        q: "Who maintains the app after launch?",
        a: "You own the code. Shopify releases a new API version every quarter, so we offer a maintenance plan, or we hand over documentation to your in-house developers.",
      },
      {
        q: "Can an app replace one of the apps we already pay for?",
        a: "Sometimes. If you use a small part of a large app, a focused custom app can be cheaper to run and lighter on page speed. We will say when buying is the better answer.",
      },
    ],
  },
  {
    slug: "custom-dashboards",
    pillar: "build",
    name: "Custom dashboards and internal tools",
    tagline: "One screen for the numbers and tasks your team checks every day.",
    summary:
      "Web dashboards and internal tools that pull your store, search, ads and spreadsheet data into one place, or give your team a simple screen for work that now lives in spreadsheets and chat threads: order follow-ups, stock checks, client reporting, task tracking.",
    bring: [
      "The questions your team asks of the data every week",
      "Access to the sources: Shopify, GA4, Search Console, ad accounts, spreadsheets",
      "A list of who will use it and what each person needs to see or do",
      "The spreadsheets or processes it should replace",
    ],
    get: [
      "A short spec covering users, data sources and the screens, agreed before building",
      "A web app your team signs in to, with roles and permissions",
      "Data connections that refresh on a schedule, so nobody exports CSVs by hand",
      "Charts, tables, filters and saved views built around your questions",
      "Alerts or reminders where the work needs them, such as a stock level or an overdue task",
      "Hosting, backups and a handover guide",
    ],
    faqs: [
      {
        q: "Why not use a Looker Studio or spreadsheet dashboard?",
        a: "For reading numbers, those are often enough, and we will say so. A custom tool earns its cost when people need to act on the data: assign work, update records, approve things, or see different views by role.",
      },
      {
        q: "Can it connect to the tools we already use?",
        a: "Usually. Shopify, Google Analytics, Search Console and most ad platforms have APIs we can read from. We check access to each source before quoting.",
      },
      {
        q: "Who owns the dashboard once it is built?",
        a: "You do. The code and the data stay in your accounts, and we can keep maintaining it on a monthly plan or hand it to your own developers.",
      },
    ],
  },
  {
    slug: "on-page-seo",
    pillar: "rank",
    name: "On-page SEO",
    tagline: "Every collection and product page mapped to a search.",
    summary:
      "We tie keyword research to your catalog structure: which collections should rank for category terms, which products for specific ones, and what each page needs to say. Then we write and implement titles, headings, copy, internal links and schema in your store.",
    bring: [
      "Search Console and GA4 access",
      "Staff access to the Shopify admin",
      "Product data and any brand or tone guidelines",
      "A list of competitors you watch",
    ],
    get: [
      "A keyword-to-URL map across collections, products and the blog",
      "Titles, meta descriptions and H1s written and implemented",
      "Collection page copy and FAQ sections",
      "Product page template improvements, including image alt text and review markup",
      "An internal linking plan covering navigation, breadcrumbs and related products",
      "A monthly report with clicks and rankings by page group",
    ],
    faqs: [
      {
        q: "How long until we see results?",
        a: "New and rewritten pages usually take a few months to settle. From the first month we report leading indicators: pages indexed, impressions and average position, so you can see movement before it reaches revenue.",
      },
      {
        q: "Do you rewrite every product description?",
        a: "No. We rank pages by revenue and search demand and start at the top. Fixing the template often does more than rewriting hundreds of descriptions by hand.",
      },
      {
        q: "Do you need to change our theme?",
        a: "Sometimes small edits to Liquid are needed for headings, breadcrumbs or schema. We make them on a duplicate theme and publish after you review.",
      },
    ],
  },
  {
    slug: "technical-seo",
    pillar: "rank",
    name: "Technical SEO",
    tagline: "Fix what stops Google from crawling and indexing your store.",
    summary:
      "Shopify creates duplicate product URLs, thin filtered pages and script-heavy templates that waste crawl budget and slow pages down. We audit crawling, indexing, structured data and Core Web Vitals, then fix them in the theme.",
    bring: [
      "Search Console and GA4 access",
      "Admin and theme access; we work on a duplicate theme",
      "The list of installed apps",
      "Dates of any recent redesign or migration",
    ],
    get: [
      "A crawl and indexation audit with a prioritized fix list",
      "Rules for canonicals, pagination and filtered collection URLs",
      "A review of robots.txt.liquid, sitemaps and redirects, including 404 cleanup",
      "Product, breadcrumb, organization and FAQ structured data, validated",
      "Core Web Vitals work on images, fonts and app scripts",
      "hreflang and Shopify Markets setup for international stores",
    ],
    faqs: [
      {
        q: "Shopify limits what you can change. Is technical SEO still worth it?",
        a: "Yes. Most problems live in the theme, collections and apps, and those are ours to change. Things Shopify fixes, like the /products/ URL prefix, are handled with canonicals rather than worked around.",
      },
      {
        q: "Will you edit our live theme?",
        a: "No. Changes go into a duplicate theme, and we publish only after you have reviewed them.",
      },
      {
        q: "Do you remove apps that slow the store down?",
        a: "We measure what each app costs in load time and recommend what to keep, replace or remove. You make the call, and we do the work.",
      },
    ],
  },
  {
    slug: "content-seo",
    pillar: "rank",
    name: "Content and link building",
    tagline: "Buying guides and category content that earn clicks and links.",
    summary:
      "Content planned from what you sell: buying guides, comparisons and category explainers that answer the questions shoppers search before they buy, plus outreach to earn links to the pages that matter commercially.",
    bring: [
      "Access to someone who knows the product well",
      "Your existing blog and content, if any",
      "Competitors and publications you respect",
    ],
    get: [
      "A topic plan tied to your collections and best sellers",
      "Briefs for your in-house writers, or finished articles written and edited by us",
      "Internal links from articles to the collections they support",
      "A link outreach plan with named targets",
      "A refresh schedule for older posts",
    ],
    faqs: [
      {
        q: "Who writes the content?",
        a: "Your writers, working from our briefs, or ours. Either way, we edit every piece, and you review it before it is published.",
      },
      {
        q: "Does a store need a blog?",
        a: "Not always. Some stores gain more from better collection pages. The topic plan shows where the search demand sits and whether articles are the right format.",
      },
    ],
  },
  {
    slug: "paid-media",
    pillar: "grow",
    name: "Paid media",
    tagline: "Google and Meta campaigns built around your margins.",
    summary:
      "Google Shopping, Performance Max, Search and Meta prospecting and retargeting. We start with the product feed in Merchant Center, because feed quality decides how well Shopping campaigns run.",
    bring: [
      "Access to your ad accounts and Merchant Center",
      "Target margin, ROAS or acquisition cost",
      "Creative assets, or approval for us to produce them",
      "A monthly budget",
    ],
    get: [
      "Product feed cleanup and supplemental feeds",
      "Campaign structure organized by margin and product group",
      "Creative briefs and ad variations",
      "A conversion tracking check before spend begins",
      "Weekly optimization and a monthly report on blended and per-channel results",
    ],
    faqs: [
      {
        q: "Does the ad spend go through you?",
        a: "No. Spend stays in your ad accounts and on your cards, and you keep ownership of every account and asset.",
      },
      {
        q: "Is our budget big enough?",
        a: "If it is too small for the campaigns to learn from, we will say so and suggest a narrower setup, rather than spread it thin.",
      },
    ],
  },
  {
    slug: "email-and-sms",
    pillar: "grow",
    name: "Email and SMS",
    tagline: "Lifecycle flows that earn revenue between campaigns.",
    summary:
      "We set up and run lifecycle messaging in Klaviyo and similar platforms: the flows that welcome new subscribers, recover carts, follow up on orders and win customers back.",
    bring: [
      "Access to your email or SMS platform",
      "Brand assets and tone of voice",
      "Access to customer and order data",
      "Your discount and offer rules",
    ],
    get: [
      "Welcome, abandoned cart, browse abandonment, post-purchase and winback flows",
      "Segments built on purchase behavior",
      "Email templates in your brand",
      "Sender authentication with SPF, DKIM and DMARC",
      "A campaign calendar and monthly reporting",
    ],
    faqs: [
      {
        q: "Which platforms do you work with?",
        a: "Klaviyo is our default for Shopify stores. If you already use another platform that works well, we will work in it.",
      },
      {
        q: "Do we need a big list to start?",
        a: "No. Welcome and cart flows work on small lists, and they are the first thing we build.",
      },
    ],
  },
  {
    slug: "conversion-and-analytics",
    pillar: "grow",
    name: "Conversion and analytics",
    tagline: "Tracking you can trust, then tests worth running.",
    summary:
      "We fix measurement first, because test results and ad optimization are only as good as the data behind them. Then we find where shoppers drop out and test changes against it.",
    bring: [
      "GA4, Google Tag Manager and Shopify admin access",
      "Ad platform access",
      "The questions your numbers cannot answer today",
    ],
    get: [
      "A tracking audit and fix plan",
      "GA4 and Tag Manager set up with the standard purchase events",
      "Meta Conversions API and Google enhanced conversions",
      "A funnel report from landing page to checkout",
      "A prioritized test backlog, with tests run on product and cart pages",
      "A Looker Studio dashboard your team can read",
    ],
    faqs: [
      {
        q: "Why start with tracking?",
        a: "If purchases are missing or double counted, every report and every ad algorithm is working from wrong numbers. We fix that before we change anything on the store.",
      },
      {
        q: "Do we get enough traffic to run tests?",
        a: "We check before proposing any. Low-traffic stores usually get more from fixing clear problems than from A/B tests.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const servicesInPillar = (id: PillarId) =>
  services.filter((s) => s.pillar === id);

export const pillarById = (id: PillarId) =>
  pillars.find((p) => p.id === id)!;
