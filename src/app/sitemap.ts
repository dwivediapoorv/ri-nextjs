import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { cases } from "@/lib/work";
import { tools } from "@/lib/tools";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/tools", "/about", "/careers", "/contact", "/privacy", "/terms"].map((p) => ({
    url: `${site.url}${p}`,
  }));
  const detail = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
  }));
  const work = cases.map((c) => ({ url: `${site.url}/work/${c.slug}` }));
  const toolPages = tools.map((t) => ({ url: `${site.url}/tools/${t.slug}` }));
  return [...pages, ...detail, ...work, ...toolPages];
}
