import Link from "next/link";
import { Wordmark } from "./header";
import { pillars, servicesInPillar } from "@/lib/services";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
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
        </div>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
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
