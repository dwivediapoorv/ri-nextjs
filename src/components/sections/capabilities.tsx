import { Marquee } from "@/components/magicui/marquee";

const rowA = ["Technical SEO", "Core Web Vitals", "Product schema", "Collection pages", "Canonical rules", "Redirect maps", "Sitemaps and robots"];
const rowB = ["Checkout friction", "Theme app extensions", "Metafields", "Klaviyo flows", "Google Shopping", "Meta ads", "Server-side tracking"];

function Chip({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap rounded-full border-2 border-ink bg-white px-5 py-2 font-semibold">
      {children}
    </span>
  );
}

export function Capabilities() {
  return (
    <section aria-label="What we cover" className="relative overflow-hidden py-14">
      <Marquee className="[--duration:38s]" pauseOnHover>
        {rowA.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:44s]" pauseOnHover>
        {rowB.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-snow" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-snow" />
    </section>
  );
}
