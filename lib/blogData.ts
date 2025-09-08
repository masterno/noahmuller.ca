export type BlogPost = {
  title: string;
  slug: string;
  date: string; // ISO string
  excerpt: string;
  coverImage?: string | null;
};

export const posts: BlogPost[] = [
  {
    title: "Why Kinesiology + Tech Works",
    slug: "kinesiology-and-tech",
    date: "2025-09-01",
    excerpt:
      "How combining movement science with modern web and AI tooling can improve client outcomes and workflows.",
    coverImage: "/globe.svg",
  },
  {
    title: "Case Study: Building a Simple Pain Assessment UI",
    slug: "pain-assessment-ui",
    date: "2025-08-20",
    excerpt:
      "Design decisions and tradeoffs behind a clean, accessible interface for standardized assessments.",
    coverImage: "/file.svg",
  },
  {
    title: "Notes on Accessibility for Health Apps",
    slug: "accessibility-health-apps",
    date: "2025-08-10",
    excerpt: "Quick wins that make clinical tools more usable for everyone.",
    coverImage: "/window.svg",
  },
];
