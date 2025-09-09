import { ImageResponse } from "next/og";
import { getAllPostsMeta } from "../../../lib/blog";

// Use Node.js runtime since we read from the filesystem in lib/blog
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: { slug: string } }) {
  const post = getAllPostsMeta().find((p) => p.slug === params.slug);

  const title = post?.title ?? "Post";
  const date = post ? new Date(post.date).toLocaleDateString() : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a, #111827)",
          color: "white",
          padding: 64,
          fontFamily: "Inter, ui-sans-serif, system-ui",
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.8 }}>noahmuller.ca</div>
        <div style={{ fontSize: 64, lineHeight: 1.1, fontWeight: 700, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, opacity: 0.85 }}>{date}</div>
          <div
            style={{
              fontSize: 22,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            Blog Post
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
