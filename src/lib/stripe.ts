import "server-only";
import { createHash } from "node:crypto";
import Stripe from "stripe";
import { getPlan, templates } from "./catalog";

let client: Stripe | null | undefined;

/** Returns a Stripe client, or null when STRIPE_SECRET_KEY is not set. */
export function getStripe() {
  if (client === undefined) {
    const key = process.env.STRIPE_SECRET_KEY;
    client = key ? new Stripe(key) : null;
  }
  return client;
}

export type Purchase = {
  sessionId: string;
  email: string | null;
  item: string;
  slugs: string[];
  licenseKey: string;
};

/**
 * Looks up a Checkout Session and returns what it entitles the buyer to download,
 * or null when the session is unknown, unpaid, or its subscription has lapsed.
 */
export async function getPurchase(sessionId: string): Promise<Purchase | null> {
  const stripe = getStripe();
  if (!stripe || !sessionId.startsWith("cs_")) return null;

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["subscription"] });
  } catch {
    return null;
  }

  const item = session.metadata?.item ?? "";
  if (session.mode === "subscription") {
    const sub = session.subscription as Stripe.Subscription | null;
    if (!sub || !["active", "trialing"].includes(sub.status)) return null;
  } else if (session.payment_status !== "paid") {
    return null;
  }

  const slugs = getPlan(item)
    ? templates.map((t) => t.slug)
    : templates.some((t) => t.slug === item)
      ? [item]
      : [];

  return {
    sessionId: session.id,
    email: session.customer_details?.email ?? null,
    item,
    slugs,
    licenseKey: licenseKeyFor(session.id),
  };
}

function licenseKeyFor(sessionId: string) {
  const secret = process.env.LICENSE_SECRET ?? "themeflix";
  const hex = createHash("sha256").update(`${secret}:${sessionId}`).digest("hex").slice(0, 16).toUpperCase();
  return `TF-${hex.match(/.{4}/g)!.join("-")}`;
}
