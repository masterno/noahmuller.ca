import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projectsData";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-secondary to-background py-16 md:py-20 min-h-[60vh] md:min-h-[70vh]">
        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -left-40 -top-40 h-[460px] w-[700px] rounded-full blur-2xl"
            style={{
              background: "radial-gradient(closest-side, color-mix(in oklab, var(--ring) 75%, transparent), transparent 72%)",
            }}
          />
          <div
            className="absolute -right-40 top-10 h-[400px] w-[620px] rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 45%, transparent), transparent 72%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--foreground) 35%, transparent) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-foreground/70 shadow-sm ring-1 ring-border backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Available for roles in Kinesiology & Health Tech
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Noah Muller</span>
              <br />
              <span className="text-lg opacity-70">Registered Kinesiologist, Personal Trainer & Health Technology Developer</span>
            </h1>
            <p className="mt-4 max-w-prose text-foreground/70">
              Bridging the gap between human movement science and innovative technology to improve client outcomes.
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
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-border">
            <Image src="/images/hero.png" alt="Project screenshot: AI Goniometer" fill className="object-cover p-0" />
            {/* subtle vignette */}
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_40%,transparent,rgba(0,0,0,0.32))]" />
          </div>
        </div>
        {/* Bottom wave divider */}
        <svg className="absolute bottom-0 left-0 right-0 -mb-px h-10 w-full text-background" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,32L48,26.7C96,21,192,11,288,8C384,5,480,11,576,16C672,21,768,27,864,29.3C960,32,1056,32,1152,29.3C1248,27,1344,21,1392,18.7L1440,16L1440,40L1392,40C1344,40,1248,40,1152,40C1056,40,960,40,864,40C768,40,672,40,576,40C480,40,384,40,288,40C192,40,96,40,48,40L0,40Z" />
        </svg>
      </section>

      {/* What I Do snippets */}
      <section className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-3">
        {[
          {
            title: "Clinical Practice",
            body:
              "Movement assessments, exercise programming, and client-centered outcomes with evidence-based methods.",
          },
          {
            title: "Technology Projects",
            body:
              "Full‑stack development with Next.js and TypeScript. Strong focus on accessibility and performance.",
          },
          {
            title: "Writing & Insights",
            body:
              "Sharing practical lessons from kinesiology and applied AI. Clear, honest communication for busy readers.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-foreground/70">{s.body}</p>
          </div>
        ))}
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
            .map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
        </div>
      </section>
    </div>
  );
}
