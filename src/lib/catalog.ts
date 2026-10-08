export type Category = "SaaS" | "AI" | "Portfolio" | "Dating" | "E-commerce" | "Business";

export type Template = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  /** Price in US cents. 0 means free. */
  price: number;
  version: string;
  updated: string;
  features: string[];
  stack: string[];
  /** Two hex colors used for the gallery card artwork. */
  colors: [string, string];
};

export const templates: Template[] = [
  {
    slug: "nimbus",
    name: "Nimbus",
    tagline: "A crisp landing page for SaaS products",
    description:
      "Nimbus gives a software product everything it needs on day one: a bold hero, feature grid, social proof, pricing table, FAQ and a closing call to action. Every section is a separate component, so you can reorder or drop sections in minutes.",
    category: "SaaS",
    price: 1900,
    version: "1.0.0",
    updated: "2026-10-08",
    features: [
      "Hero with product screenshot frame",
      "Feature grid and logo strip",
      "Three-tier pricing table",
      "FAQ and closing call to action",
      "Fully responsive, no extra UI libraries",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    colors: ["#6366f1", "#06b6d4"],
  },
  {
    slug: "launchpad",
    name: "Launchpad",
    tagline: "A dark, glowing launch page for AI products",
    description:
      "Launchpad is built for AI tools and startups announcing something new. It pairs a dark gradient hero with a waitlist form, a live-looking prompt demo, use-case cards and a changelog teaser.",
    category: "AI",
    price: 1900,
    version: "1.0.0",
    updated: "2026-10-08",
    features: [
      "Dark gradient hero with waitlist form",
      "Prompt and response demo block",
      "Use-case cards and stats band",
      "Changelog teaser and footer",
      "Fully responsive, no extra UI libraries",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    colors: ["#a855f7", "#ec4899"],
  },
  {
    slug: "kindred",
    name: "Kindred",
    tagline: "A warm, modern site for matrimony and dating apps",
    description:
      "Kindred is built for matchmaking, matrimony and dating products that want to feel trustworthy and romantic at once. It opens with a match search and a swipe-style profile collage, then walks visitors through matrimony and dating modes, hand-picked profiles, success stories, safety features with a chat mockup, and membership plans.",
    category: "Dating",
    price: 1900,
    version: "1.0.0",
    updated: "2026-10-08",
    features: [
      "Hero with match search and profile card collage",
      "Matrimony and dating modes side by side",
      "Profile cards with match score and verified badge",
      "Success stories, safety section and phone chat mockup",
      "Three-tier membership pricing",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    colors: ["#f43f5e", "#fb923c"],
  },
  {
    slug: "mellow",
    name: "Mellow",
    tagline: "A boutique online store with a working cart",
    description:
      "Mellow is a direct-to-consumer storefront for beauty, wellness and lifestyle brands. It comes with a filterable product grid, a product spotlight with size and quantity pickers, a bundle offer, reviews and a slide-out cart that tracks quantities, subtotal and free-shipping progress. Product shots are drawn in CSS, so you can launch before your photos are ready.",
    category: "E-commerce",
    price: 1900,
    version: "1.0.0",
    updated: "2026-10-08",
    features: [
      "Slide-out cart with quantities and free-shipping bar",
      "Product grid with category filters and quick add",
      "Product spotlight with sizes and clinical results",
      "Routine bundle, reviews summary and newsletter offer",
      "Ready to wire to Stripe, Shopify or any backend",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    colors: ["#3f6b4f", "#e8b49a"],
  },
  {
    slug: "meridian",
    name: "Meridian",
    tagline: "A sharp website for consulting and professional firms",
    description:
      "Meridian is made for consultancies, agencies, law and finance firms that need to look established from the first scroll. A bold dark hero with live-looking metrics leads into services, case studies with results, a step-by-step approach, leadership, insights and a contact section with an enquiry form and office locations.",
    category: "Business",
    price: 1900,
    version: "1.0.0",
    updated: "2026-10-08",
    features: [
      "Dark hero with metric cards and grid background",
      "Numbered services list and case study cards",
      "Process timeline, testimonial and team grid",
      "Insights section for articles",
      "Contact form with topic chips and office list",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    colors: ["#0b1020", "#84cc16"],
  },
  {
    slug: "folio",
    name: "Folio",
    tagline: "A clean one-page portfolio for makers",
    description:
      "Folio is a calm, typographic portfolio for designers, developers and indie makers. Intro, selected work, experience and contact all fit on one page. It is free to download and use in personal and commercial projects.",
    category: "Portfolio",
    price: 0,
    version: "1.0.0",
    updated: "2026-10-08",
    features: [
      "Typographic intro section",
      "Selected work grid",
      "Experience timeline",
      "Contact section",
      "Free for personal and commercial use",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    colors: ["#f59e0b", "#ef4444"],
  },
];

export const categories: Category[] = ["SaaS", "AI", "E-commerce", "Business", "Dating", "Portfolio"];

export type Plan = {
  id: "all-access-yearly" | "all-access-lifetime";
  name: string;
  price: number;
  interval: "year" | null;
  blurb: string;
};

export const plans: Plan[] = [
  {
    id: "all-access-yearly",
    name: "All-Access",
    price: 7900,
    interval: "year",
    blurb: "Every template, including new releases, with updates while your pass is active.",
  },
  {
    id: "all-access-lifetime",
    name: "All-Access Lifetime",
    price: 14900,
    interval: null,
    blurb: "Founding offer: every template and every update, forever.",
  },
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}

export function getPlan(id: string) {
  return plans.find((p) => p.id === id);
}

export function formatPrice(cents: number) {
  if (cents === 0) return "Free";
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}
