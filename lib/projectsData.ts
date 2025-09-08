export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  image?: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "HPPAP – Open Source Pain Assessment Tool",
    description:
      "A React-based web app for standardized pain assessment with modular components and clean UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/masterno/HPPAP/",
    liveUrl: null,
    image: "/next.svg",
    featured: true,
  },
  {
    title: "AI Goniometer (Concept)",
    description:
      "Exploratory project using computer vision to estimate joint angles from video for remote assessments.",
    technologies: ["Next.js", "TypeScript", "MediaPipe"],
    githubUrl: undefined,
    liveUrl: undefined,
    image: "/globe.svg",
    featured: true,
  },
  {
    title: "Kinesiology Portfolio Site",
    description:
      "This site: a performant, accessible portfolio built with Next.js and shadcn UI patterns.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/masterno/noahmuller.ca",
    liveUrl: null,
    image: "/vercel.svg",
    featured: false,
  },
];
