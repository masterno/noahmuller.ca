import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projectsData";
import { ProjectCard } from "../components/ProjectCard";
import { getAllPostsMeta } from "../lib/blog";
import HeroProfileCard from "../components/HeroProfileCard";
import { Activity, Code, Dumbbell, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-[rgba(37,99,235,0.06)] to-background py-16 md:py-20 min-h-[60vh] md:min-h-[70vh]">
        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Left radial glow (fallback: rgba) */}
          <div
            className="absolute -left-40 -top-40 h-[520px] w-[780px] rounded-full blur-2xl"
            style={{
              background: "radial-gradient(closest-side, rgba(100,116,139,0.35), transparent 75%)",
            }}
          />
          {/* Right radial glow (brand blue) */}
          <div
            className="absolute -right-40 top-10 h-[460px] w-[700px] rounded-full blur-2xl"
            style={{
              background: "radial-gradient(closest-side, rgba(37,99,235,0.45), transparent 75%)",
            }}
          />
          {/* Dot grid (reverted to previous strength) */}
          <div
            className="absolute inset-0 opacity-[0.34]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.24) 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />
          {/* Top overlay for extra contrast in light mode */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(37,99,235,0.12), rgba(37,99,235,0.00) 55%)",
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-foreground/70 shadow-sm ring-1 ring-border backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Available for roles in Kinesiology & Health Tech
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Noah Muller | B.Kin, CSEP-CPT, HMS, IMT
              </span>
              <br />
              <span className="text-lg opacity-70">
                Registered Kinesiologist, Personal Trainer & Health Technology Developer
              </span>
            </h1>
            <p className="mt-4 max-w-prose text-foreground/70">
              Bridging the gap between human movement science and innovative technology to improve
              client outcomes.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                View My Projects
              </Link>
              <Link
                href="/credentials"
                className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-secondary/60"
              >
                View Credentials
              </Link>
            </div>
          </div>
          <HeroProfileCard />
        </div>
        {/* Bottom wave divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 -mb-px h-10 w-full text-background"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,32L48,26.7C96,21,192,11,288,8C384,5,480,11,576,16C672,21,768,27,864,29.3C960,32,1056,32,1152,29.3C1248,27,1344,21,1392,18.7L1440,16L1440,40L1392,40C1344,40,1248,40,1152,40C1056,40,960,40,864,40C768,40,672,40,576,40C480,40,384,40,288,40C192,40,96,40,48,40L0,40Z"
          />
        </svg>
      </section>

      {/* What I Do */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">What I Do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clinical Practice",
              body: "Movement assessments, exercise programming, and client-centered outcomes with evidence-based methods.",
              Icon: Activity,
              ctaLabel: "Learn more",
              ctaHref: "/about#clinical",
            },
            {
              title: "Technology Projects",
              body: "Full‑stack development with Next.js and TypeScript. Strong focus on accessibility and performance.",
              Icon: Code,
              ctaLabel: "Explore Projects",
              ctaHref: "/projects",
            },
            {
              title: "Personal Training",
              body: "Strength and conditioning programs tailored to goals, injuries, and readiness—with clear progress tracking.",
              Icon: Dumbbell,
              ctaLabel: "Learn more",
              ctaHref: "/about#training",
            },
          ].map(({ title, body, Icon, ctaLabel, ctaHref }) => (
            <div
              key={title}
              className="rounded-lg border p-6 transform-gpu transition-all hover:-translate-y-0.5 hover:bg-secondary/40 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-foreground/80">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {ctaHref ? (
                      <Link
                        href={ctaHref}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </h3>
                  <p className="mt-2 text-foreground/70">{body}</p>
                  {ctaHref && ctaLabel ? (
                    <div className="mt-4">
                      <Link
                        href={ctaHref}
                        className="inline-flex h-9 items-center justify-center gap-1 rounded-md border px-3 text-sm font-medium transition-colors hover:bg-secondary/60"
                      >
                        {ctaLabel}
                        <ChevronRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Work</h2>
          <Link href="/projects" className="text-primary underline-offset-4 hover:underline">
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => p.featured)
            .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
            .map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="border-t bg-background/50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
            <Link href="/blog" className="text-primary underline-offset-4 hover:underline">
              View all posts
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {getAllPostsMeta()
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 3)
              .map((p) => (
                <article
                  key={p.slug}
                  className="rounded-lg border p-5 transform-gpu transition-all hover:-translate-y-0.5 hover:bg-secondary/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    {p.coverImage ? (
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                        <Image src={p.coverImage} alt={p.title} width={48} height={48} />
                      </div>
                    ) : null}
                    <div>
                      <h3 className="text-base font-semibold leading-snug">
                        <Link href={`/blog/${p.slug}`} className="hover:underline">
                          {p.title}
                        </Link>
                      </h3>
                      {p.excerpt ? (
                        <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{p.excerpt}</p>
                      ) : null}
                      <p className="mt-2 text-xs text-foreground/50">
                        {new Date(p.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
