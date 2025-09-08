# noahmuller.ca — Portfolio & Case Studies

Modern, accessible portfolio site for Noah Muller. Built with Next.js (App Router), TypeScript, and Tailwind-based utilities, featuring case studies (e.g., HPPAP, Advanced Calorie Estimator), an About page, Projects, Credentials, and a Contact form wired for static hosting (Netlify Forms).

## Features

- Home with hero, "What I Do", featured projects, and recent posts
- About with bio, clinical practice, personal training, and technology sections
- Projects with categorized grids and in-depth case studies
- Contact with client-side validation, success banner, and mobile-friendly UX
- Dark/light theme support with per-project icons

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (via shadcn-style utilities)
- Prettier + ESLint

## Local Development

Prerequisites:

- Node.js 18+

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
app/
  about/
  blog/
  contact/
  credentials/
  projects/
    hppap/
    advanced-calorie-estimator/
components/
lib/
public/
  images/
```

## Case Studies

- HPPAP — Holistic Pain Profile & Action Planner
  - Live: http://masterno.github.io/HPPAP/
  - Code: https://github.com/masterno/HPPAP/
- Advanced Calorie Estimator
  - Live: https://masterno.github.io/Advanced-Calorie-Estimator
  - Code: https://github.com/masterno/Advanced-Calorie-Estimator

## Deployment

Optimized for Netlify. Connect this repository to Netlify and deploy with default Next.js settings. The contact form uses Netlify Forms (no server code required).

## Contributing

Issues and PRs welcome. For significant changes, open an issue first to discuss the approach.

## License

This project is licensed under the MIT License — see `LICENSE` for details.
