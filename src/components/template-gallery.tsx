"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, formatPrice, type Category, type Template } from "@/lib/catalog";
import { TemplateArt } from "./template-art";

type Filter = Category | "All" | "Free";

export function TemplateGallery({ templates }: { templates: Template[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      if (filter === "Free" && t.price !== 0) return false;
      if (filter !== "All" && filter !== "Free" && t.category !== filter) return false;
      if (!q) return true;
      return [t.name, t.tagline, t.category].some((s) => s.toLowerCase().includes(q));
    });
  }, [templates, filter, query]);

  const filters: Filter[] = ["All", ...categories, "Free"];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search templates"
          aria-label="Search templates"
          className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-accent sm:w-64"
        />
      </div>

      {shown.length === 0 ? (
        <p className="mt-16 text-center text-muted">No templates match that search yet.</p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/templates/${t.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <TemplateArt template={t} className="aspect-[4/3] transition group-hover:scale-[1.02]" />
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="mt-1 text-sm text-muted">{t.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-background px-3 py-1 text-sm font-medium">
                    {formatPrice(t.price)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
