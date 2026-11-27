import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { priceLabel, serviceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";

const paths = [
  {
    name: "Fix",
    blurb: "For a store that already exists",
    to: "free-store-check",
    cta: "Start with a free check",
    slugs: ["free-store-check", "technical-seo", "conversion-sprint"],
    bullets: ["Written note in 2 working days", "Fixes made on a duplicate theme", "You review before anything goes live"],
  },
  {
    name: "Build",
    blurb: "For a new store, a move, or a custom app",
    to: "shopify-store-build",
    cta: "Plan a build",
    slugs: ["shopify-store-build", "shopify-apps"],
    bullets: ["Search set up so launch keeps your traffic", "Metafields and sections you can edit yourself", "Recorded handover for your team"],
  },
  {
    name: "Grow",
    blurb: "For a monthly team on search, ads and email",
    to: "ecommerce-seo",
    cta: "Plan monthly growth",
    slugs: ["ecommerce-seo", "paid-media", "email-and-sms"],
    popular: true,
    bullets: ["One report across search, ads and email", "Local SEO included if you have shops", "Month to month after the first three months"],
  },
];

export function Pricing({ heading = true }: { heading?: boolean }) {
  return (
    <section className="wrap pt-24">
      {heading && (
        <h2 className="display h-section max-w-[16ch]">
          <span className="text-slate">Pick a path.</span> <br /> Know the price.
        </h2>
      )}
      <div className={cn("grid gap-0 overflow-hidden rounded-2xl border-2 border-ink bg-white *:p-7 lg:grid-cols-3", heading && "mt-10")}>
        {paths.map((p, i) => (
          <div
            key={p.name}
            className={cn(
              "relative flex flex-col gap-7",
              i > 0 && "border-t-2 border-ink lg:border-l-2 lg:border-t-0",
              p.popular && "bg-lemon/30 shadow-xl",
            )}
          >
            {p.popular && (
              <div className="absolute right-0 top-0 w-fit rounded-bl bg-ink px-3 py-1 text-xs font-bold text-lemon [corner-shape:bevel]">
                Most popular
              </div>
            )}
            <div>
              <p className="display text-3xl">{p.name}</p>
              <p className="mt-1 text-slate">{p.blurb}</p>
              <ul className="mt-6 space-y-3">
                {p.slugs.map((slug) => {
                  const s = serviceBySlug(slug)!;
                  return (
                    <li key={slug} className="flex items-baseline justify-between gap-3 border-b border-ink/15 pb-3">
                      <Link href={`/services#${slug}`} className="font-semibold hover:text-volt">
                        {s.name}
                      </Link>
                      <span className="display flex-none">{priceLabel(s)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="flex-1 space-y-2.5 text-slate">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 flex-none text-volt" />
                  {b}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant={p.popular ? "default" : "outline"}
              className={cn("w-full rounded-xl font-bold", !p.popular && "border-2 border-ink bg-white text-ink ring-0 hover:bg-ink hover:text-white")}
              nativeButton={false}
              render={<Link href={`/contact?service=${p.to}`}>{p.cta}</Link>}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate">Starting prices in USD for a small store. You get a fixed quote before we begin.</p>
    </section>
  );
}
