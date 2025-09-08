# UI-UX Flow & Wireframes: noahmuller.ca

**Author:** Noah Muller & Gemini AI
**Version:** 1.0
**Date:** September 8, 2025
**Related Documents:** PRD v1.0, SDD v1.1

---

## 1. Introduction

This document defines the User Experience (UX) flow and User Interface (UI) structure for the `noahmuller.ca` website. The goal is to create an intuitive, clean, and professional experience that effectively guides visitors to the most important information, aligning with the goals set in the PRD.

## 2. Target User Personas & Goals

The UI/UX is designed with the following primary user in mind:

- **Persona:** "Recruiter Rachel" - A busy hiring manager or technical recruiter.
- **Goal:** To quickly understand Noah's unique value proposition, see tangible proof of his skills (projects), verify his credentials, and find his contact information, all within 2-3 minutes.

## 3. User Flow

The typical user journey for "Recruiter Rachel" is anticipated as follows:

1.  **Landing:** Arrives on the **Homepage** from a link on the resume or LinkedIn.
2.  **First Impression:** Immediately sees the headline, establishing Noah as a Kinesiologist with tech skills.
3.  **Exploration (Path A - Projects):** Clicks the "View My Work" or a "Featured Project" link.
4.  **Drill Down:** Lands on the **Projects Page**, scans the project cards, and identifies a project of interest (e.g., the AI Goniometer).
5.  **Evaluation:** (On the projects page) Reads the project's description, technologies used, and clicks the GitHub link to see the source code.
6.  **Verification (Path B - Credentials):** Navigates to the **Credentials Page** to see the full list of certifications.
7.  **Final Action:** Navigates to the **Contact Page** to get Noah's email or use the contact form.

This flow is designed to be efficient, providing increasing levels of detail as the user shows more interest.

## 4. Page Layouts (Low-Fidelity Wireframes)

This section describes the layout of each key page from top to bottom.

### 4.1 Global: Navbar
- **Layout:** A fixed or sticky header.
- **Content (Desktop):** "Noah Muller" (or a logo) on the left. Navigation links ("About", "Projects", "Credentials", "Blog", "Contact") on the right.
- **Content (Mobile):** "Noah Muller" on the left. A hamburger menu icon on the right.

### 4.2 Homepage (`/`)
- **[Navbar]**
- **[Hero Section]:** Full-width. Contains a large, bold headline, a sub-headline, and a primary Call-to-Action button (e.g., "View My Projects").
- **[Intro Snippets Section]:** A 3-column layout. Each column has an icon, a heading (e.g., "Clinical Practice"), and a short descriptive paragraph.
- **[Featured Projects Section]:** A heading ("Featured Work") followed by a 2 or 3-column grid of `ProjectCard` components.
- **[Footer]**

### 4.3 Projects Page (`/projects`)
- **[Navbar]**
- **[Page Header]:** A large heading, "Projects & Portfolio".
- **[Projects Grid]:** A responsive grid displaying a `ProjectCard` for every project listed in the data file. The grid will be 3 columns on desktop, 2 on tablet, and 1 on mobile.
- **[Footer]**

### 4.4 Blog Index Page (`/blog`)
- **[Navbar]**
- **[Page Header]:** A large heading, "Blog & Articles".
- **[Post List]:** A single-column list of blog post summaries. Each summary includes the post title, publication date, a short excerpt, and a "Read More" link.
- **[Footer]**

### 4.5 Individual Blog Post (`/blog/[slug]`)
- **[Navbar]**
- **[Article Header]:** Contains the main `<h1>` post title, author name, and publication date. A cover image may be displayed here.
- **[Article Body]:** A clean, single-column, readable content area for the rendered Markdown.
- **[Footer]**

## 5. Key Interactions & User Feedback

- **Navbar (Mobile):** Tapping the hamburger icon will trigger a full-screen overlay or a slide-out drawer containing the navigation links. Tapping a link or an "X" icon will close it.
- **Buttons & Links:** Will have a clear hover and active state (e.g., subtle color change or lift effect) to provide visual feedback.
- **Contact Form:**
    - **Validation:** If the user tries to submit an invalid form, the problematic fields will be highlighted, and clear error messages will appear below them.
    - **Feedback:** Upon successful submission, the form will be replaced with a clear success message (e.g., "Thank you! Your message has been sent."). Upon failure, a general error message will appear.
- **Scroll Animations (Optional):** As the user scrolls down a page, content sections can have a subtle fade-in or slide-in animation to create a more dynamic experience.