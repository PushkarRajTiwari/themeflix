// Regenerates gallery thumbnails in public/screens from the live demos.
// Usage: start the site (npm run build && npm start), then `node scripts/screenshots.mjs [baseUrl]`.
// Requires Playwright: npx playwright install chromium (or a global install).
import { chromium } from "playwright";
import { templates } from "../src/lib/catalog.ts";

const base = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 960 }, deviceScaleFactor: 1 });
for (const t of templates) {
  await page.goto(`${base}/demos/${t.slug}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `public/screens/${t.slug}.png` });
  console.log(`saved public/screens/${t.slug}.png`);
}
await browser.close();
