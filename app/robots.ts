import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://noahmuller.ca";
  const { hostname } = new URL(site);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${site}/sitemap.xml`],
    host: hostname,
  };
}
