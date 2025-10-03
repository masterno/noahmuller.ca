import Link from "next/link";
import Image from "next/image";

export default function OHSAStudy() {
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
            AI-Powered Overhead Squat Assessor
          </h1>
          <p className="mt-4 max-w-prose text-foreground/70">
            A clinical tool designed for physical therapists and trainers to streamline movement
            screening. This application uses AI to analyze observational and goniometric data from
            an overhead squat, identifying potential muscle imbalances. It then generates a fully
            customizable, data-driven corrective exercise plan, complete with exercise alternatives
            and exportable reports, enhancing diagnostic efficiency and client care.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://overhead-squat-assessor-335483159135.us-west1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border px-3 hover:bg-secondary/60"
            >
              Live App
            </Link>
          </div>
        </div>

        {/* Right sidebar (optional image) */}
        <aside className="self-start rounded-lg border p-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border bg-white">
            <Image
              src="/OHSA_case_study.jpeg"
              alt="Overhead Squat Assessor screenshot"
              fill
              className="object-contain p-2"
            />
          </div>
          <p className="mt-2 text-center text-xs text-foreground/60">Overhead Squat Assessor</p>
        </aside>
      </div>

      <div className="mt-10 grid gap-10">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Goal</h2>
          <p className="mt-3 max-w-prose text-foreground/70">
            The primary goal of this project was to develop an intelligent assistant for health and
            fitness professionals. I aimed to create a tool that bridges the gap between qualitative
            movement screening and quantitative, evidence-based program design. By leveraging AI,
            the application streamlines the assessment process, reduces administrative time, and
            empowers clinicians to create highly personalized corrective exercise plans more
            efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Reason for Creation</h2>
          <p className="mt-3 max-w-prose text-foreground/70">
            The Overhead Squat Assessment (OHSA) is a cornerstone of movement screening, renowned
            for its ability to reveal kinetic chain dysfunctions. However, the process of
            interpreting the visual data, cross-referencing it with potential muscle imbalances, and
            then formulating a comprehensive corrective plan is both complex and time-consuming.
            Clinicians often rely on mental heuristics or manual lookups, which can be prone to
            subjectivity and inconsistency.
          </p>
          <p className="mt-3 max-w-prose text-foreground/70">
            I saw an opportunity to automate the heavy lifting of this analysis. I wanted to build a
            tool that could take raw assessment data and instantly provide a structured, data-driven
            hypothesis of muscle imbalances, suggest confirmatory tests, and generate a robust
            starting point for a corrective program—all while keeping the clinician firmly in
            control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">How It Works</h2>
          <ol className="mt-3 grid list-decimal gap-4 pl-5 text-foreground/70">
            <li>
              <b>Initial Assessment:</b> The clinician inputs observational data by selecting
              checkboxes for common movement compensations seen during the squat (e.g., "Knees Bow
              In," "Arms Fall Forward"). They can supplement this with objective goniometric (range
              of motion) measurements and a checklist of the client's available exercise equipment.
            </li>
            <li>
              <b>AI Analysis & Hypothesis:</b> Upon submission, the Gemini API analyzes the combined
              data. It generates a report detailing likely <i>overactive (tight)</i> and{" "}
              <i>underactive (weak)</i>
              muscles, providing a clinical rationale for each finding. Crucially, it also suggests
              a prioritized list of follow-up tests (e.g., Thomas Test, Glute Medius Strength Test)
              needed to confirm its hypotheses.
            </li>
            <li>
              <b>Dynamic Follow-up:</b> The application generates a dynamic form containing only the
              AI-suggested tests. This keeps the assessment focused and efficient. The clinician
              retains full clinical autonomy with an "Add/Remove Tests" feature to modify the test
              battery as they see fit.
            </li>
            <li>
              <b>Personalized Plan Generation:</b> After the clinician enters the results of the
              follow-up tests, the AI synthesizes all collected data—initial observations,
              goniometry, test results, and available equipment—to create a comprehensive corrective
              exercise plan. The plan is structured into two parts: "Release & Stretch" for
              overactive muscles and "Activate & Strengthen" for underactive ones.
            </li>
            <li>
              <b>Customization & Export:</b> The final plan is fully interactive. The clinician can
              click a "Suggest Alternatives" (✨) button on any exercise to get AI-generated
              replacements that target the same muscle, tailored to the client's equipment. Once
              finalized, the assessment data and exercise plan can be exported as a professional,
              client-ready PDF report or formatted for email.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Future Development</h2>
          <p className="mt-3 max-w-prose text-foreground/70">
            This tool is currently in its alpha stage. The long-term vision is to integrate it into
            a larger suite of clinical tools under the banner of <b>kinesiologytools.com</b>. Future
            enhancements may include user accounts for tracking client progress, integration of
            computer vision for automated video analysis, and an expanded library of clinical
            assessments.
          </p>
        </section>
      </div>
    </section>
  );
}
