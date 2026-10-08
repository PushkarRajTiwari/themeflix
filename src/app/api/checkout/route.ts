import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getPlan, getTemplate } from "@/lib/catalog";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const form = await request.formData();
  const item = String(form.get("item") ?? "");

  const template = getTemplate(item);
  const plan = getPlan(item);
  if ((!template || template.price === 0) && !plan) {
    return NextResponse.json({ error: "Unknown item" }, { status: 400 });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.redirect(`${origin}/checkout/unavailable`, 303);
  }

  const name = template ? `${template.name} template` : plan!.name;
  const amount = template ? template.price : plan!.price;
  const recurring = plan?.interval ? { interval: plan.interval } : undefined;

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: recurring ? "subscription" : "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: { name },
          ...(recurring && { recurring }),
          tax_behavior: "exclusive",
        },
      },
    ],
    metadata: { item },
    billing_address_collection: "required",
    automatic_tax: { enabled: process.env.STRIPE_AUTOMATIC_TAX === "true" },
    allow_promotion_codes: true,
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: template ? `${origin}/templates/${template.slug}` : `${origin}/pricing`,
  };
  if (!recurring) params.customer_creation = "always";

  const session = await stripe.checkout.sessions.create(params);
  return NextResponse.redirect(session.url!, 303);
}
