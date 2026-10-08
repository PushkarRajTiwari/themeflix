import Link from "next/link";
import { TemplateGallery } from "@/components/template-gallery";
import { formatPrice, plans, templates } from "@/lib/catalog";

const yearly = plans[0];

const points = [
  { title: "Live previews", body: "Click through every template on desktop, tablet and mobile before you spend a cent." },
  { title: "AI-ready code", body: "Clean components and an AGENTS.md file, so Claude or Cursor can extend the design without breaking it." },
  { title: "Yours to ship", body: "Plain Next.js and Tailwind. Host anywhere, use it for unlimited personal and client sites." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <p className="mx-auto w-fit rounded-full border border-border px-3 py-1 text-xs text-muted">
          New: {templates.length} templates at launch prices
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Website templates that look finished on day one.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted text-pretty">
          Modern Next.js and Tailwind templates for startups, online stores, dating apps and professional firms. Preview them live, buy once from{" "}
          {formatPrice(templates.find((t) => t.price > 0)?.price ?? 1900)}, or get everything for{" "}
          {formatPrice(yearly.price)} a year.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="#templates" className="rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90">
            Browse templates
          </Link>
          <Link href="/pricing" className="rounded-full border border-border px-6 py-3 font-medium hover:bg-card">
            See pricing
          </Link>
        </div>
      </section>

      <section id="templates" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Templates</h2>
        <div className="mt-6">
          <TemplateGallery templates={templates} />
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
