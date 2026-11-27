import Link from "next/link";
import { services } from "@/lib/services";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="display text-3xl">Send us your store URL.</p>
          <p className="mt-3 max-w-[36ch] text-white/70">
            We reply with the three biggest things holding it back. Free, in two working days.
          </p>
          <Link href="/contact" className="btn mt-6 bg-lemon text-ink hover:bg-white">
            Get my free store check
          </Link>
        </div>
        <div className="md:col-span-4">
          <h2 className="font-bold text-white/60">Services</h2>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-lemon">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-bold text-white/60">Company</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-lemon">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-lemon">Contact</Link>
            </li>
          </ul>
          <a href={`mailto:${site.email}`} className="mt-5 block hover:text-lemon">
            {site.email}
          </a>
          <p className="mt-1 text-white/60">Noida, India. Working worldwide.</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-white/60">
          <p>© rare Input. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-lemon">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
