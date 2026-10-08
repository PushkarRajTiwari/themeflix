import type { Metadata } from "next";
import Link from "next/link";
import { BuyButton } from "@/components/buy-button";
import { formatPrice, plans, templates } from "@/lib/catalog";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  const single = templates.find((t) => t.price > 0)?.price ?? 1900;
  const [yearly, lifetime] = plans;

  return (
    <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
      <h1 className="text-center text-4xl font-semibold tracking-tight">Simple, low launch pricing</h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted">
        Buy one template, or get all of them. Every license covers unlimited personal and client projects.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">Single template</h2>
          <p className="mt-4 text-4xl font-semibold">{formatPrice(single)}</p>
          <p className="mt-1 text-sm text-muted">one-time</p>
          <p className="mt-4 text-sm text-muted">One template of your choice with a year of updates.</p>
          <Link href="/#templates" className="mt-6 inline-block rounded-full border border-border px-6 py-3 font-medium hover:bg-background">
            Pick a template
          </Link>
        </div>

        <div className="rounded-2xl border-2 border-accent bg-card p-6">
          <h2 className="font-semibold">{yearly.name}</h2>
          <p className="mt-4 text-4xl font-semibold">{formatPrice(yearly.price)}</p>
          <p className="mt-1 text-sm text-muted">per year</p>
          <p className="mt-4 text-sm text-muted">{yearly.blurb}</p>
          <div className="mt-6">
            <BuyButton item={yearly.id} label="Get All-Access" />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">{lifetime.name}</h2>
          <p className="mt-4 text-4xl font-semibold">{formatPrice(lifetime.price)}</p>
          <p className="mt-1 text-sm text-muted">one-time, limited</p>
          <p className="mt-4 text-sm text-muted">{lifetime.blurb}</p>
          <div className="mt-6">
            <BuyButton item={lifetime.id} label="Get Lifetime" />
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Prices in USD. Sales tax is added at checkout where it applies. Currently available to US customers.
      </p>
    </div>
  );
}
