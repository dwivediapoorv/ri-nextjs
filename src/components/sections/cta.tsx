import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

export function Cta() {
  return (
    <section className="wrap pt-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-14">
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.3}
          duration={3}
          className={cn(
            "fill-lemon/30 stroke-white/10",
            "[mask-image:radial-gradient(500px_circle_at_85%_50%,white,transparent)]",
            "-z-10",
          )}
        />
        <h2 className="display h-section max-w-[16ch]">Find out what your store is missing</h2>
        <p className="mt-4 max-w-[44ch] text-lg text-white/75">
          Free, written, and yours to keep even if we never work together.
        </p>
        <form action="/contact" method="get" className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="cta-store" className="sr-only">Your store URL</label>
          <input
            id="cta-store"
            name="store"
            type="text"
            inputMode="url"
            placeholder="yourstore.com"
            className="min-w-0 flex-1 rounded-xl border-2 border-white bg-white px-4 py-3.5 text-lg text-ink focus:border-lemon focus:outline-none"
          />
          <ShimmerButton
            type="submit"
            borderRadius="0.75rem"
            background="#2438ff"
            shimmerColor="#ffe14d"
            className="px-6 py-3.5 text-lg font-bold"
          >
            Get my free store check
          </ShimmerButton>
        </form>
        <p className="mt-3 text-sm text-white/60">No call, no card. A written note in 2 working days.</p>
      </div>
    </section>
  );
}
