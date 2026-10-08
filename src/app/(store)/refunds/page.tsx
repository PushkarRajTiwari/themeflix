import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Refunds" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refund policy" updated="October 8, 2026">
      <p>
        Every template has a full live preview, so please try it before you buy. Because templates are digital
        downloads, we handle refunds case by case.
      </p>
      <h2>We will refund you if</h2>
      <ul>
        <li>The template has a bug we cannot fix within a reasonable time.</li>
        <li>You were charged twice or by mistake.</li>
        <li>You ask within 14 days of purchase and have not downloaded the files.</li>
      </ul>
      <h2>All-Access</h2>
      <p>
        You can cancel a yearly pass at any time and keep access until the end of the paid year. Cancelling stops the
        next renewal; it does not refund the current year unless one of the reasons above applies.
      </p>
      <h2>How to ask</h2>
      <p>Email support@themeflix.com with your receipt and a short note. We reply within two business days.</p>
    </LegalPage>
  );
}
