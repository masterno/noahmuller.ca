import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "../lib/blog";

// Ensure Node.js runtime so we can use fs/path inside lib/blog
export const runtime = "nodejs";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://noahmuller.ca";

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${site}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site}/credentials`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site}/blog`, changeFrequency: "weekly", priority: 0.9 },
  ];

  const postEntries: MetadataRoute.Sitemap = getAllPostsMeta().map((p) => ({
    url: `${site}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: p.date,
  }));

  return [...staticEntries, ...postEntries];
}
