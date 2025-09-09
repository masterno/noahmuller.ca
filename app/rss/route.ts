import { NextResponse } from "next/server";
import { getAllPostsMeta, type PostMeta } from "../../lib/blog";

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://noahmuller.ca";
  const posts: PostMeta[] = getAllPostsMeta();

  const lastBuildDate = posts.length
    ? new Date(
        posts
          .map((p) => p.date)
          .sort()
          .slice(-1)[0],
      ).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((p: PostMeta) => {
      const url = `${site}/blog/${p.slug}`;
      const pubDate = new Date(p.date).toUTCString();
      const description = p.excerpt ? `<![CDATA[${p.excerpt}]]>` : "";
      return `
        <item>
          <title>${escapeXml(p.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${pubDate}</pubDate>
          ${p.excerpt ? `<description>${description}</description>` : ""}
        </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Noah Muller — Blog</title>
      <link>${site}/blog</link>
      <description>Notes, case studies, and articles.</description>
      <language>en</language>
      <lastBuildDate>${lastBuildDate}</lastBuildDate>
      <atom:link rel="self" type="application/rss+xml" href="${site}/rss.xml" />
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=300",
    },
  });
}

function escapeXml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
