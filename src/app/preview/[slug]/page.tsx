import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewFrame } from "@/components/preview-frame";
import { formatPrice, getTemplate, templates } from "@/lib/catalog";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/preview/[slug]">): Promise<Metadata> {
  const t = getTemplate((await params).slug);
  return t ? { title: `${t.name} live preview` } : {};
}

export default async function PreviewPage({ params }: PageProps<"/preview/[slug]">) {
  const t = getTemplate((await params).slug);
  if (!t) notFound();
  return <PreviewFrame slug={t.slug} name={t.name} priceLabel={formatPrice(t.price)} free={t.price === 0} />;
}
