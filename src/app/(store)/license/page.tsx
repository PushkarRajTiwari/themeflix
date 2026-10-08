import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "License" };

export default function LicensePage() {
  return (
    <LegalPage title="Template license" updated="October 8, 2026">
      <p>
        Buying a Themeflix template, or getting it free, gives you a non-exclusive, worldwide license to use it under
        these terms.
      </p>
      <h2>You can</h2>
      <ul>
        <li>Use the template to build unlimited websites and apps for yourself or for clients.</li>
        <li>Change the code and design however you like.</li>
        <li>Use it in commercial projects, including ones you charge for.</li>
      </ul>
      <h2>You cannot</h2>
      <ul>
        <li>Resell, share or give away the template itself, changed or unchanged, as a template, theme or starter kit.</li>
        <li>Publish the source code in a public repository in a way that lets others download the template.</li>
        <li>Claim the original template design as your own work in a template marketplace.</li>
      </ul>
      <h2>Updates</h2>
      <p>
        Single-template purchases include one year of updates. All-Access includes updates while the pass is active.
        All-Access Lifetime includes updates for as long as Themeflix sells the template.
      </p>
      <h2>Third-party assets</h2>
      <p>
        Templates use only open-source code and freely licensed fonts and icons. Placeholder text and images in demos
        are for preview only; replace them with your own content.
      </p>
    </LegalPage>
  );
}
