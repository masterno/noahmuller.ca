import Link from "next/link";
import Image from "next/image";

export default function HPPAPCaseStudy() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Back to Projects
        </Link>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[1fr_360px]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Holistic Pain Profile & Action Planner (HPPAP)
          </h1>
          <p className="mt-4 max-w-prose text-foreground/70">
            A modern, privacy-focused web app for holistic pain self-assessment, profiling, and
            action planning. HPPAP guides users through evidence-based sections to capture pain
            experience, identify patterns, set personal goals, and generate a summary report for
            self-management or sharing with healthcare providers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://github.com/masterno/HPPAP/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 hover:bg-secondary/60"
            >
              GitHub Repository
            </Link>
            <Link
              href="http://masterno.github.io/HPPAP/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 hover:bg-secondary/60"
            >
              Live App
            </Link>
          </div>
        </div>

        {/* Right sidebar screenshot (smaller, full image visible) */}
        <aside className="self-start rounded-lg border p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border bg-white">
            <Image
              src="/images/HPPAP.jpeg"
              alt="HPPAP app screenshot"
              fill
              className="object-contain p-2"
            />
          </div>
          <p className="mt-2 text-center text-xs text-foreground/60">HPPAP – app screenshot</p>
        </aside>
      </div>

      <div className="mt-10 grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-foreground/70">
            <li>
              <b>Multi-Section Assessment:</b> Pain Snapshot; Pain Patterns & Triggers; Impact on
              Daily Life; Emotional Well-being & Pain; Coping & Management Strategies; Personal
              Goals & Action Planning
            </li>
            <li>
              <b>Summary Report:</b> Auto-generated, shareable summary at the end
            </li>
            <li>
              <b>Modern UI:</b> Built with React and TypeScript
            </li>
            <li>
              <b>Local-First:</b> All data stays in your browser unless you export/share
            </li>
            <li>
              <b>AI Integration:</b> Gemini API support for enhanced insights (optional)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-foreground/70">
            <li>React 19 + TypeScript</li>
            <li>Vite (development/build tooling)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
          <h3 className="mt-2 text-sm font-medium">Prerequisites</h3>
          <ul className="mt-2 grid list-disc gap-2 pl-5 text-foreground/70">
            <li>Node.js (v18+ recommended)</li>
          </ul>
          <h3 className="mt-4 text-sm font-medium">Setup</h3>
          <ol className="mt-2 grid list-decimal gap-2 pl-5 text-foreground/70">
            <li>
              Install dependencies: <code>npm install</code>
            </li>
            <li>
              Run the app locally: <code>npm run dev</code>
            </li>
            <li>
              The app will be available at <code>http://localhost:5173</code> (or as shown in your
              terminal).
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <ol className="mt-2 grid list-decimal gap-2 pl-5 text-foreground/70">
            <li>Complete each section of the assessment</li>
            <li>Review your personalized summary report</li>
            <li>Use the action planner to set and track goals</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Project Structure</h2>
          <ul className="mt-2 grid list-disc gap-2 pl-5 text-foreground/70">
            <li>
              <code>App.tsx</code> — Main application logic and section flow
            </li>
            <li>
              <code>components/</code> — UI components and section forms
            </li>
            <li>
              <code>constants.ts</code>, <code>types.ts</code> — App data models and defaults
            </li>
            <li>
              <code>public/</code>, <code>index.html</code> — App entry point
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">License</h2>
          <p className="mt-2 text-foreground/70">MIT (or your chosen license)</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Acknowledgments</h2>
          <p className="mt-2 max-w-prose text-foreground/70">
            Inspired by holistic pain management frameworks and patient-centered care principles.
          </p>
        </section>
      </div>
    </section>
  );
}
