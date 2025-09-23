import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "../../components/ProjectCard";

export const metadata = {
  title: "OHS | Noah Muller",
  description:
    "Occupational Health & Safety Professional – competencies, profile, and OHS-related projects by Noah Muller.",
};

export default function OHSPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Intro / Hero */}
      <section className="grid items-start gap-8 md:grid-cols-[1fr_320px]">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Occupational Health & Safety Professional
          </h1>
          <div className="mt-4 max-w-prose">
            <p className="text-foreground/80">
              A dedicated and proactive professional leveraging over 10 years of experience in
              high-risk industries, including 2+ years in leadership roles, to transition into the
              Occupational Health and Safety field. Proven ability to train teams, implement safety
              protocols, and foster a safety-first culture in environments like construction and
              landscaping. Combines a deep, scientific understanding of ergonomics and injury
              prevention with technical skills in data analysis and application development to
              create innovative, data-driven safety solutions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="/Noah_Muller_OHS_Resume.pdf"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
                download
              >
                Download OHS Resume (PDF)
              </a>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-secondary/60"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border bg-card shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-border">
          <Image
            src="/images/headshot.png"
            alt="Headshot of Noah Muller"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 3: Key Competencies */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Key Competencies</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Column 1 */}
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="text-lg font-semibold">Health & Safety</h3>
            <ul className="mt-3 space-y-2 text-foreground/80 text-sm">
              <li>Hazard ID & Risk Assessment</li>
              <li>Ergonomic Analysis</li>
              <li>Safety Training & Onboarding</li>
              <li>Workplace Inspection</li>
              <li>WHMIS & PPE</li>
              <li>First Aid & CPR-C</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="text-lg font-semibold">Leadership</h3>
            <ul className="mt-3 space-y-2 text-foreground/80 text-sm">
              <li>Team Supervision & Mentorship</li>
              <li>Safety Reporting</li>
              <li>Project Coordination</li>
              <li>Client & Subcontractor Relations</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="text-lg font-semibold">Technical</h3>
            <ul className="mt-3 space-y-2 text-foreground/80 text-sm">
              <li>Python (Data Analysis)</li>
              <li>React (Safety Tools)</li>
              <li>SQL Databases</li>
              <li>AI/Prompt Engineering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: OHS-Related Projects */}
      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">OHS-Related Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <ProjectCard
            title="Toolbox Talk & Proactive Safety App (Concept)"
            description="A mobile-first application designed to streamline daily toolbox talks for frontline supervisors. The app replaces clunky PDFs with a library of clear safety scripts, captures digital signatures, and syncs reports to cloud storage. The standout feature is an integrated library of kinesiology-designed stretching routines with offline video clips to proactively reduce musculoskeletal injuries on site."
            technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          />
          <ProjectCard
            title="Mobile Site Inspection App (Concept)"
            description="An intuitive tool for conducting and documenting site safety inspections directly from a phone or tablet. This app is designed to be faster and more efficient than paper forms or general-purpose PDF apps. Key features include templated checklists, photo integration with timestamping, voice-to-text for notes, and one-click PDF report generation for seamless emailing and record-keeping."
            technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          />
        </div>
      </section>
    </div>
  );
}
