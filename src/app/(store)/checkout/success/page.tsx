import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getTemplate } from "@/lib/catalog";
import { getPurchase } from "@/lib/stripe";

export const metadata: Metadata = { title: "Thanks for your purchase", robots: { index: false } };

export default function SuccessPage({ searchParams }: PageProps<"/checkout/success">) {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-20 sm:px-6">
      <Suspense fallback={<p className="text-center text-muted">Confirming your payment…</p>}>
        <Purchase searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function Purchase({ searchParams }: { searchParams: PageProps<"/checkout/success">["searchParams"] }) {
  const raw = (await searchParams).session_id;
  const sessionId = typeof raw === "string" ? raw : "";
  const purchase = sessionId ? await getPurchase(sessionId) : null;

  if (!purchase) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">We could not confirm that purchase</h1>
        <p className="mt-4 text-muted">
          If you were charged, email support@themeflix.com with your receipt and we will sort it out quickly.
        </p>
      </div>
    );
  }

  const owned = purchase.slugs.map((s) => getTemplate(s)!).filter(Boolean);

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold tracking-tight">You&apos;re all set</h1>
      <p className="mt-4 text-center text-muted">
        {purchase.email ? `A receipt is on its way to ${purchase.email}. ` : ""}Bookmark this page: it is your download
        link.
      </p>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <p className="text-sm text-muted">License key</p>
        <p className="mt-1 font-mono text-lg">{purchase.licenseKey}</p>
      </div>

      <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
        {owned.map((t) => (
          <li key={t.slug} className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-muted">Version {t.version}</p>
            </div>
            <a
              href={`/api/download?slug=${t.slug}&session_id=${purchase.sessionId}`}
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Download
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-sm text-muted">
        Read the{" "}
        <Link href="/license" className="underline">
          license
        </Link>{" "}
        for what you can do with your templates.
      </p>
    </div>
  );
}
