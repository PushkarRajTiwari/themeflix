# Themeflix

The storefront for [themeflix.com](https://themeflix.com): modern Next.js + Tailwind website templates with live previews, sold one by one or through an All-Access pass.

## Run it locally

```bash
npm install
cp .env.example .env.local   # optional: add a Stripe test key to try checkout
npm run dev
```

Open http://localhost:3000.

## How it is organized

| Path | What it is |
| --- | --- |
| `src/lib/catalog.ts` | Every template and plan: names, prices, features. Add new templates here. |
| `src/app/(store)/` | The store: home and gallery, template pages, pricing, checkout result, legal pages. |
| `src/app/preview/[slug]` | Full-screen live preview with desktop, tablet and mobile sizes. |
| `src/app/demos/<slug>/` | Each template's actual code, served as its live demo. Must be self-contained (no imports from the store). |
| `template-kit/` | Starter project every download is wrapped in (package.json, layout, README, AGENTS.md). |
| `src/app/api/checkout` | Creates a Stripe Checkout session and redirects to it. |
| `src/app/api/download` | Zips a template on request. Paid templates require a paid Stripe session. |
| `public/screens/` | Gallery thumbnails. Regenerate with `npm run screenshots` while the site is running. |

## Adding a template

1. Create `src/app/demos/<slug>/page.tsx` using only React, Next.js and Tailwind.
2. Add an entry to `templates` in `src/lib/catalog.ts`.
3. Run the site and `npm run screenshots -- http://localhost:3000` to create its thumbnail.

## Payments (US only for now)

Checkout uses Stripe. Without `STRIPE_SECRET_KEY`, buy buttons lead to a "checkout opens soon" page and free templates still download.

To go live:

1. Create a Stripe account and add `STRIPE_SECRET_KEY` (test key first) and `LICENSE_SECRET` to the host's environment variables.
2. Turn on Stripe Tax in the dashboard, register where you owe US sales tax, then set `STRIPE_AUTOMATIC_TAX=true`.
3. Turn on email receipts under Settings → Customer emails.
4. To keep sales US-only, add a Radar rule: `Block if :card_country: != 'US'`.

Buyers get their downloads and license key on the checkout success page, which is also their download link.

## Deploy

Import the repository on Vercel and add the environment variables above. Point themeflix.com at the Vercel project.
