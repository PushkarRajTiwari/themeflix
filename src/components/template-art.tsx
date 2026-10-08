import Image from "next/image";
import type { Template } from "@/lib/catalog";

/** Gallery artwork: the demo's screenshot (public/screens) framed on the template's gradient. */
export function TemplateArt({ template, className = "" }: { template: Template; className?: string }) {
  const [a, b] = template.colors;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
    >
      <Image
        src={`/screens/${template.slug}.png`}
        alt={`${template.name} template screenshot`}
        width={1280}
        height={960}
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-x-6 top-6 w-[calc(100%-3rem)] rounded-t-lg shadow-2xl"
      />
    </div>
  );
}
