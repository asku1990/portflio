# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm format       # Format all files with Prettier
pnpm format:check # Check formatting without writing
```

Pre-commit hook runs `lint-staged` (Prettier) automatically via Husky.

## Architecture

Single-page portfolio using **Next.js 16 App Router** with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** (new-york style).

### Content Model

All portfolio content lives in `data/portfolio.ts` as a single typed export `portfolioData`. Section components import and render from this file directly. Type definitions (`Hero`, `Project`, `Skills`, etc.) are co-located in the same file.

### Component Organization

- `components/sections/` — Page sections (HeroSection, AboutSection, ProjectsSection, etc.) that consume `portfolioData`
- `components/ui/` — shadcn/ui primitives (Button, Card, Dialog, Badge, etc.)
- `components/layout/` — Header (with sticky nav + IntersectionObserver active state) and Footer
- `components/icons/` — Custom social icons (GitHub, LinkedIn)

### Key Patterns

- Path alias `@/*` maps to project root
- Use `cn()` from `lib/utils.ts` for className merging (clsx + tailwind-merge)
- TanStack Query is available via `QueryProvider` in root layout
- Sections use anchor IDs for smooth scroll navigation (e.g., `#projects`, `#contact`)

## Code Style

Prettier config: double quotes, semicolons, trailing commas, 100 char line width.
