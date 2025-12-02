import Link from "next/link";

export default function FitFluxCaseStudy() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Back to Projects
        </Link>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[1fr_360px]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Fit Flux</h1>
          <p className="mt-4 max-w-prose text-foreground/70">
            Professional-grade training tools for everyone. Whether you are an athlete looking for
            adaptive, AI-driven coaching or a trainer seeking to scale your business with automated
            programming and client management, Fit Flux delivers a unified platform for
            high-performance results.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://fitflux.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 hover:bg-secondary/60"
            >
              Visit Live Site
            </Link>
          </div>
        </div>

        {/* Right sidebar image */}
        <aside className="self-start rounded-lg border p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border bg-white">
            {/* Placeholder image until a specific screenshot is available */}
            <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
              <span className="text-sm">App Screenshot Placeholder</span>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-foreground/60">Fit Flux - Platform UI</p>
        </aside>
      </div>

      <div className="mt-10 grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Two Powerful Modes</h2>
          <p className="mt-2 max-w-prose text-foreground/70">
            Fit Flux bridges the gap between individual performance tracking and professional
            coaching tools.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium text-lg mb-2">For Athletes</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/70">
                <li>
                  <strong>AI Coach:</strong> Adapts to your recovery and performance needs
                  daily.
                </li>
                <li>
                  <strong>Auto-Regulation:</strong> Programs that adjust intensity based on your
                  readiness.
                </li>
                <li>
                  <strong>Visual Tracking:</strong> Monitor progress with clear data
                  visualization.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium text-lg mb-2">For Trainers</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/70">
                <li>
                  <strong>Roster Management:</strong> Streamlined dashboard for all your clients.
                </li>
                <li>
                  <strong>Program Builder:</strong> AI-assisted tools to generate personalized plans
                  instantly.
                </li>
                <li>
                  <strong>Automated Check-ins:</strong> Save time with automated forms and
                  compliance tracking.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Core Technology & Approach</h2>
          <h3 className="mt-2 text-sm font-medium">Context-Aware Programming</h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            Unlike static templates, Fit Flux starts with a comprehensive assessment of goals,
            injuries, and available equipment. It uses this data to generate structured plans that
            evolve with the user.
          </p>

          <h3 className="mt-4 text-sm font-medium">Business Scaling for Coaches</h3>
          <p className="mt-2 max-w-prose text-foreground/70">
            The platform is designed to handle multi-client workflows, allowing clinics and coaches
            to reuse and adapt high-quality templates while maintaining the personal touch required
            for effective rehabilitation and training.
          </p>
        </section>
      </div>
    </section>
  );
}
