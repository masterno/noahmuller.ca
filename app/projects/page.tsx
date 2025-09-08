import { projects } from "../../lib/projectsData";
import { ProjectCard } from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects & Portfolio</h1>
      <p className="mt-4 max-w-prose text-foreground/70">
        Here is a selection of projects that showcase my skills in applying technology to solve
        problems in health, wellness, and beyond.
      </p>

      {/* Health & Kinesiology Projects */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Health & Kinesiology Projects</h2>
        <p className="mt-2 max-w-prose text-sm text-foreground/70">
          A few more detailed case studies focused on clinical workflows, assessment, and movement.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => p.category === "health")
            .map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
        </div>
      </div>

      {/* Additional Technology Projects & Explorations */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          Additional Technology Projects & Explorations
        </h2>
        <p className="mt-2 max-w-prose text-sm text-foreground/70">
          Broader experiments that show technical curiosity and range.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => p.category === "tech")
            .map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
        </div>
      </div>
    </section>
  );
}
