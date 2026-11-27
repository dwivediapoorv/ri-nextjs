"use client";

import { useEffect, useState } from "react";

const ROW = 84;

type Row = { id: string; url: string; title: string; snippet: string; you?: boolean };

const rows: Row[] = [
  { id: "you", url: "yourstore.com › collections", title: "Handmade Leather Wallets, Free Shipping", snippet: "Full-grain leather wallets, made to order. Ships in 2 days.", you: true },
  { id: "a", url: "bigmarketplace.com", title: "Leather Wallets: Shop 4,000+ Styles", snippet: "Compare prices from hundreds of sellers." },
  { id: "b", url: "competitor-one.com", title: "Men's Wallets and Card Holders", snippet: "Slim, bifold and travel wallets in stock." },
  { id: "c", url: "reviewsite.com", title: "The 12 Best Leather Wallets of the Year", snippet: "We tested 40 wallets so you do not have to." },
  { id: "d", url: "competitor-two.com", title: "Genuine Leather Wallets | Sale", snippet: "Up to 30% off selected wallets and belts." },
  { id: "e", url: "giftshop.com", title: "Wallet Gift Ideas for Him", snippet: "Gift-ready wallets with free engraving." },
];

const steps = [5, 2, 0];

function order(youAt: number) {
  const others = rows.filter((r) => !r.you);
  const out: Row[] = [];
  let o = 0;
  for (let i = 0; i < rows.length; i++) {
    out.push(i === youAt ? rows[0] : others[o++]);
  }
  return out;
}

const phases = [
  { load: "4.2s", indexed: "58%" },
  { load: "2.4s", indexed: "81%" },
  { load: "1.5s", indexed: "99%" },
];

export function Ladder() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setPhase(2), 0);
      return () => clearTimeout(t);
    }
    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const current = order(steps[phase]);
  const pos = new Map(current.map((r, i) => [r.id, i]));
  const done = phase === 2;

  return (
    <figure aria-label="Illustration: a store climbing the search results">
      <div className="rounded-3xl border-2 border-ink bg-white p-4 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-5">
        <div className="mb-4 flex items-center gap-2 rounded-full border-2 border-line bg-snow px-4 py-2 text-sm text-slate">
          <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="9" cy="9" r="6" />
            <path d="M14 14l4 4" />
          </svg>
          <span className="truncate">leather wallet for men</span>
        </div>

        <ol className="relative" style={{ height: rows.length * ROW }}>
          {rows.map((r) => {
            const i = pos.get(r.id) ?? 0;
            return (
              <li
                key={r.id}
                className={`ladder-row absolute inset-x-0 flex items-start gap-3 rounded-xl border-2 px-3 py-2.5 ${
                  r.you
                    ? `z-10 border-ink ${done ? "bg-lemon shadow-[4px_4px_0_0_var(--color-ink)]" : "bg-white"}`
                    : "border-transparent bg-white"
                }`}
                style={{ height: ROW - 8, transform: `translateY(${i * ROW}px)` }}
              >
                <span className="display mt-0.5 w-7 flex-none text-lg text-slate">{i + 1}</span>
                <span className="min-w-0">
                  <span className="block truncate text-xs text-slate">{r.url}</span>
                  <span className="block truncate font-bold text-volt">{r.title}</span>
                  <span className="block truncate text-sm text-slate">{r.snippet}</span>
                </span>
                {r.you && done && (
                  <span aria-hidden className="pop display absolute -right-2 -top-3 rounded-lg bg-ink px-2.5 py-1 text-sm text-lemon">
                    #1
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <dl className="mt-3 grid grid-cols-2 gap-3 border-t-2 border-line pt-4 text-sm">
          <div>
            <dt className="text-slate">Mobile load time</dt>
            <dd className="display mt-1 text-2xl tabular-nums">{phases[phase].load}</dd>
          </div>
          <div>
            <dt className="text-slate">Pages indexed</dt>
            <dd className="display mt-1 text-2xl tabular-nums">{phases[phase].indexed}</dd>
          </div>
        </dl>
      </div>
      <figcaption className="mt-4 text-sm text-slate">
        An illustration of what a rank, speed and indexing fix looks like. Not a client result.
      </figcaption>
    </figure>
  );
}
