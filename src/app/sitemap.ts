import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
  }));
  const detail = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
  }));
  return [...pages, ...detail];
}
