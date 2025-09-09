import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export type PostFrontmatter = {
  title: string;
  date: string; // ISO or YYYY-MM-DD
  excerpt?: string;
  coverImage?: string | null;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readAllMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".md"))
    .map((e) => path.join(BLOG_DIR, e.name));
}

export function getAllPostsMeta(): PostMeta[] {
  const files = readAllMarkdownFiles();
  const posts = files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data } = matter(raw);
    const slug = path.basename(file).replace(/\.md$/i, "");
    const { title, date, excerpt, coverImage } = data as PostFrontmatter;
    return { slug, title, date, excerpt, coverImage: coverImage ?? null } as PostMeta;
  });
  return posts
    .filter((p) => p.title && p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostHtmlBySlug(slug: string): Promise<{ meta: PostMeta; html: string } | null> {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug,
    title: (data as any).title,
    date: (data as any).date,
    excerpt: (data as any).excerpt,
    coverImage: (data as any).coverImage ?? null,
  };
  const processed = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkToc, { heading: 'Table of Contents', maxDepth: 3, tight: true })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  return { meta, html: processed.toString() };
}

export function getAllSlugs(): string[] {
  return readAllMarkdownFiles().map((f) => path.basename(f).replace(/\.md$/i, ""));
}
