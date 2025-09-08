import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  image?: string | null;
};

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, image }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card p-5 transition-colors hover:bg-secondary/40">
      <div className="flex items-start gap-4">
        {image ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border">
            <Image src={image} alt={title} fill className="object-contain p-2" />
          </div>
        ) : null}
        <div>
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-foreground/70">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/60">
        {technologies.map((t) => (
          <span key={t} className="rounded-md border px-2 py-1">
            {t}
          </span>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="mt-4 flex items-center gap-3 text-sm">
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              View on GitHub
            </Link>
          ) : null}
          {liveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Live Demo
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}
