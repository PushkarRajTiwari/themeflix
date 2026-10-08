import { NextResponse } from "next/server";
import { getTemplate } from "@/lib/catalog";
import { getPurchase } from "@/lib/stripe";
import { buildTemplateZip } from "@/lib/template-zip";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug") ?? "";
  const template = getTemplate(slug);
  if (!template) {
    return NextResponse.json({ error: "Unknown template" }, { status: 404 });
  }

  if (template.price > 0) {
    const purchase = await getPurchase(url.searchParams.get("session_id") ?? "");
    if (!purchase?.slugs.includes(slug)) {
      return NextResponse.json({ error: "No valid purchase found for this template" }, { status: 403 });
    }
  }

  const zip = await buildTemplateZip(template);
  return new Response(new Uint8Array(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="themeflix-${slug}-${template.version}.zip"`,
      "Cache-Control": "private, no-store",
    },
  });
}
