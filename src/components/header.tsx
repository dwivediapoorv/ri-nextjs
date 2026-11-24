import Link from "next/link";
import { HeaderShell } from "./header-shell";
import { MobileMenu } from "./mobile-menu";
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
  const menu = nav.filter((n) => n.href !== "/contact");
  if (!menu.some((n) => n.href === "/about")) menu.push({ href: "/about", label: "About" });
  return (
    <HeaderShell>
      <div className="wrap grid grid-cols-[1fr_auto] items-center gap-x-3 py-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-x-6">
        <Link href="/" className="justify-self-start rounded-md">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 sm:flex">
          {menu.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[0.95rem] font-medium text-ink hover:text-ultra"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 justify-self-end">
          <Link
            href="/contact?service=other"
            className="whitespace-nowrap rounded-lg bg-ink px-4 py-2 text-[0.95rem] font-semibold text-paper hover:bg-ultra"
          >
            Contact Sales
          </Link>
          <MobileMenu items={menu} />
        </div>
      </div>
    </HeaderShell>
  );
}
