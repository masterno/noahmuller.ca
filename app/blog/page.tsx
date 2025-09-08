export default function BlogIndexPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Blog & Articles</h1>
      <p className="mt-4 text-foreground/70 max-w-3xl">
        This page will list posts from <code>content/blog/</code> with title, date, and excerpt.
      </p>
    </section>
  );
}
