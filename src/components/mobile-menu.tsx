"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Item = { href: string; label: string };

export function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const show = () => {
    ref.current?.showModal();
    setOpen(true);
  };
  const finish = () => {
    const d = ref.current;
    if (!d) return;
    delete d.dataset.closing;
    d.close();
  };
  const hide = () => {
    const d = ref.current;
    if (!d || !d.open || d.dataset.closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      d.close();
      return;
    }
    d.dataset.closing = "true";
    window.setTimeout(finish, 700); // fallback if animationend never fires
  };

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg sm:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <dialog
        ref={ref}
        id="mobile-menu"
        aria-label="Menu"
        className="drawer bg-paper text-ink"
        style={{ "--n": items.length + 1 } as CSSProperties}
        onClose={() => setOpen(false)}
        onCancel={(e) => {
          e.preventDefault();
          hide();
        }}
        onAnimationEnd={(e) => {
          if (e.target === ref.current && ref.current?.dataset.closing) finish();
        }}
        onClick={(e) => {
          if (e.target === ref.current) hide();
        }}
      >
        <div className="flex h-full flex-col px-6 py-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={hide}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav aria-label="Menu" className="mt-4 flex-1">
            <ul>
              {items.map((n, i) => (
                <li
                  key={n.href}
                  className="drawer-item border-b border-line"
                  style={{ "--i": i } as CSSProperties}
                >
                  <Link
                    href={n.href}
                    onClick={hide}
                    className="block py-4 text-xl font-medium hover:text-ultra"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact?service=other"
            onClick={hide}
            style={{ "--i": items.length } as CSSProperties}
            className="drawer-item mb-2 block rounded-xl bg-ink px-6 py-4 text-center text-lg font-semibold text-paper hover:bg-ultra"
          >
            Contact Sales
          </Link>
        </div>
      </dialog>
    </>
  );
}
