export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  image?: string | null;
  imageDark?: string | null;
  featured?: boolean;
  category: "health" | "tech";
  caseStudySlug?: string;
};

export const projects: Project[] = [
  {
    title: "HPPAP – Open Source Pain Assessment Tool",
    description:
      "A React-based web app for standardized pain assessment with modular components and clean UI.",
    technologies: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/masterno/HPPAP/",
    liveUrl: "http://masterno.github.io/HPPAP/",
    image: "/file.svg",
    featured: true,
    category: "health",
    caseStudySlug: "hppap",
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
    category: "health",
  },
  {
    title: "Advanced Calorie Estimator",
    description:
      "Personalized calorie burn estimates powered by a Lasso regression model trained on ~5k workouts, with engineered features (non-linear + interactions) and safeguards to avoid unrealistic extrapolation.",
    technologies: ["Python", "scikit-learn", "Pandas"],
    githubUrl: "https://github.com/masterno/Advanced-Calorie-Estimator",
    liveUrl: "https://masterno.github.io/Advanced-Calorie-Estimator",
    image: "/images/bicycle-light-mode.png",
    imageDark: "/images/bicycle-dark-mode.png",
    featured: false,
    category: "health",
    caseStudySlug: "advanced-calorie-estimator",
  },
  {
    title: "Portfolio Site",
    description:
      "This site: a performant, accessible portfolio built with Next.js and shadcn UI patterns.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/masterno/noahmuller.ca",
    liveUrl: null,
    image: "/vercel.svg",
    featured: false,
    category: "tech",
  },
  {
    title: "Tattoo Virtual Try-On App",
    description:
      "Fun exploration overlaying vector art on skin regions using simple CV and perspective transforms.",
    technologies: ["React", "Canvas", "OpenCV.js"],
    githubUrl: null,
    liveUrl: null,
    image: "/globe.svg",
    featured: false,
    category: "tech",
  },
  {
    title: "AI Flashcard Generator App",
    description:
      "Takes pasted notes and generates spaced-repetition flashcards with LLM assistance.",
    technologies: ["Next.js", "TypeScript", "OpenAI API"],
    githubUrl: null,
    liveUrl: null,
    image: "/globe.svg",
    featured: false,
    category: "tech",
  },
  {
    title: "Custom AI Agents",
    description:
      "Small agents for content summarization and task automation; experiments with tools and memory.",
    technologies: ["TypeScript", "OpenAI", "MCP"],
    githubUrl: null,
    liveUrl: null,
    image: "/globe.svg",
    featured: false,
    category: "tech",
  },
];
