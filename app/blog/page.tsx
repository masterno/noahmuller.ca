import { getAllPostsMeta } from "../../lib/blog";
import PostCard from "../../components/PostCard";

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Blog & Articles</h1>
        <a
          href="/rss.xml"
          className="text-sm text-primary underline-offset-4 hover:underline"
          aria-label="RSS feed"
        >
          RSS feed
        </a>
      </div>
      <p className="mt-4 max-w-3xl text-foreground/70">
        Long-form notes and case studies. Posts are sourced from <code>content/blog/</code>.
      </p>

      <div className="mt-8 grid gap-4">
        {posts.length === 0 ? (
          <p className="text-sm text-foreground/70">No posts yet.</p>
        ) : (
          <ul className="grid gap-4">
            {posts.map((p) => (
              <li key={p.slug}>
                <PostCard title={p.title} slug={p.slug} date={p.date} excerpt={p.excerpt} coverImage={p.coverImage} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
