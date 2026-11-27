import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { priceLabel, services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServicesBento() {
  const featured = services.filter((s) => s.featured);
  return (
    <section className="wrap pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="display h-section max-w-[16ch]">What we do, and what it costs</h2>
        <Link href="/services" className="font-bold text-volt underline underline-offset-4 hover:text-ink">
          All services
        </Link>
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {featured.map((s, i) => (
          <li key={s.slug} className={cn(i === 0 && "md:col-span-2")}>
            <Link href={`/services#${s.slug}`} className="group block h-full">
              <MagicCard
                className="h-full rounded-2xl border-2 border-ink bg-white"
                gradientColor="#dfe3ff"
                gradientFrom="#2438ff"
                gradientTo="#ffe14d"
              >
                <div className="flex h-full min-h-56 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display text-2xl">{s.name}</h3>
                    <ArrowUpRight className="size-6 flex-none transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-volt" />
                  </div>
                  <p className="mt-3 max-w-[44ch] flex-1 text-slate">{s.short}</p>
                  <div className="mt-6 flex items-center justify-between border-t-2 border-line pt-4">
                    <span className="font-bold">{priceLabel(s)}</span>
                    <span className="text-sm text-slate">{s.time}</span>
                  </div>
                </div>
              </MagicCard>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
