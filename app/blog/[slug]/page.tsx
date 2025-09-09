import { getAllSlugs, getPostHtmlBySlug } from "../../../lib/blog";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const data = await getPostHtmlBySlug(params.slug);
  if (!data) {
    return (
      <section className="container mx-auto px-4 py-12">
        <p className="text-sm text-foreground/70">Post not found.</p>
      </section>
    );
  }

  const { meta, html } = data;

  return (
    <article className="container mx-auto px-4 py-12 prose prose-invert max-w-3xl">
      <p className="mb-4 text-xs text-foreground/60">
        <Link href="/blog" className="underline-offset-4 hover:underline">
          ← Back to Blog
        </Link>
      </p>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">{meta.title}</h1>
      <p className="text-xs text-foreground/60">{new Date(meta.date).toLocaleDateString()}</p>
      {meta.coverImage ? (
        <div className="not-prose my-6 mx-auto w-full max-w-md overflow-hidden rounded-lg border">
          <Image
            src={meta.coverImage}
            alt={`${meta.title} cover image`}
            width={600}
            height={315}
            className="h-auto w-full"
          />
        </div>
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
