import type { Faq } from "@/lib/services";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <details key={f.q} name="faq" className="group rounded-2xl border-2 border-ink bg-white px-5 py-4 shadow-[4px_4px_0_0_var(--color-ink)] open:bg-mark/50">
          <summary className="flex cursor-pointer items-start justify-between gap-6 rounded-md">
            <span className="display text-xl leading-snug sm:text-2xl">{f.q}</span>
            <span
              aria-hidden
              className="plus flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ultra text-2xl leading-none text-white transition-transform"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[62ch] text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
