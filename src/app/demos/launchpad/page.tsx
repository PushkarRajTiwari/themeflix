import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launchpad: your AI research assistant",
  description: "An AI product launch page template by Themeflix.",
};

const useCases = [
  { title: "Research", body: "Summarize 50 papers into one brief with sources you can check." },
  { title: "Writing", body: "Draft reports in your team's voice, then refine them together." },
  { title: "Analysis", body: "Ask questions of spreadsheets in plain English and get charts back." },
  { title: "Meetings", body: "Turn a recording into decisions, owners and next steps." },
];

const stats = [
  { value: "12k", label: "people on the waitlist" },
  { value: "3.2x", label: "faster research in beta" },
  { value: "98%", label: "answers with citations" },
];

const changelog = [
  { date: "Oct 2", title: "Citations you can click", body: "Every claim now links to the exact passage it came from." },
  { date: "Sep 18", title: "Team spaces", body: "Share prompts, sources and results with your whole team." },
  { date: "Sep 4", title: "Spreadsheet mode", body: "Upload a CSV and ask questions of it directly." },
];

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <span className="flex items-center gap-2 text-lg font-semibold">
        <span className="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-lg shadow-fuchsia-500/40" />
        Launchpad
      </span>
      <a href="#waitlist" className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10">
        Join waitlist
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="waitlist" className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-fuchsia-600/30 blur-3xl" />
      <p className="mx-auto w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-fuchsia-200">
        Private beta opens November 2026
      </p>
      <h1 className="mx-auto mt-6 max-w-3xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-semibold tracking-tight text-balance text-transparent sm:text-6xl">
        The research assistant that shows its work.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
        Launchpad reads, compares and summarizes for you, and every answer comes with sources you can verify in one
        click.
      </p>
      <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
        <input
          type="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 outline-none placeholder:text-zinc-500 focus:border-fuchsia-400"
        />
        <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 font-medium shadow-lg shadow-fuchsia-600/30 hover:opacity-90">
          Get early access
        </button>
      </form>
    </section>
  );
}

function Demo() {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 text-left shadow-2xl shadow-fuchsia-950/50">
        <div className="rounded-xl bg-white/5 p-4 text-sm">
          <p className="text-xs text-zinc-500">You</p>
          <p className="mt-1">What do recent studies say about four-day work weeks and productivity?</p>
        </div>
        <div className="mt-3 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4 text-sm leading-relaxed">
          <p className="text-xs text-fuchsia-300">Launchpad</p>
          <p className="mt-1 text-zinc-200">
            Across 6 trials covering 2,900 employees, most companies kept or improved output while cutting hours.
            <sup className="ml-0.5 text-fuchsia-300">[1]</sup> Burnout scores fell in 4 of 6 trials.
            <sup className="ml-0.5 text-fuchsia-300">[2]</sup>
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {["[1] UK pilot report, 2023", "[2] Iceland trials review"].map((s) => (
              <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-zinc-400">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto mt-20 grid max-w-4xl gap-6 px-6 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-4xl font-semibold text-white">{s.value}</p>
          <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
        </div>
      ))}
    </section>
  );
}

function UseCases() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Built for real work</h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {useCases.map((u) => (
          <div key={u.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-fuchsia-500/40">
            <h3 className="font-semibold">{u.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{u.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Changelog() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24">
      <h2 className="text-2xl font-semibold tracking-tight">What&apos;s new</h2>
      <ol className="mt-8 space-y-8 border-l border-white/10 pl-6">
        {changelog.map((c) => (
          <li key={c.title} className="relative">
            <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
            <p className="text-xs text-zinc-500">{c.date}</p>
            <h3 className="mt-1 font-medium">{c.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{c.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
      © Launchpad Labs. Made for curious people.
    </footer>
  );
}

export default function Page() {
  return (
    <div className="isolate min-h-screen overflow-hidden bg-zinc-950 text-white">
      <Header />
      <Hero />
      <Demo />
      <Stats />
      <UseCases />
      <Changelog />
      <Footer />
    </div>
  );
}
