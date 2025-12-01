export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  liveLabel?: string | null;
  image?: string | null;
  imageDark?: string | null;
  featured?: boolean;
  featuredOrder?: number; // lower = earlier in Featured grid
  category: "health" | "tech";
  caseStudySlug?: string;
};

export const projects: Project[] = [
  {
    title: "Fit Flux",
    description:
      "A professional-grade training platform combining an AI coach for athletes with powerful roster management and program building tools for trainers. Features auto-regulating plans and daily readiness assessments.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    githubUrl: null,
    liveUrl: "https://fitflux.co",
    image: "/globe.svg",
    featured: true,
    featuredOrder: 1,
    category: "health",
    caseStudySlug: "fit-flux",
  },
  {
    title: "HPPAP – Open Source Pain Assessment Tool",
    description:
      "Standard 1-10 pain scales often fail to capture the full picture of a client's experience. To address this, I developed HPPAP, an open-source web app that provides a more comprehensive, multidimensional pain assessment, allowing clinicians to gain deeper insights into a patient's condition.",
    technologies: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/masterno/HPPAP2.0",
    liveUrl: "https://masterno.github.io/HPPAP2.0/",
    image: "/file.svg",
    featured: true,
    featuredOrder: 1,
    category: "health",
    caseStudySlug: "hppap",
  },
  {
    title: "Advanced Calorie Estimator",
    description:
      "While standard MET calculations are a useful baseline, they don't account for individual differences in fitness and physiology. I engineered a more precise solution: a Python-based machine learning model trained on real-world data to provide a more personalized and accurate prediction of a client's energy expenditure during exercise.",
    technologies: ["Python", "scikit-learn", "Pandas"],
    githubUrl: "https://github.com/masterno/Advanced-Calorie-Estimator",
    liveUrl: "https://masterno.github.io/Advanced-Calorie-Estimator",
    image: "/images/bicycle-light-mode.png",
    imageDark: "/images/bicycle-dark-mode.png",
    featured: true,
    featuredOrder: 2,
    category: "health",
    caseStudySlug: "advanced-calorie-estimator",
  },
  {
    title: "AI-Powered Overhead Squat Assessor",
    description:
      "A clinical tool designed for physical therapists and trainers to streamline movement screening. This application uses AI to analyze observational and goniometric data from an overhead squat, identifying potential muscle imbalances. It then generates a fully customizable, data-driven corrective exercise plan, complete with exercise alternatives and exportable reports, enhancing diagnostic efficiency and client care.",
    technologies: ["React", "TypeScript", "Gemini API", "Tailwind CSS"],
    githubUrl: undefined,
    liveUrl: "https://overhead-squat-assessor-335483159135.us-west1.run.app/",
    liveLabel: "Live App",
    image: "/file.svg",
    featured: true,
    featuredOrder: 3,
    category: "health",
    caseStudySlug: "overhead-squat-assessor",
  },
  {
    title: "AI Goniometer (Concept)",
    description:
      "Exploratory project using computer vision to estimate joint angles from video for remote assessments.",
    technologies: ["Next.js", "TypeScript", "MediaPipe"],
    githubUrl: undefined,
    liveUrl: undefined,
    image: "/globe.svg",
    featured: false,
    category: "health",
    caseStudySlug: undefined,
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
      "Uses Google's latest image model Nano Banana to generate tattoo designs, stencil, virtual try-ons, placement maps, and a final tatto brief that you can bring to your artist.",
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
      "Flash card generation from any given subject or notes. Includes folders to organize cards, and a quiz feature to test yourself.",
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
