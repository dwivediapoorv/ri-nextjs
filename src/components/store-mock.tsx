const tones = {
  blue: { bar: "bg-volt", a: "bg-volt/20", b: "bg-volt/40" },
  lemon: { bar: "bg-lemon", a: "bg-lemon/50", b: "bg-lemon" },
  ink: { bar: "bg-ink", a: "bg-ink/15", b: "bg-ink/30" },
};

/** A small drawn browser window, used instead of screenshots we do not have yet. */
export function StoreMock({ tone, label }: { tone: keyof typeof tones; label: string }) {
  const t = tones[tone];
  return (
    <div aria-hidden className="overflow-hidden rounded-xl border-2 border-ink bg-white">
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-snow px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/30" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-line" />
      </div>
      <div className="p-3">
        <div className={`h-20 rounded-lg ${t.bar} flex items-end p-3`}>
          <span className={`display text-lg ${tone === "blue" || tone === "ink" ? "text-white" : "text-ink"}`}>
            {label}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className={`h-14 rounded-md ${t.a}`} />
          <div className={`h-14 rounded-md ${t.b}`} />
          <div className={`h-14 rounded-md ${t.a}`} />
        </div>
        <div className="mt-3 h-2.5 w-3/4 rounded-full bg-line" />
        <div className="mt-2 h-2.5 w-1/2 rounded-full bg-line" />
      </div>
    </div>
  );
}
