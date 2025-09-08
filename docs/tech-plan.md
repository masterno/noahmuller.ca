# Technical Implementation Plan: noahmuller.ca

**Author:** Noah Muller & Gemini AI
**Version:** 1.0
**Date:** September 8, 2025
**Related Documents:** PRD v1.0, SDD v1.1

---

## 1. Introduction

This document outlines the phased plan for the development and deployment of the `noahmuller.ca` personal portfolio website. The implementation will follow the architecture and design specified in the Software Design Document (SDD). The project is divided into logical phases, from initial setup to final deployment.

## 2. Phase 1: Project Setup & Foundation

**Goal:** To establish a clean, modern, and scalable development environment.

- **1.1. Local Environment Setup:**
  - Ensure Node.js (LTS version) and npm/pnpm/yarn are installed.
  - Ensure Git is installed and configured.
  - Set up VS Code (or preferred IDE) with recommended extensions (e.g., ESLint, Prettier, Tailwind CSS IntelliSense).

- **1.2. Next.js Project Initialization:**
  - Create a new Next.js project using the command `npx create-next-app@latest --typescript`.
  - Follow the prompts to include TypeScript, ESLint, and Tailwind CSS.
  - Initialize the project with the App Router.

- **1.3. Version Control:**
  - Create a new repository on GitHub.
  - Make the initial commit of the new Next.js project and push it to the GitHub repository.

- **1.4. Styling & Component Setup:**
  - Initialize `shadcn/ui` in the project. This will set up the necessary configurations in `tailwind.config.ts` and `globals.css`.
  - Install Prettier and configure it to work with ESLint to enforce a consistent code style.

- **1.5. Folder Structure:**
  - Create the initial folder structure inside the project:
    - `app/`: For all pages and layouts (Next.js App Router convention).
    - `components/`: For reusable React components.
    - `lib/`: For utility functions, data sources (e.g., `projectsData.ts`).
    - `content/`: To store all Markdown-based content (e.g., `content/blog/`).
    - `public/`: For static assets like images, fonts, and favicons.

## 3. Phase 2: Core UI & Layout Development

**Goal:** To build the main structural components and page shells.

- **2.1. Implement Global Layout:**
  - Create a root `layout.tsx` file in the `app` directory.
  - Implement the `Navbar` and `Footer` components and add them to the root layout.
- **2.2. Develop Core Components:**
  - Build the `Navbar.tsx` component with navigation links and logic for a mobile-friendly hamburger menu.
  - Build the `Footer.tsx` component with links to GitHub and LinkedIn.
- **2.3. Create Page Routes:**
  - Create the basic folder structure for all main pages within the `app` directory:
    - `app/page.tsx` (Homepage)
    - `app/about/page.tsx`
    - `app/projects/page.tsx`
    - `app/credentials/page.tsx`
    - `app/blog/page.tsx` (Blog index)
    - `app/contact/page.tsx`
- **2.4. Global Styling:**
  - Define base styles for typography (headings, paragraphs, links) and color themes in `globals.css` using Tailwind's `@apply` directive where appropriate.

## 4. Phase 3: Static Page Content Implementation

**Goal:** To build out the pages that rely on static, hard-coded content.

- **4.1. Build Homepage:**
  - Populate `app/page.tsx` with the content defined in the PRD (Hero section, intro snippets, featured projects).
- **4.2. Build About Page:**
  - Populate `app/about/page.tsx` with the professional bio and a styled button to download the PDF resume.
- **4.3. Build Contact Page:**
  - Create and style the `ContactForm.tsx` component using `React Hook Form` and `shadcn/ui` components.
  - Integrate the form with a serverless handler like Formspree or Netlify Forms.

## 5. Phase 4: Content-Driven Page Implementation

**Goal:** To dynamically generate pages from local data files (Markdown and TS).

- **5.1. Implement Projects Page:**
  - Create the `lib/projectsData.ts` file with the structured data for all projects.
  - Build the `app/projects/page.tsx` page, which will import this data and map over it to render a grid of `ProjectCard.tsx` components.
- **5.2. Implement Credentials Page:**
  - Similar to the projects page, create a data file for credentials and build the `app/credentials/page.tsx` to display the categorized list.
- **5.3. Implement Blog Functionality:**
  - Create utility functions in `lib/blog.ts` to read the `content/blog` directory, parse Markdown files using `gray-matter` and `remark`.
  - Build the blog index page (`app/blog/page.tsx`) which will fetch and display a list of all posts.
  - Implement the dynamic route for individual blog posts at `app/blog/[slug]/page.tsx`. This page will use `generateStaticParams` to create a page for each markdown file and render its content using the `BlogPostLayout.tsx` component.

## 6. Phase 5: Finalization, Testing & Deployment

**Goal:** To ensure the website is polished, performant, and ready for production.

- **6.1. Content Review:**
  - Perform a final review of all text content for typos, grammatical errors, and accuracy.
  - Ensure all links (internal and external) are working correctly.
- **6.2. Quality Assurance & Testing:**
  - Conduct a thorough accessibility (a11y) audit using browser tools and screen readers.
  - Test for responsiveness across a range of devices (or use browser dev tools).
  - Run Google Lighthouse reports to check for performance, accessibility, and SEO scores. Address any issues.
- **6.3. Deployment Setup:**
  - Create a new site on Netlify.
  - Connect the Netlify site to the project's GitHub repository. Netlify should automatically detect it's a Next.js project.
  - Configure the custom domain (`noahmuller.ca`) in the Netlify settings.
- **6.4. Go-Live:**
  - Merge the final, tested code into the `main` branch on GitHub.
  - This will trigger the first production build and deployment on Netlify.
  - Verify that the live site is working as expected.
