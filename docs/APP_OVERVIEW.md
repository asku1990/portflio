# App Overview

## Document Status

- This document is written before implementation begins.
- It serves as a reference for future development and AI assistance.

## Purpose

- Professional portfolio site that communicates who you are, what you do, and how to contact you.
- Showcase projects, skills, experience, and interactive UI work.
- Provide a private, password-gated CV download.

## Planned Scope

- Sectioned landing page: Hero, About, Projects, Skills, Experience, Contact, and CTA.
- Interactive UI elements to demonstrate front-end capability (filters, tabs, or motion).
- Private CV access flow using Server Actions and a route handler (no database).

## Tech Stack (Target)

- Next.js App Router (React 19)
- TypeScript
- Tailwind CSS
- shadcn/ui for consistent UI components
- TanStack Query for client data fetching and caching
- Optional: Framer Motion for subtle animations

## Quality and UX (Target)

- SEO: page-level metadata, Open Graph, sitemap, and robots.
- Accessibility: semantic HTML, keyboard navigation, visible focus states, and contrast checks.
- Responsive: mobile-first layouts with fluid spacing/typography across breakpoints.

## Analytics (Optional)

- Lightweight analytics to understand traffic (Plausible, Umami, or GA4).
- Avoid invasive tracking; keep the setup minimal and privacy-aware.

## Content Source

- Primary content lives in `data/portfolio.ts` as TypeScript data.
- Images and static assets live in `public/`.
- If needed later, JSON content can be moved to a `content/` folder, but TypeScript is the default.

## Project Structure (Planned)

```
app/                   # Routes and layouts
components/
  sections/            # Page sections (Hero, About, Projects, etc.)
  ui/                  # shadcn/ui components
data/
  portfolio.ts         # Single source of truth for content
public/                # Images and static assets
docs/                  # App documentation
```

## CV Access Model (Private)

- A password prompt submits to a Server Action for validation.
- On success, the server sets an HttpOnly cookie and allows a download request.
- A route handler streams the PDF from S3 (or compatible storage like R2/B2).
- The password and S3 credentials are stored in environment variables.

## Testing Strategy (Planned)

- Baseline checks: `eslint` and TypeScript typecheck.
- E2E smoke tests with Playwright (homepage renders, CV gate works, download requires auth).
- Optional component tests with Vitest + React Testing Library for key UI components.

## Deployment Notes

- Deployed on Netlify; configure environment variables there.
- CV lives in S3; no local file management needed.
