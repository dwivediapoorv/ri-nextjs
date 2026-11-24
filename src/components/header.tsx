import Link from "next/link";
import { nav } from "@/lib/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`display inline-flex items-center text-3xl ${className}`}
      aria-label="Rare Input"
    >
      ri
      <span
        aria-hidden
        className="ml-1 inline-block h-[1.05em] w-[0.5em] translate-y-[1px] bg-ultra"
      />
    </span>
  );
}

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <Link href="/" className="rounded-md">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          {nav
            .filter((n) => n.href !== "/contact")
            .map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[0.95rem] font-medium text-ink hover:text-ultra"
              >
                {n.label}
              </Link>
            ))}
          <Link
            href="/contact?service=other"
            className="hidden rounded-lg border-2 border-ink px-4 py-[0.4rem] text-[0.95rem] font-semibold text-ink hover:border-ultra hover:text-ultra md:inline-block"
          >
            Contact sales
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-ink px-4 py-2 text-[0.95rem] font-semibold text-paper hover:bg-ultra"
          >
            Free audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
