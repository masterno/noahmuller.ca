export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-foreground/70 max-w-3xl">
        Use the form below to get in touch. This will be wired to Netlify Forms or Formspree.
      </p>
      <form className="mt-8 grid max-w-xl gap-4">
        <label className="grid gap-1">
          <span className="text-sm text-foreground/80">Name</span>
          <input className="h-10 rounded-md border bg-background px-3" placeholder="Your name" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-foreground/80">Email</span>
          <input
            type="email"
            className="h-10 rounded-md border bg-background px-3"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-foreground/80">Message</span>
          <textarea className="min-h-32 rounded-md border bg-background px-3 py-2" />
        </label>
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Send
        </button>
      </form>
    </section>
  );
}
