"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

export function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  // Close when the route changes.
  useEffect(() => {
    ref.current?.close();
  }, [pathname]);

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
  const hide = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink sm:hidden"
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
        onClose={() => setOpen(false)}
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
              className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav aria-label="Menu" className="mt-4 flex-1">
            <ul>
              {items.map((n) => (
                <li key={n.href} className="border-b border-line">
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
            className="mb-2 block rounded-xl bg-ink px-6 py-4 text-center text-lg font-semibold text-paper hover:bg-ultra"
          >
            Contact Sales
          </Link>
        </div>
      </dialog>
    </>
  );
}
