import type { Faq } from "@/lib/services";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-6 rounded-md">
            <span className="display text-xl leading-snug sm:text-2xl">{f.q}</span>
            <span
              aria-hidden
              className="plus mt-1 text-2xl leading-none text-ultra transition-transform"
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
