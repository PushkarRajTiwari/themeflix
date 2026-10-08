"use client";

import Link from "next/link";
import { useState } from "react";

const devices = [
  { id: "desktop", label: "Desktop", width: "100%" },
  { id: "tablet", label: "Tablet", width: "820px" },
  { id: "mobile", label: "Mobile", width: "390px" },
] as const;

type Props = {
  slug: string;
  name: string;
  priceLabel: string;
  free: boolean;
};

export function PreviewFrame({ slug, name, priceLabel, free }: Props) {
  const [device, setDevice] = useState<(typeof devices)[number]["id"]>("desktop");
  const width = devices.find((d) => d.id === device)!.width;

  return (
    <div className="flex h-dvh flex-col bg-zinc-100 dark:bg-zinc-900">
      <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border bg-background px-3 sm:px-4">
        <Link href={`/templates/${slug}`} className="flex min-w-0 items-center gap-2 text-sm">
          <span className="text-muted">←</span>
          <span className="truncate font-medium">{name}</span>
        </Link>

        <div className="hidden rounded-full border border-border p-1 sm:flex" role="group" aria-label="Preview size">
          {devices.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDevice(d.id)}
              aria-pressed={device === d.id}
              className={`rounded-full px-3 py-1 text-xs transition ${
                device === d.id ? "bg-foreground text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`/demos/${slug}`}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full px-3 py-1.5 text-sm text-muted hover:text-foreground md:inline"
          >
            Open in new tab
          </a>
          {free ? (
            <a
              href={`/api/download?slug=${slug}`}
              className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Download free
            </a>
          ) : (
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="item" value={slug} />
              <button className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground hover:opacity-90">
                Buy {priceLabel}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="flex flex-1 justify-center overflow-hidden p-0 sm:p-4">
        <iframe
          src={`/demos/${slug}`}
          title={`${name} live preview`}
          className="h-full rounded-none border-border bg-white shadow-xl transition-[width] duration-300 sm:rounded-xl sm:border"
          style={{ width, maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}
