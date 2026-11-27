import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  { value: 30, suffix: " days", label: "To take a custom-theme store live, from first product to launch" },
  { value: 750, suffix: "", label: "Orthopaedic doctors registered through the portal we built" },
  { value: 1200, suffix: "", label: "Medical students registered through the same portal" },
];

export function Stats() {
  return (
    <section className="wrap pt-24">
      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        <h2 className="display h-section max-w-[16ch]">
          <span className="text-slate">Shipped for real people.</span> <br /> Not mockups.
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 md:self-end">
          {stats.map((s) => (
            <div key={s.label} className="space-y-3 border-t-2 border-ink pt-6">
              <div className="display text-5xl tabular-nums">
                <NumberTicker value={s.value} className="font-display tracking-tight" />
                {s.suffix && <span className="ml-1 text-2xl">{s.suffix.trim()}</span>}
              </div>
              <p className="text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
