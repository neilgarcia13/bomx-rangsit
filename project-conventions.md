# Project Conventions

This document defines the structure, naming conventions, and coding practices used by this Next.js template.

## Package Manager

Use pnpm exclusively for installing dependencies and running scripts.

```bash
pnpm install
pnpm add <package>
pnpm add --save-dev <package>
pnpm <script>
```

Do not introduce npm, Yarn, or Bun lockfiles.

## Core Stack

The versions installed by this template establish the minimum baseline:

- Next.js 16.3.4 or higher
- React 19.2.8 or higher
- React DOM 19.2.8 or higher
- TypeScript 5.9.3 or higher
- Tailwind CSS 4.3.3 or higher
- Latest compatible shadcn/ui components

Additional libraries should be added only when a project requires them.

## Naming Conventions

- `kebab-case` for folders and files
- `_kebab-case` for route-specific and feature-specific common modules
- `PascalCase` for classes and types
- `snake_case` for database tables and columns
- `camelCase` for functions, variables, schemas, and similar values

Next.js special filenames such as `page.tsx`, `layout.tsx`, and `not-found.tsx` retain their framework-defined names.

## Shared Source Structure

Shared application modules belong directly under `src/`.

```text
src/
├── app/                    # Next.js App Router
├── assets/                 # Shared imported assets
├── components/             # Shared presentational components
│   └── ui/                 # shadcn/ui and reusable UI
├── constants/              # Shared constants
├── contexts/               # Shared React contexts
├── data/                   # Shared data-access code
├── features/               # Optional feature domains
├── lib/                    # Third-party integrations
├── services/               # Optional business orchestration
├── types/                  # Shared types
└── utils/                  # Shared utilities
```

Create a directory only when it is needed. Empty placeholder directories are not required.

Use `public/` for assets that must be served directly by URL. Use `src/assets/` for assets imported by application code.

## Route Domain Structure

Colocate route-specific code with its route.

```text
src/app/<route-name>/
├── page.tsx                # Route entry point
├── layout.tsx              # Optional route layout
├── loading.tsx             # Optional loading state
├── error.tsx               # Optional recoverable error boundary
├── not-found.tsx           # Optional missing-resource UI
├── _actions/               # Optional server actions
├── _components/            # Route-specific components
├── _constants/             # Route-specific constants
├── _contexts/              # Route-specific React contexts
├── _hooks/                 # Route-specific hooks
├── _types/                 # Route-specific types
└── _utils/                 # Route-specific utilities
```

Create optional files and modules only when the route requires them.

Page components should remain composition-focused and avoid unnecessary implementation details.

## Feature Domain Structure

Use `src/features/` only when a feature is reused across routes or contains enough related behavior to justify its own domain.

```text
src/features/<feature-name>/
├── index.ts                # Feature's public entry point
├── _actions/               # Optional server actions
├── _assets/                # Optional feature assets
├── _components/            # Feature components
├── _constants/             # Feature constants
├── _contexts/              # Feature React contexts
├── _data/                  # Optional feature data access
├── _lib/                   # Optional third-party integrations
├── _types/                 # Feature types
└── _utils/                 # Feature utilities
```

## Import Conventions

- Use relative imports within the same route or feature domain.
- Use the `@/` alias for shared modules and cross-domain imports.
- Avoid deeply nested relative imports such as `../../../../components`.
- Use `import type` for type-only imports.
- Group imports in this order:
  1. External packages
  2. Shared project modules
  3. Local modules

Example:

```tsx
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { User } from "@/types/user";

import UserDetails from "./user-details";
```

## Component Conventions

- Write application components as arrow functions.
- Define component prop types immediately above the component.
- Type props directly instead of using `React.FC`.
- Keep page components focused on composition.
- Extract components when doing so improves readability or reuse.
- Avoid barrel files unless a feature needs a deliberate public API.
- Keep JSX composition shallow and readable.

## Server and Client Components

- Use Server Components by default.
- Add `"use client"` only when hooks, event handlers, browser APIs, or client-side providers require it.
- Keep client boundaries as small and low in the component tree as practical.
- Fetch data in the nearest appropriate Server Component when possible.

## Markup

Prefer simple, familiar semantic elements:

- `main`
- `header`
- `nav`
- `footer`
- `section`
- `article`
- Headings and paragraphs

Use `div` when no semantic element accurately describes the content.

Avoid obscure or unnecessarily specialized elements when simpler markup communicates the structure clearly.

## Tailwind CSS

- Keep Tailwind utilities directly in `className`.
- Avoid unnecessary CSS modules.
- Avoid premature styling abstractions.
- Express responsive behavior beside the affected element using Tailwind breakpoints.
- Use mobile-first responsive styling.
- Allow Prettier to maintain Tailwind’s recommended class order.

Common layout patterns include:

```text
mx-auto max-w-6xl
px-4 py-20 sm:px-6 lg:px-8
grid gap-6 lg:grid-cols-12
lg:col-span-4
lg:col-span-8
```

These are conventions rather than mandatory values. Adjust them when a project’s design requires something different.

## shadcn/ui

- Use shadcn/ui components as reusable interactive and UI primitives.
- Keep ordinary layout and content in semantic HTML.
- Prefer component variants over repeated primitive styles.
- Use semantic theme tokens instead of fixed color utilities when possible.

Preferred semantic tokens include:

```text
bg-background
text-foreground
bg-card
text-card-foreground
text-primary
text-muted-foreground
border-border
ring-ring
```

Project themes may change freely while retaining the same semantic token system.

## Route-State Conventions

Add Next.js special files only when needed:

- `layout.tsx` for meaningful shared route UI
- `loading.tsx` for meaningful loading states
- `error.tsx` for recoverable route errors
- `not-found.tsx` for missing resources

Do not add these files to every route by default.

## Server Actions and Services

- Add `_actions/` only when server actions are necessary.
- Add service modules only when business logic or data orchestration justifies them.
- Avoid introducing service layers for simple operations.

## Environment Variables

- Document required variables in `.env.example`.
- Never include secrets in `.env.example`.
- Keep server-only variables unprefixed.
- Use `NEXT_PUBLIC_` only for values intentionally exposed to the browser.
- Centralize environment access when a project grows beyond a few variables.

Environment validation can be introduced later when required.

## Metadata and Assets

- Define default metadata in the root layout.
- Define route-specific metadata only where needed.
- Use static metadata for fixed values.
- Use `generateMetadata` for dynamic values.
- Prefer `next/image`, `next/font`, and `next/link` when appropriate.
- Organize asset directories and filenames using kebab-case.
