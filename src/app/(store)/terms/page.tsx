import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" updated="October 8, 2026">
      <p>
        These terms apply when you use themeflix.com or buy a template. By buying or downloading a template you agree to
        them, along with the template license and refund policy.
      </p>
      <h2>Purchases</h2>
      <p>
        Payments are processed by Stripe. Prices are in US dollars and sales tax is added where required. All-Access
        yearly passes renew automatically until cancelled.
      </p>
      <h2>Your account and downloads</h2>
      <p>
        Keep your purchase link and receipt. Download links are personal; sharing them breaks the license and we may
        disable them.
      </p>
      <h2>No warranty</h2>
      <p>
        Templates are provided as is. We work hard to keep them bug free and up to date, but we are not liable for
        losses caused by using them.
      </p>
      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows the latest version.</p>
      <h2>Contact</h2>
      <p>Questions? Email support@themeflix.com.</p>
    </LegalPage>
  );
}
