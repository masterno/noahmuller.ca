# Development Task List: noahmuller.ca

**Author:** Noah Muller & Gemini AI
**Version:** 1.0
**Date:** September 8, 2025
**Related Documents:** PRD, SDD, Technical Implementation Plan, UI-UX Flow

---

## Phase 1: Project Setup & Foundation

- [x] 1.1: **Initialize Local Environment:**
    - [x] Confirm Node.js and Git are installed.
    - [x] Set up VS Code (or Windsurf IDE) with ESLint, Prettier, and Tailwind CSS extensions.
- [x] 1.2: **Create Next.js Project:**
    - [x] Run `npx create-next-app@latest` with options for TypeScript, ESLint, and Tailwind CSS.
- [x] 1.3: **Set Up Version Control:**
    - [x] Create a new, empty repository on GitHub named `noahmuller.ca` (or similar).
    - [x] Link the local project to the remote GitHub repository.
    - [x] Make the first commit and push to the `main` branch.
- [X] 1.4: **Configure Styling & Components:**
    - [X] Run `npx shadcn@latest init` to configure `globals.css`, `tailwind.config.ts`, and component utilities.
    - [X] Install and configure Prettier to work with ESLint. Create a `.prettierrc` file.
- [X] 1.5: **Establish Folder Structure:**
    - [X] Create the `components/` directory.
    - [X] Create the `lib/` directory for utilities and data.
    - [X] Create the `content/blog/` directory for blog posts.

## Phase 2: Core UI & Layout Development

- [X] 2.1: **Build Global Layout:**
    - [X] Create the root `app/layout.tsx` file.
    - [X] Implement the `Navbar` component.
    - [X] Implement the `Footer` component.
    - [X] Add `Navbar` and `Footer` to the root layout to wrap all pages.
- [X] 2.2: **Create Page Route Files:**
    - [X] Verify `app/page.tsx` exists for the Homepage.
    - [X] Create `app/about/page.tsx`.
    - [X] Create `app/projects/page.tsx`.
    - [X] Create `app/credentials/page.tsx`.
    - [X] Create `app/blog/page.tsx`.
    - [X] Create `app/contact/page.tsx`.

## Phase 3: Static Page Implementation

- [X] 3.1: **Develop Homepage (`/`):**
    - [X] Build the Hero section component.
    - [X] Build the "What I Do" snippets section.
    - [X] Build the "Featured Projects" section (will use `ProjectCard` component).
- [X] 3.2: **Develop About Page (`/about`):**
    - [X] Add the professional bio text content.
    - [X] Create and style a "Download Resume" button.
- [ ] 3.3: **Develop Contact Page (`/contact`):**
    - [ ] Build the `ContactForm.tsx` component using `React Hook Form` and `shadcn/ui` inputs.
    - [ ] Implement form validation (e.g., for email format, required fields).
    - [ ] Integrate the form submission with Netlify Forms or Formspree.

## Phase 4: Content-Driven Page Implementation

- [ ] 4.1: **Implement Projects Page (`/projects`):**
    - [ ] Create the `lib/projectsData.ts` file and populate it with your project details.
    - [ ] Build the `ProjectCard.tsx` reusable component.
    - [ ] Fetch the data in `app/projects/page.tsx` and map over it to display a grid of `ProjectCard` components.
- [ ] 4.2: **Implement Credentials Page (`/credentials`):**
    - [ ] Create a data file (`lib/credentialsData.ts`) for your full, categorized list of credentials.
    - [ ] Build the page to display the categorized credentials with their descriptions.
- [ ] 4.3: **Implement Blog Functionality:**
    - [ ] Install `gray-matter` and `remark` libraries.
    - [ ] Create utility functions in `lib/blog.ts` to read and parse all markdown files from `content/blog/`.
    - [ ] Create a few sample `.mdx` blog posts with frontmatter to use for development.
    - [ ] Build the blog index page (`app/blog/page.tsx`) that fetches and displays a list of all posts.
    - [ ] Create the dynamic route `app/blog/[slug]/page.tsx`.
    - [ ] Implement the data fetching (`generateStaticParams`) to create routes for each post.
    - [ ] Build the blog post layout to render the title, metadata, and post content.

## Phase 5: Finalization, Testing & Deployment

- [ ] 5.1: **Review and Polish:**
    - [ ] Proofread all static text content on the site.
    - [ ] Test all internal and external links.
    - [ ] Ensure all images have appropriate `alt` tags and are optimized for the web.
- [ ] 5.2: **Quality Assurance:**
    - [ ] Test website responsiveness on various screen sizes (mobile, tablet, desktop).
    - [ ] Test for accessibility: check keyboard navigation, color contrast, and test with a screen reader.
    - [ ] Run a Google Lighthouse audit and aim for scores of 90+ in all categories.
- [ ] 5.3: **Set Up Deployment:**
    - [ ] Create a new site on your Netlify account.
    - [ ] Connect the Netlify site to your GitHub repository.
    - [ ] Configure the build settings (Netlify should auto-detect Next.js).
- [ ] 5.4: **Go Live:**
    - [ ] Add your custom domain (`noahmuller.ca`) to the Netlify project and configure DNS settings.
    - [ ] Merge all completed code into the `main` branch.
    - [ ] Trigger the first production deployment.
    - [ ] Thoroughly test the live site to ensure everything works as expected.