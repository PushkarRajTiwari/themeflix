import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Checkout unavailable" };

export default function CheckoutUnavailable() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Checkout opens soon</h1>
      <p className="mt-4 text-muted">
        Payments are not switched on yet. In the meantime you can preview every template and download the free ones.
      </p>
      <Link href="/#templates" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground">
        Browse templates
      </Link>
    </div>
  );
}
