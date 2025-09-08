# Software Design Document (SDD): noahmuller.ca

**Author:** Noah Muller & Gemini AI  
**Version:** 1.1  
**Date:** September 8, 2025  
**Related Documents:** PRD v1.0

## 1. Introduction

This document provides a detailed technical design for the personal portfolio website, `noahmuller.ca`, as specified in the Product Requirements Document (PRD). It outlines the system architecture, technology stack, component design, data models, and deployment strategy. The goal is to create a high-performance, maintainable, and scalable static website.

## 2. System Architecture

The project will be architected as a Static Site following Jamstack principles. This architecture decouples the front-end from any back-end or database, leading to enhanced performance, security, and scalability.

- Client-Side: A Next.js (React) application will be responsible for all rendering and UI logic.
- Build Process: During deployment, Next.js's Static Site Generation (SSG) feature will be used. It will fetch all content (from local markdown/data files) at build time and pre-render the entire website into a set of static HTML, CSS, and JavaScript files.
- Hosting & Delivery: The pre-built static assets will be deployed to Netlify's global Content Delivery Network (CDN). When a user requests a page, it will be served directly from the nearest CDN edge node, resulting in extremely fast load times.

### High-Level Architectural Flow

Developer (Local IDE) -> GitHub Repository -> Netlify Build Process -> Netlify CDN -> End User

## 3. Technology Stack

- Framework: Next.js 14+ (using App Router)
- Language: TypeScript
- UI Library: React 18+
- Styling: Tailwind CSS
- Component Library: shadcn/ui
- Content: Markdown/MDX
  - gray-matter for parsing YAML frontmatter
  - remark / rehype for processing Markdown to HTML
- Form Handling:
  - React Hook Form for client-side state and validation
  - Netlify Forms / Formspree for serverless submissions
- Code Quality: ESLint and Prettier

## 4. Component Design

The UI will be built using a modular, reusable component architecture.

- Layout.tsx: A top-level component that wraps all pages. Includes Navbar, Footer, and global providers.
- Navbar.tsx: Main navigation, including mobile menu state.
- Footer.tsx: Site footer with social links and copyright.
- ProjectCard.tsx: Reusable card for project summaries.
  - Props: title, description, imageUrl, githubUrl, liveUrl, tags[]
- BlogPostLayout.tsx: Template for individual blog posts with title, metadata, and MDX content.
- ContactForm.tsx: Contact form component using React Hook Form.

## 5. Data Models & Content Flow

There will be no traditional database. The file system will act as the data source at build time.

### 5.1 Blog Content Model

Blog posts will be stored as .mdx files in a content/blog directory. Each file will contain YAML frontmatter.

File: content/blog/my-first-post.mdx

```yaml
---
title: "My First Post"
date: "2025-09-15"
excerpt: "A short summary of what this post is about..."
coverImage: "/images/blog/my-first-post.jpg"
tags: ["Next.js", "Kinesiology"]
---
```

The main content of the blog post starts here, written in Markdown...

### 5.2 Projects Content Model

Project data will be stored in a centralized JSON or TypeScript file (e.g., `lib/projectsData.ts`) to be easily imported into components.

**File:** `lib/projectsData.ts`

export const projects = [
{
title: 'HPPAP - Open Source Pain Assessment Tool',
description: 'Developed an open-source React web app...',
technologies: ['React', 'TypeScript', 'Tailwind CSS'],
githubUrl: 'https://github.com/masterno/HPPAP/',
liveUrl: null, // or the live URL
image: '/images/projects/hppap.png'
},
// ...other projects
];

### 5.3 Data Flow (Static Site Generation)

- For the blog index and individual blog pages, Next.js's data fetching functions (generateStaticParams, etc.) will read the content/blog directory at build time.
- It will parse the frontmatter and content of each .mdx file.
- It will then pass this data as props to the React components (BlogIndexPage.tsx, BlogPostLayout.tsx) to pre-render the static HTML for each page.
- Project data will be imported from the projectsData.ts file into the relevant components.

## 6. Deployment & CI/CD Pipeline

- **Source Control:** The project will be hosted in a Git repository on GitHub.
- **Deployment Platform:** Netlify.
- **Workflow:**
  1.  Development is done locally on a feature branch.
  2.  Code is pushed to the GitHub repository.
  3.  A pull request is created to the `main` branch. Netlify can generate a deploy preview for this PR.
  4.  Upon merging to `main`, a webhook triggers a new build on Netlify.
  5.  Netlify runs the build command (`next build`).
  6.  If the build is successful, the new static site is atomically deployed to the CDN, making it live.
