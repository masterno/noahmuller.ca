import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "../lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://noahmuller.ca";

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${site}/`, changefreq: "weekly", priority: 1 },
    { url: `${site}/about`, changefreq: "monthly", priority: 0.6 },
    { url: `${site}/projects`, changefreq: "weekly", priority: 0.8 },
    { url: `${site}/credentials`, changefreq: "monthly", priority: 0.7 },
    { url: `${site}/contact`, changefreq: "yearly", priority: 0.5 },
    { url: `${site}/blog`, changefreq: "weekly", priority: 0.9 },
  ];

  const postEntries: MetadataRoute.Sitemap = getAllPostsMeta().map((p) => ({
    url: `${site}/blog/${p.slug}`,
    changefreq: "monthly",
    priority: 0.7,
    lastmod: p.date,
  }));

  return [...staticEntries, ...postEntries];
}
