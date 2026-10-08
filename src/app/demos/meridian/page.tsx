import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

const display = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meridian: strategy and growth advisory",
  description: "A professional services website template by Themeflix.",
};

/* ---------- Content: edit these arrays to make the site yours ---------- */

const metrics = [
  { value: "$2.1B", label: "client revenue influenced", bars: [30, 42, 38, 55, 61, 74, 92] },
  { value: "140+", label: "engagements delivered", bars: [20, 35, 48, 52, 66, 70, 84] },
  { value: "92%", label: "of clients come back", bars: [60, 72, 68, 80, 85, 88, 92] },
];

const clients = ["NORTHWIND", "Atlas & Co", "HALCYON", "Verdant", "Kestrel Bank", "Lumos Health"];

const services = [
  { title: "Growth strategy", body: "Find the markets, segments and offers worth betting on, backed by data your board will trust.", tags: ["Market sizing", "Pricing", "Go-to-market"] },
  { title: "Operating model", body: "Redesign teams, rituals and decision rights so strategy actually turns into execution.", tags: ["Org design", "OKRs", "Process"] },
  { title: "Digital transformation", body: "Modernize the customer journey and the systems behind it, one measurable release at a time.", tags: ["Product", "Data", "Platforms"] },
  { title: "Mergers and acquisitions", body: "From target screening to day-one integration, we keep value from leaking out of the deal.", tags: ["Due diligence", "Integration"] },
  { title: "AI readiness", body: "Pick the use cases that pay back, set guardrails, and get your teams shipping with confidence.", tags: ["Use cases", "Governance", "Enablement"] },
  { title: "Executive coaching", body: "One-to-one support for leaders stepping into bigger roles or navigating change.", tags: ["CEOs", "New leaders"] },
];

const cases = [
  {
    client: "Kestrel Bank",
    sector: "Financial services",
    title: "Relaunching small-business banking for a digital-first market",
    metric: "+38%",
    metricLabel: "new accounts in 9 months",
    from: "#1e3a8a",
    to: "#0ea5e9",
  },
  {
    client: "Lumos Health",
    sector: "Healthcare",
    title: "Cutting patient wait times across 40 clinics",
    metric: "-52%",
    metricLabel: "average wait time",
    from: "#065f46",
    to: "#a3e635",
  },
  {
    client: "Halcyon",
    sector: "Consumer",
    title: "Entering three new countries without new headcount",
    metric: "3.4x",
    metricLabel: "international revenue",
    from: "#7c2d12",
    to: "#f59e0b",
  },
];

const approach = [
  { title: "Listen", body: "Two weeks of interviews, data pulls and site visits before we recommend anything." },
  { title: "Frame", body: "A sharp problem statement and a short list of options, each with its trade-offs." },
  { title: "Build", body: "Small, senior teams working alongside yours, shipping changes every two weeks." },
  { title: "Hand over", body: "Playbooks, dashboards and coaching so the results last after we leave." },
];

const team = [
  { name: "Elena Marsh", role: "Managing Partner", initials: "EM", from: "#c6f24e", to: "#22d3ee" },
  { name: "David Okafor", role: "Partner, Strategy", initials: "DO", from: "#a78bfa", to: "#f472b6" },
  { name: "Hana Sato", role: "Partner, Digital", initials: "HS", from: "#fbbf24", to: "#f97316" },
  { name: "Ravi Menon", role: "Principal, AI", initials: "RM", from: "#34d399", to: "#3b82f6" },
];

const insights = [
  { tag: "Strategy", date: "Sep 30, 2026", title: "Why most growth plans fail in the second quarter", read: "6 min read" },
  { tag: "AI", date: "Sep 12, 2026", title: "A CFO's guide to measuring AI return on investment", read: "9 min read" },
  { tag: "Operations", date: "Aug 21, 2026", title: "The two-week operating rhythm that replaced our clients' annual plans", read: "5 min read" },
];

const offices = [
  { city: "New York", address: "120 Hudson Street, NY 10013" },
  { city: "London", address: "18 Finsbury Square, EC2A 1AH" },
  { city: "Singapore", address: "8 Marina View, 018960" },
];

