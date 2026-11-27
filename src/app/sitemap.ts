import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/pricing", "/work", "/about", "/contact", "/privacy"].map((p) => ({
    url: `${site.url}${p}`,
  }));
}
