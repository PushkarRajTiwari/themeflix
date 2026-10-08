import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyButton } from "@/components/buy-button";
import { TemplateArt } from "@/components/template-art";
import { formatPrice, getTemplate, plans, templates } from "@/lib/catalog";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/templates/[slug]">): Promise<Metadata> {
  const t = getTemplate((await params).slug);
  if (!t) return {};
  return { title: `${t.name}: ${t.tagline}`, description: t.description };
}

export default async function TemplatePage({ params }: PageProps<"/templates/[slug]">) {
  const t = getTemplate((await params).slug);
  if (!t) notFound();
  const yearly = plans[0];

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <Link href="/#templates" className="text-sm text-muted hover:text-foreground">
        ← All templates
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Link
          href={`/preview/${t.slug}`}
          className="group relative block overflow-hidden rounded-2xl border border-border"
        >
          <TemplateArt template={t} className="aspect-[4/3]" />
          <span className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/30">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-900 opacity-0 shadow transition group-hover:opacity-100">
              Open live preview
            </span>
          </span>
        </Link>

        <div>
          <p className="text-sm text-muted">{t.category}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{t.name}</h1>
          <p className="mt-2 text-lg text-muted">{t.tagline}</p>
          <p className="mt-6 text-3xl font-semibold">{formatPrice(t.price)}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/preview/${t.slug}`}
              className="rounded-full border border-border px-6 py-3 font-medium hover:bg-card"
            >
              Live preview
            </Link>
            {t.price === 0 ? (
              <a
                href={`/api/download?slug=${t.slug}`}
                className="rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90"
              >
                Download free
              </a>
            ) : (
              <BuyButton item={t.slug} label={`Buy for ${formatPrice(t.price)}`} />
            )}
          </div>
          {t.price > 0 && (
            <p className="mt-4 text-sm text-muted">
              Or get every template for {formatPrice(yearly.price)} a year with{" "}
              <Link href="/pricing" className="underline hover:text-foreground">
                All-Access
              </Link>
              .
            </p>
          )}

          <p className="mt-8 leading-relaxed">{t.description}</p>

          <h2 className="mt-8 font-semibold">What you get</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {t.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-accent">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-semibold">Built with</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.stack.map((s) => (
              <span key={s} className="rounded-full border border-border px-3 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            Version {t.version}, updated {t.updated}. Covered by the{" "}
            <Link href="/license" className="underline hover:text-foreground">
              Themeflix license
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
