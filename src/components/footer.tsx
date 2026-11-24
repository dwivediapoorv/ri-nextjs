import Link from "next/link";
import { Wordmark } from "./header";
import { pillars, servicesInPillar } from "@/lib/services";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-16">
        <div className="md:col-span-4">
          <Wordmark className="text-paper" />
          <p className="mt-4 max-w-xs text-paper/70">
            Shopify stores, apps and e-commerce marketing from one team.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block font-medium underline decoration-mark decoration-2 underline-offset-4"
          >
            {site.email}
          </a>
          <div className="mt-6">
            <Link
              href="/contact?service=other"
              className="inline-block rounded-xl border-2 border-paper px-5 py-2.5 font-semibold text-paper hover:bg-paper/10"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        {/* Phone: collapsible groups */}
        <div className="border-t border-paper/15 md:hidden">
          {pillars.map((p) => (
            <details key={p.id} name="footer-services" className="border-b border-paper/15">
              <summary className="flex cursor-pointer items-center justify-between rounded-md py-4">
                <span className="display text-xl">{p.name}</span>
                <span
                  aria-hidden
                  className="plus text-2xl leading-none text-paper/70 transition-transform motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <ul className="space-y-3 pb-5">
                {servicesInPillar(p.id).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-paper/70 hover:text-mark"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {/* Tablet and desktop: always open */}
        <div className="hidden gap-8 md:col-span-8 md:grid md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id}>
              <h2 className="display text-lg">{p.name}</h2>
              <ul className="mt-3 space-y-2 text-[0.95rem]">
                {servicesInPillar(p.id).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-paper/70 hover:text-mark"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="wrap flex flex-wrap justify-between gap-2 py-5 text-sm text-paper/60">
          <p>Rare Input</p>
          <p>
            <Link href="/about" className="hover:text-mark">
              About
            </Link>{" "}
            &nbsp;&nbsp;
            <Link href="/contact" className="hover:text-mark">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
