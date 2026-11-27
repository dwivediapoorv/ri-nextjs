import Link from "next/link";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AuditForm } from "@/components/audit-form";
import { Ladder } from "@/components/ladder";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <AnimatedGridPattern
        numSquares={26}
        maxOpacity={0.18}
        duration={4}
        repeatDelay={1}
        className={cn(
          "text-volt/60 fill-volt/20 stroke-volt/15",
          "[mask-image:radial-gradient(70%_60%_at_50%_30%,white,transparent)]",
          "-z-10 h-full skew-y-3",
        )}
      />
      <div className="wrap grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <BlurFade delay={0.05} direction="up" offset={14}>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-sm font-semibold backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
              </span>
              Free store check, reply in 2 working days
            </p>
          </BlurFade>
          <BlurFade delay={0.15} direction="up" offset={18}>
            <h1 className="display h-hero mt-5">
              Shopify stores that rank, load fast and sell.
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} direction="up" offset={18}>
            <p className="mt-6 max-w-[34ch] text-xl text-slate sm:text-2xl">
              We build, fix and grow Shopify stores. Send your URL and we will show you the three biggest things holding it back.
            </p>
          </BlurFade>
          <BlurFade delay={0.45} direction="up" offset={18}>
            <div className="mt-8">
              <AuditForm id="hero" />
            </div>
            <p className="mt-6 text-slate">
              Technical SEO from <strong className="text-ink">$249</strong>. Store builds from{" "}
              <strong className="text-ink">$2,500</strong>.{" "}
              <Link href="/pricing" className="font-semibold text-volt underline underline-offset-4 hover:text-ink">
                See pricing
              </Link>
            </p>
          </BlurFade>
        </div>
        <BlurFade delay={0.4} direction="left" offset={24} className="lg:col-span-6">
          <div className="relative rounded-3xl">
            <Ladder />
            <BorderBeam size={220} duration={9} colorFrom="#2438ff" colorTo="#ffe14d" borderWidth={2} className="rounded-3xl" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
