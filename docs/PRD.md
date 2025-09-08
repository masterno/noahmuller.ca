# Product Requirements Document (PRD): noahmuller.ca

**Author:** Noah Muller & Gemini AI
**Version:** 1.0
**Date:** September 8, 2025

---

## 1. Introduction & Background

This document outlines the requirements for **noahmuller.ca**, a professional portfolio website for Noah Muller, a Registered Kinesiologist and Health Technology Developer. The primary purpose of this website is to serve as a comprehensive, dynamic extension of Noah's professional resume.

The website will showcase Noah's unique blend of clinical expertise in human movement and his technical skills in software development, including AI/ML and full-stack web applications. It aims to provide a compelling narrative for his career transition, demonstrate tangible proof of his skills through project case studies, and act as a central hub for his professional identity online.

## 2. Goals & Objectives

### Business Goals

- To establish a strong, modern professional brand online.
- To successfully support a career transition into a full-time kinesiology or health-tech role.
- To serve as a primary resource for recruiters, hiring managers, and potential collaborators to learn about Noah's skills and accomplishments.

### User Goals

- **Recruiters/Hiring Managers:** To quickly understand Noah's qualifications, view concrete examples of his work, verify his credentials, and easily contact him.
- **Professional Colleagues:** To understand Noah's unique skillset and identify potential areas for collaboration.
- **Potential Clients:** To learn about Noah's expertise and approach to kinesiology and personal training.

## 3. Target Audience

1.  **Primary:** Recruiters and Hiring Managers in the health, wellness, fitness, and health technology sectors across Canada.
2.  **Secondary:** Kinesiology and healthcare professionals, potential collaborators in the tech industry.
3.  **Tertiary:** Potential personal training or kinesiology clients.

## 4. Features & Requirements (MVP)

The website will be a static site composed of several key pages/sections.

### 4.1 Global Elements

- **Navigation Bar:** Clean, simple navigation with links to Home, About, Projects, Credentials, Blog, and Contact.
- **Footer:** Links to LinkedIn, GitHub, and a copyright notice.
- **Responsiveness:** The entire site must be fully responsive and optimized for desktop, tablet, and mobile devices.

### 4.2 Homepage

- **Purpose:** To provide a quick, high-impact introduction to Noah and guide users to key content.
- **Requirements:**
  - **Hero Section:** A professional headshot and a clear, concise headline (e.g., "Registered Kinesiologist & Health Technology Developer").
  - **Introductory Snippets:** Short, visually distinct summaries of "Clinical Practice," "Technology Projects," and "Writing & Insights," each linking to the relevant page.
  - **Featured Projects Grid:** A visual showcase of 2-3 top projects, linking to the main Projects page.

### 4.3 About Page

- **Purpose:** To share the detailed story behind Noah's career transition and professional philosophy.
- **Requirements:**
  - **Professional Bio:** An expanded, first-person narrative based on the resume's profile section.
  - **Downloadable Resume:** A prominent, styled button to download the finalized PDF resume.

### 4.4 Projects Page (Portfolio)

- **Purpose:** To provide detailed, evidence-based case studies of Noah's technical work.
- **Requirements:**
  - A grid layout of all major projects.
  - Each project will have its own dedicated section or page containing:
    - Project Title & Summary
    - Problem Statement ("The Why")
    - A list of technologies used (e.g., React, Python, Next.js, MediaPipe).
    - A brief overview of the development process and solution.
    - The project outcome or key results (e.g., R² value).
    - Visuals (screenshots, GIFs, or embedded videos).
    - Prominent, clickable buttons to "View on GitHub" and "Live Demo" (if applicable).

### 4.5 Credentials Page

- **Purpose:** To serve as the comprehensive "master list" of all certifications and licenses.
- **Requirements:**
  - Certifications organized into logical categories (e.g., "Clinical & Kinesiology," "Technology, AI & Data Science").
  - Each entry will list the credential name, issuing body, and 2-3 bullet points detailing the skills learned.
  - Where available, include a direct link to the credential verification page (e.g., Coursera).

### 4.6 Blog

- **Purpose:** To demonstrate thought leadership, share knowledge, and improve SEO.
- **Requirements:**
  - **Blog Index Page:** A list of all blog posts, showing title, date, and a short excerpt.
  - **Individual Post Page:** A clean, readable layout for blog content.
  - Posts will be generated from local Markdown (`.mdx`) files.
  - An "AI Co-Author" disclaimer on relevant posts.

### 4.7 Contact Page

- **Purpose:** To provide a simple way for users to get in touch.
- **Requirements:**
  - A simple contact form (to be handled by a serverless function, e.g., Formspree or Netlify Forms).
  - Display professional email address.
  - Prominent, clickable icons linking to LinkedIn and GitHub profiles.

## 5. Non-Functional Requirements

- **Performance:** The site must be fast. Target a Lighthouse performance score of 90+. Utilize Next.js static site generation (SSG) for optimal load times.
- **Accessibility (a11y):** The site must be accessible, following WCAG 2.1 guidelines (e.g., proper semantic HTML, keyboard navigation, sufficient color contrast).
- **Security:** As a static site, the attack surface is minimal. Ensure all third-party scripts are from trusted sources. Use HTTPS (provided by Netlify).

## 6. Assumptions & Constraints

- **Technology Stack:** The project will be built using Next.js (React), TypeScript, Tailwind CSS, and shadcn/ui.
- **No Back-End:** The site will be static. There will be no traditional server-side application or database.
- **Deployment:** The site will be deployed via a Git-based workflow to a static hosting platform (Netlify).
- **Content:** All initial content (text, project details) will be provided by Noah, based on the finalized resume and our discussions.

## 7. Success Metrics

- The website is successfully launched at noahmuller.ca.
- Positive feedback is received from recruiters and network contacts.
- The website is referenced positively during job interviews.
- The contact form generates legitimate inquiries from recruiters or potential collaborators.
