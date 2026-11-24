import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rare Input: Shopify development and e-commerce SEO",
    template: "%s | Rare Input",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Rare Input: Shopify development and e-commerce SEO",
    description: site.description,
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.logo}`,
  email: site.email,
  description: site.description,
  founder: {
    "@type": "Person",
    name: "Apoorv Dwivedi",
    jobTitle: "Founder",
    sameAs: ["https://www.linkedin.com/in/dwivediapoorv/"],
  },
  areaServed: "Worldwide",
  serviceType: [
    "Shopify store development",
    "Shopify app development",
    "Custom dashboards and internal tools",
    "On-page SEO",
    "Technical SEO",
    "E-commerce marketing",
  ],
  ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <JsonLd data={organization} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