/* ---------- Building blocks ---------- */

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#" className={`${display.className} flex items-center gap-2.5 text-xl font-semibold tracking-tight`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <circle cx="16" cy="16" r="14" fill="none" stroke={light ? "#fff" : "#0b1020"} strokeWidth="2" />
        <ellipse cx="16" cy="16" rx="6" ry="14" fill="none" stroke={light ? "#fff" : "#0b1020"} strokeWidth="2" />
        <circle cx="16" cy="16" r="3.5" fill="#c6f24e" />
      </svg>
      Meridian
    </a>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase ${dark ? "text-white/60" : "text-slate-500"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#c6f24e] ring-4 ring-[#c6f24e]/20" />
      {children}
    </p>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1020] text-white">
      {/* Background: grid, glow and meridian arcs */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-[#c6f24e]/15 blur-3xl" />
      <svg viewBox="0 0 600 600" className="absolute top-10 right-[-12rem] -z-10 hidden w-[44rem] text-white/10 lg:block" aria-hidden>
        {[280, 220, 160, 100, 40].map((rx) => (
          <ellipse key={rx} cx="300" cy="300" rx={rx} ry="280" fill="none" stroke="currentColor" />
        ))}
        <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" />
        <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" />
        <circle cx="460" cy="160" r="6" fill="#c6f24e" />
      </svg>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-white/70 backdrop-blur md:flex">
          {["Services", "Work", "Approach", "Team", "Insights"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full bg-[#c6f24e] px-5 py-2.5 text-sm font-semibold text-[#0b1020] hover:bg-white">
          Book a call
        </a>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28">
        <Eyebrow dark>Strategy and growth advisory</Eyebrow>
        <h1 className={`${display.className} mt-6 max-w-5xl text-5xl leading-[1.02] font-medium tracking-[-0.03em] text-balance sm:text-7xl lg:text-8xl`}>
          We help ambitious companies make their{" "}
          <span className="relative whitespace-nowrap text-[#c6f24e]">
            next big move.
            <svg viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-[#c6f24e]/50" preserveAspectRatio="none" aria-hidden>
              <path d="M2 9c60-6 180-8 296-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-white/65">
            Meridian is an independent advisory firm. Senior partners, small teams and work that shows up in your numbers
            within two quarters.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1020] hover:bg-[#c6f24e]">
              Start a conversation <Arrow />
            </a>
            <a href="#work" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
              See our work
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-end justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div>
                <p className={`${display.className} text-4xl font-medium tracking-tight`}>{m.value}</p>
                <p className="mt-1 text-sm text-white/55">{m.label}</p>
              </div>
              <div className="flex h-14 items-end gap-1">
                {m.bars.map((b, i) => (
                  <span
                    key={i}
                    className={`w-2 rounded-full ${i === m.bars.length - 1 ? "bg-[#c6f24e]" : "bg-white/20"}`}
                    style={{ height: `${b}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center">
        <p className="shrink-0 text-sm text-slate-500 lg:w-56">Trusted by leadership teams at</p>
        <div className="grid flex-1 grid-cols-2 gap-6 text-slate-400 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, i) => (
            <span
              key={c}
              className={`${display.className} text-lg ${["font-bold tracking-widest", "font-medium italic", "font-semibold tracking-[0.3em]", "font-medium", "font-semibold", "font-light tracking-wide"][i]}`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto grid max-w-7xl scroll-mt-10 gap-12 px-6 py-28 lg:grid-cols-[380px_1fr]">
      <div className="lg:sticky lg:top-10 lg:self-start">
        <Eyebrow>What we do</Eyebrow>
        <h2 className={`${display.className} mt-4 text-4xl font-medium tracking-tight sm:text-5xl`}>Six ways we move the needle.</h2>
        <p className="mt-5 text-slate-600">
          Every engagement is led by a partner and staffed by people who have run the thing they&apos;re advising on.
        </p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#c6f24e] pb-1 text-sm font-semibold">
          Talk to a partner <Arrow />
        </a>
      </div>
      <ol className="divide-y divide-slate-200 border-y border-slate-200">
        {services.map((s, i) => (
          <li key={s.title} className="group grid gap-4 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-start">
            <span className={`${display.className} text-sm text-slate-400`}>0{i + 1}</span>
            <div>
              <h3 className={`${display.className} text-2xl font-medium tracking-tight transition group-hover:translate-x-1`}>{s.title}</h3>
              <p className="mt-2 max-w-xl text-slate-600">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="hidden h-11 w-11 place-items-center rounded-full border border-slate-200 transition group-hover:border-[#0b1020] group-hover:bg-[#0b1020] group-hover:text-[#c6f24e] sm:grid">
              <Arrow />
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-10 bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className={`${display.className} mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl`}>
              Results our clients can put in a board deck.
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            All case studies <Arrow />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <a key={c.client} href="#" className="group flex flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/50">
              <div className="relative aspect-[16/11] overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}>
                <svg viewBox="0 0 400 275" className="absolute inset-0 h-full w-full text-white/20 transition duration-700 group-hover:scale-110" aria-hidden>
                  {i === 0 && [0, 1, 2, 3, 4, 5].map((k) => <circle key={k} cx="320" cy="60" r={40 + k * 45} fill="none" stroke="currentColor" />)}
                  {i === 1 && [0, 1, 2, 3, 4, 5, 6, 7].map((k) => <line key={k} x1={k * 60 - 60} y1="275" x2={k * 60 + 80} y2="0" stroke="currentColor" strokeWidth="18" />)}
                  {i === 2 && [0, 1, 2, 3, 4].map((k) => <rect key={k} x={40 + k * 30} y={40 + k * 19} width={320 - k * 60} height={195 - k * 38} rx="16" fill="none" stroke="currentColor" />)}
                </svg>
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                  <div>
                    <p className={`${display.className} text-5xl font-medium tracking-tight`}>{c.metric}</p>
                    <p className="text-sm text-white/80">{c.metricLabel}</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20 backdrop-blur transition group-hover:bg-white group-hover:text-[#0b1020]">
                    <Arrow />
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                  {c.client} · {c.sector}
                </p>
                <h3 className={`${display.className} mt-3 text-xl leading-snug font-medium`}>{c.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-7xl scroll-mt-10 px-6 py-28">
      <Eyebrow>How we work</Eyebrow>
      <h2 className={`${display.className} mt-4 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl`}>
        A clear path from first call to lasting change.
      </h2>
      <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        <span className="absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-[#0b1020] via-slate-300 to-slate-200 md:block" />
        {approach.map((a, i) => (
          <li key={a.title} className="relative">
            <span
              className={`${display.className} relative grid h-10 w-10 place-items-center rounded-full text-sm font-semibold ${
                i === 0 ? "bg-[#c6f24e] text-[#0b1020]" : "bg-[#0b1020] text-white"
              }`}
            >
              {i + 1}
            </span>
            <p className="mt-6 text-xs tracking-widest text-slate-500 uppercase">
              {["Weeks 1-2", "Weeks 3-4", "Months 2-5", "Month 6"][i]}
            </p>
            <h3 className={`${display.className} mt-1 text-2xl font-medium tracking-tight`}>{a.title}</h3>
            <p className="mt-2 text-slate-600">{a.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <figure className="relative overflow-hidden rounded-[2.5rem] bg-[#0b1020] px-8 py-16 text-white sm:px-16 sm:py-20">
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#c6f24e]/20 blur-3xl" />
        <svg viewBox="0 0 48 36" className="relative h-10 w-14 text-[#c6f24e]" aria-hidden>
          <path d="M0 36V20C0 8 7 1 19 0v7c-6 1-9 5-9 11h9v18zm29 0V20C29 8 36 1 48 0v7c-6 1-9 5-9 11h9v18z" fill="currentColor" />
        </svg>
        <blockquote className={`${display.className} relative mt-8 max-w-4xl text-2xl leading-snug font-normal tracking-tight sm:text-4xl`}>
          Meridian didn&apos;t hand us a slide deck and leave. They sat with our teams for six months, and our new business line
          is now a quarter of revenue.
        </blockquote>
        <figcaption className="relative mt-10 flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 font-semibold">JW</span>
          <span>
            <span className="block font-semibold">Jordan Wells</span>
            <span className="text-sm text-white/60">CEO, Kestrel Bank</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl scroll-mt-10 px-6 py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className={`${display.className} mt-4 text-4xl font-medium tracking-tight sm:text-5xl`}>Senior people, on every project.</h2>
        </div>
        <p className="max-w-sm text-slate-600">Our partners average 18 years in industry and consulting. You&apos;ll work with them directly.</p>
      </div>
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((p) => (
          <li key={p.name} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]" style={{ background: `linear-gradient(160deg, ${p.from}, ${p.to})` }}>
              {/* Swap for a headshot: <Image src="/team/elena.jpg" fill alt="" className="object-cover" /> */}
              <span className={`${display.className} absolute inset-0 grid place-items-center text-7xl font-medium tracking-tighter text-[#0b1020]/80 transition duration-500 group-hover:scale-110`}>
                {p.initials}
              </span>
              <span className="absolute right-4 bottom-4 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-xs font-bold text-[#0b1020] opacity-0 backdrop-blur transition group-hover:opacity-100">
                in
              </span>
            </div>
            <p className={`${display.className} mt-4 text-lg font-medium`}>{p.name}</p>
            <p className="text-sm text-slate-500">{p.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="scroll-mt-10 border-t border-slate-200 bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>Insights</Eyebrow>
        <h2 className={`${display.className} mt-4 text-4xl font-medium tracking-tight sm:text-5xl`}>Thinking from the field.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((a) => (
            <a key={a.title} href="#" className="group flex flex-col rounded-[2rem] bg-white p-7 ring-1 ring-slate-200 transition hover:ring-[#0b1020]">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="rounded-full bg-[#c6f24e]/30 px-3 py-1 font-medium text-[#3f5212]">{a.tag}</span>
                {a.date}
              </div>
              <h3 className={`${display.className} mt-8 flex-1 text-2xl leading-snug font-medium tracking-tight`}>{a.title}</h3>
              <div className="mt-10 flex items-center justify-between text-sm text-slate-500">
                {a.read}
                <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0b1020]">
                  <Arrow className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const field = "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#c6f24e]";
  return (
    <section id="contact" className="scroll-mt-10 bg-[#0b1020] text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2">
        <div>
          <Eyebrow dark>Contact</Eyebrow>
          <h2 className={`${display.className} mt-4 text-5xl font-medium tracking-tight sm:text-6xl`}>
            Let&apos;s talk about <span className="text-[#c6f24e]">what&apos;s next.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">
            Tell us a little about where you are. A partner will reply within one business day.
          </p>
          <div className="mt-12 space-y-1 text-lg">
            <a href="mailto:hello@meridian.example" className="block hover:text-[#c6f24e]">hello@meridian.example</a>
            <a href="tel:+12125550142" className="block text-white/60 hover:text-white">+1 (212) 555-0142</a>
          </div>
          <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {offices.map((o) => (
              <div key={o.city}>
                <p className="font-semibold">{o.city}</p>
                <p className="mt-1 text-sm text-white/50">{o.address}</p>
              </div>
            ))}
          </div>
        </div>

        <form action="#" className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={field} placeholder="Full name" aria-label="Full name" required />
            <input className={field} type="email" placeholder="Work email" aria-label="Work email" required />
            <input className={`${field} sm:col-span-2`} placeholder="Company" aria-label="Company" />
          </div>
          <fieldset className="mt-6">
            <legend className="text-sm text-white/60">What do you need help with?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Growth strategy", "Operations", "Digital", "M&A", "AI", "Something else"].map((t, i) => (
                <label key={t} className="cursor-pointer">
                  <input type="checkbox" defaultChecked={i === 0} className="peer sr-only" />
                  <span className="block rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition peer-checked:border-[#c6f24e] peer-checked:bg-[#c6f24e] peer-checked:text-[#0b1020] hover:border-white/40">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <textarea className={`${field} mt-6 h-32 resize-none`} placeholder="Tell us about your goals" aria-label="Message" />
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#c6f24e] py-4 text-sm font-semibold text-[#0b1020] hover:bg-white">
            Send message <Arrow />
          </button>
          <p className="mt-4 text-center text-xs text-white/40">We never share your details. Read our privacy policy.</p>
        </form>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav className="flex flex-wrap gap-6 text-sm text-white/60">
            {["Services", "Work", "Approach", "Team", "Insights", "Careers"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">
                {l}
              </a>
            ))}
          </nav>
          <p className="text-sm text-white/40">© 2026 Meridian Advisory LLC</p>
        </div>
      </footer>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#0b1020] antialiased selection:bg-[#c6f24e]">
      <Hero />
      <Clients />
      <Services />
      <Work />
      <Approach />
      <Testimonial />
      <Team />
      <Insights />
      <Contact />
    </div>
  );
}
