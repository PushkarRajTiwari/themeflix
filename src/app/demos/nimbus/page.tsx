import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nimbus: ship your product faster",
  description: "A SaaS landing page template by Themeflix.",
};

const nav = ["Product", "Features", "Pricing", "FAQ"];

const logos = ["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Vandelay"];

const features = [
  { title: "Real-time sync", body: "Every change shows up for your whole team instantly, on every device." },
  { title: "Automations", body: "Turn repetitive work into one-click workflows with simple triggers." },
  { title: "Insights", body: "Dashboards that answer the questions your team actually asks." },
  { title: "Integrations", body: "Connect the 40+ tools you already use in a couple of clicks." },
  { title: "Enterprise security", body: "SSO, audit logs and role-based access on every plan." },
  { title: "Human support", body: "Talk to a real engineer within an hour, any day of the week." },
];

const tiers = [
  { name: "Starter", price: "$0", note: "forever", items: ["Up to 3 users", "1 workspace", "Community support"], featured: false },
  { name: "Team", price: "$12", note: "per user / month", items: ["Unlimited users", "Automations", "Priority support"], featured: true },
  { name: "Business", price: "$29", note: "per user / month", items: ["SSO and audit logs", "Advanced insights", "Dedicated manager"], featured: false },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes. Every paid plan starts with a 14-day trial, no card required." },
  { q: "Can I change plans later?", a: "Upgrade or downgrade any time; we prorate the difference automatically." },
  { q: "Where is my data stored?", a: "In encrypted, SOC 2 audited data centers in the US and EU." },
  { q: "Do you offer discounts?", a: "Nonprofits and early-stage startups get 50% off. Just ask." },
];

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <span className="flex items-center gap-2 text-lg font-semibold">
        <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400" />
        Nimbus
      </span>
      <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
        {nav.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-slate-900">
            {n}
          </a>
        ))}
      </nav>
      <a href="#pricing" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
        Start free
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-6 pt-16 text-center sm:pt-24">
      <p className="mx-auto w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
        New: automations 2.0 are here
      </p>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        The calm way to run your team&apos;s work.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
        Nimbus brings projects, docs and automations into one fast workspace, so your team spends less time
        coordinating and more time shipping.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a href="#pricing" className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500">
          Start your free trial
        </a>
        <a href="#features" className="rounded-full border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50">
          See how it works
        </a>
      </div>
      <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-indigo-900/10">
        <div className="flex gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="grid gap-3 rounded-xl bg-slate-50 p-4 sm:grid-cols-[180px_1fr]">
          <div className="hidden space-y-2 sm:block">
            {[70, 55, 80, 45, 60].map((w, i) => (
              <div key={i} className="h-3 rounded-full bg-slate-200" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["To do", "In progress", "Done"].map((col, i) => (
              <div key={col} className="rounded-lg bg-white p-3 text-left shadow-sm">
                <p className="text-xs font-medium text-slate-500">{col}</p>
                {Array.from({ length: 3 - i + 1 }).map((_, j) => (
                  <div key={j} className="mt-2 rounded-md border border-slate-100 p-2">
                    <div className="h-2 w-3/4 rounded-full bg-slate-200" />
                    <div className="mt-1.5 h-2 w-1/2 rounded-full bg-indigo-100" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-center text-sm text-slate-500">Trusted by fast-moving teams</p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-semibold text-slate-400">
        {logos.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Everything your team needs</h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">No plugins, no glue code. It all works together out of the box.</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Simple pricing</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl bg-white p-6 ${t.featured ? "ring-2 ring-indigo-600" : "border border-slate-200"}`}
            >
              <h3 className="font-semibold">{t.name}</h3>
              <p className="mt-4 text-4xl font-semibold">{t.price}</p>
              <p className="text-sm text-slate-500">{t.note}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.items.map((i) => (
                  <li key={i}>✓ {i}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block rounded-full px-4 py-2.5 text-center font-medium ${
                  t.featured ? "bg-indigo-600 text-white hover:bg-indigo-500" : "border border-slate-300 hover:bg-slate-50"
                }`}
              >
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold tracking-tight">Questions, answered</h2>
      <div className="mt-10 divide-y divide-slate-200">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer list-none font-medium">
              {f.q}
              <span className="float-right text-slate-400 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to get your week back?</h2>
        <p className="mx-auto mt-4 max-w-md text-indigo-100">Join 4,000 teams who moved their work to Nimbus.</p>
        <a href="#pricing" className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-indigo-700 hover:bg-indigo-50">
          Start free
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      © Nimbus Inc. All rights reserved.
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
