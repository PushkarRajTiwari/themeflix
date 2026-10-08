import "server-only";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { zipSync } from "fflate";
import type { Template } from "./catalog";

const root = process.cwd();
const kitDir = path.join(root, "template-kit");
const demosDir = path.join(root, "src", "app", "demos");

async function listFiles(dir: string, base = dir): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? listFiles(full, base) : [path.relative(base, full)];
    }),
  );
  return nested.flat();
}

/**
 * Packages a template as a standalone Next.js project: the shared starter kit plus the
 * template's own files from src/app/demos/<slug>, placed in src/app.
 */
export async function buildTemplateZip(template: Template) {
  const fill = (text: string) =>
    text
      .replaceAll("{{NAME}}", template.name)
      .replaceAll("{{TAGLINE}}", template.tagline)
      .replaceAll("{{VERSION}}", template.version);

  const folder = `themeflix-${template.slug}`;
  const files: Record<string, Uint8Array> = {};
  const encoder = new TextEncoder();

  for (const rel of await listFiles(kitDir)) {
    const name = rel === "gitignore" ? ".gitignore" : rel;
    files[`${folder}/${name.split(path.sep).join("/")}`] = encoder.encode(
      fill(await readFile(path.join(kitDir, rel), "utf8")),
    );
  }

  const demoDir = path.join(demosDir, template.slug);
  for (const rel of await listFiles(demoDir)) {
    files[`${folder}/src/app/${rel.split(path.sep).join("/")}`] = await readFile(path.join(demoDir, rel));
  }

  return zipSync(files, { level: 9 });
}
