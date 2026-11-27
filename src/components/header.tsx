import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-snow/90 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="rare Input home">
          <Image src="/logo.svg" alt="" width={36} height={36} priority />
          <span className="display whitespace-nowrap text-xl">rare Input</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="font-semibold hover:text-volt">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden !py-2.5 !text-base sm:inline-flex">
            Free store check
          </Link>
          <details className="group relative md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg"
              aria-label="Menu"
            >
              <span className="relative block h-3 w-6">
                <span className="absolute inset-x-0 top-0 h-0.5 bg-ink transition group-open:top-1.5 group-open:rotate-45" />
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-ink transition group-open:bottom-1.5 group-open:-rotate-45" />
              </span>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-full mt-3 w-64 rounded-2xl border-2 border-ink bg-white p-3 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="block rounded-lg px-3 py-3 text-lg font-semibold hover:bg-snow">
                  {n.label}
                </Link>
              ))}
              <Link href="/contact" className="btn btn-primary mt-2 w-full">
                Free store check
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
