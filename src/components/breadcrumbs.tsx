import Link from "next/link";
import { JsonLd } from "./json-ld";
import { site } from "@/lib/site";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path === "/" ? "" : c.path}`,
    })),
  };
  return (
    <>
      <JsonLd data={data} />
      <nav aria-label="Breadcrumb" className="text-[0.95rem] text-slate">
        <ol className="flex flex-wrap items-center gap-x-2">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-x-2">
                {last ? (
                  <span aria-current="page">{c.name}</span>
                ) : (
                  <Link
                    href={c.path}
                    className="underline underline-offset-4 hover:text-ultra"
                  >
                    {c.name}
                  </Link>
                )}
                {!last && <span aria-hidden>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
