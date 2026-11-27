import type { Faq } from "@/lib/services";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y-2 divide-ink border-y-2 border-ink">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-bold">
            {f.q}
            <span aria-hidden className="plus display flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-ink text-xl transition-transform duration-300">
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pb-6 text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
