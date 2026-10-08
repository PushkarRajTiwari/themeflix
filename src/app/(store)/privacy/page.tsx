import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="October 8, 2026">
      <p>We collect as little as possible and never sell your data.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Your email and billing details when you buy, handled by Stripe. We never see your full card number.</li>
        <li>Basic, cookie-free usage statistics, such as which templates are viewed.</li>
      </ul>
      <h2>Why</h2>
      <p>To deliver your purchase, send receipts and product updates you asked for, and improve the store.</p>
      <h2>Who we share it with</h2>
      <p>Stripe for payments and our hosting provider. Each processes data only to provide its service.</p>
      <h2>Your choices</h2>
      <p>Email support@themeflix.com to see, correct or delete your data.</p>
    </LegalPage>
  );
}
