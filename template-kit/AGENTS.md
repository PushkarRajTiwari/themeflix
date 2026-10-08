# {{NAME}}: notes for AI coding assistants

This is a Themeflix template built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Structure

- `src/app/page.tsx` holds the page. Sections are small components (`Hero`, `Features`, and so on) composed by the default export at the bottom of the file. Keep new sections in the same style.
- `src/app/layout.tsx` sets fonts (Geist via `next/font`) and metadata.
- Styling is Tailwind utility classes only. Do not add a UI library or CSS-in-JS.

## Design rules

- Reuse the colors, radii, spacing and type sizes already used on the page; do not introduce new accent colors.
- Every section must work from 360px wide upward. Check `sm:`, `md:` and `lg:` breakpoints when editing.
- Keep components server components unless they need state or browser APIs; then add `"use client"` to a separate file.
- Placeholder copy and data live in arrays at the top of each section. Change data there, not inside the markup.

## Next.js notes

Next.js 16 differs from older versions. Read the guides in `node_modules/next/dist/docs/` before using unfamiliar APIs.
