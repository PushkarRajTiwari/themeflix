import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Kindred: find someone who feels like home",
  description: "A matrimony and dating site template by Themeflix.",
};

/* ---------- Content: edit these arrays to make the site yours ---------- */

const stats = [
  { value: "2.4M", label: "verified members" },
  { value: "38,000", label: "couples married" },
  { value: "120+", label: "communities and faiths" },
  { value: "4.8", label: "average app rating" },
];

const steps = [
  {
    title: "Tell us who you are",
    body: "Build a profile in ten minutes: your story, your values, and what a good Sunday looks like to you.",
  },
  {
    title: "Meet your daily picks",
    body: "Every morning we hand-pick a few people who share your values, lifestyle and plans for the future.",
  },
  {
    title: "Talk, then meet safely",
    body: "Chat and video call inside Kindred first. Share your number only when it feels right.",
  },
];

const profiles = [
  {
    name: "Ananya",
    age: 29,
    job: "Product designer",
    city: "Austin, TX",
    match: 94,
    tags: ["Hiking", "Vegetarian", "Wants kids"],
    colors: ["#fb7185", "#f59e0b"],
  },
  {
    name: "Daniel",
    age: 32,
    job: "Pediatrician",
    city: "Chicago, IL",
    match: 91,
    tags: ["Jazz", "Cooking", "Family first"],
    colors: ["#8b5cf6", "#ec4899"],
  },
  {
    name: "Priya",
    age: 27,
    job: "Software engineer",
    city: "Seattle, WA",
    match: 89,
    tags: ["Travel", "Yoga", "Bookworm"],
    colors: ["#06b6d4", "#8b5cf6"],
  },
  {
    name: "Marcus",
    age: 30,
    job: "Architect",
    city: "Brooklyn, NY",
    match: 87,
    tags: ["Cycling", "Coffee", "Dog dad"],
    colors: ["#f97316", "#e11d48"],
  },
];

const stories = [
  {
    names: "Meera & Arjun",
    when: "Married June 2025",
    quote:
      "We were both about to give up on apps. Kindred matched us on a Tuesday, we video-called on Thursday, and both our families met within a month.",
  },
  {
    names: "Sofia & James",
    when: "Engaged March 2026",
    quote: "The daily picks actually felt picked. He was the third one, and the last one I needed.",
  },
  {
    names: "Aisha & Omar",
    when: "Married December 2025",
    quote: "Being able to filter by faith and family values saved us both so much time.",
  },
];

const safety = [
  { title: "ID-verified profiles", body: "Every member confirms a government ID and a live selfie before they can message." },
  { title: "Private photos", body: "Blur your photos until you choose to reveal them to someone you trust." },
  { title: "In-app video dates", body: "Meet face to face without sharing your number or social accounts." },
  { title: "Real people on call", body: "Our safety team reviews every report around the clock, 365 days a year." },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "Everything you need to start.",
    perks: ["Create a full profile", "5 daily picks", "Send 3 likes a day", "Basic filters"],
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    blurb: "For people who are ready to meet.",
    perks: ["Unlimited likes and messages", "See who liked you", "Advanced filters", "Video dates", "Priority in search"],
    featured: true,
  },
  {
    name: "Concierge",
    price: "$199",
    period: "per month",
    blurb: "A personal matchmaker on your side.",
    perks: ["Everything in Premium", "Your own matchmaker", "Hand-arranged introductions", "Family meeting support"],
  },
];

/* ---------- Small building blocks ---------- */

const icons = {
  heart: "M12 20.5s-7.5-4.6-9.4-9.1C1.3 8.2 3.3 4.8 6.7 4.8c2 0 3.5 1.1 4.3 2.6.8-1.5 2.3-2.6 4.3-2.6 3.4 0 5.4 3.4 4.1 6.6-1.9 4.5-9.4 9.1-9.4 9.1z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  shield: "M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3zM8.5 12l2.5 2.5 4.5-5",
  pin: "M12 21s-6-5.4-6-11a6 6 0 1112 0c0 5.6-6 11-6 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  close: "M6 6l12 12M18 6L6 18",
  lock: "M7 11V8a5 5 0 0110 0v3M5 11h14v10H5z",
  video: "M3 7h12v10H3zM15 10.5l6-3.5v10l-6-3.5",
  chat: "M4 5h16v11H9l-5 4z",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

function Icon({ name, className = "h-5 w-5" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={icons[name]} />
    </svg>
  );
}

/** Stand-in for a member photo. Swap for <Image src=... /> once you have real photos. */
function Portrait({ colors, className = "" }: { colors: string[]; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 80% at 20% 10%, ${colors[1]}cc, transparent 60%), linear-gradient(160deg, ${colors[0]}, ${colors[1]})`,
      }}
    >
      <svg viewBox="0 0 100 125" className="absolute inset-x-0 bottom-0 w-full text-white/35" aria-hidden>
        <circle cx="50" cy="52" r="21" fill="currentColor" />
        <path d="M8 125c0-27 19-43 42-43s42 16 42 43z" fill="currentColor" />
      </svg>
    </div>
  );
}

function Verified() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-sky-500 text-white" title="ID verified">
      <Icon name="check" className="h-3 w-3" />
    </span>
  );
}

/* ---------- Sections ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-rose-950/5 bg-[#fdf8f4]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className={`${serif.className} flex items-center gap-2 text-2xl font-semibold tracking-tight`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-lg shadow-rose-500/30">
            <Icon name="heart" className="h-4.5 w-4.5" />
          </span>
          Kindred
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#5b4650] md:flex">
          <a href="#how" className="hover:text-rose-600">How it works</a>
          <a href="#matches" className="hover:text-rose-600">Browse</a>
          <a href="#stories" className="hover:text-rose-600">Success stories</a>
          <a href="#membership" className="hover:text-rose-600">Membership</a>
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="hidden font-medium sm:block">Log in</a>
          <a href="#join" className="rounded-full bg-[#2a1520] px-5 py-2.5 font-medium text-white hover:bg-rose-600">
            Join free
          </a>
        </div>
      </div>
    </header>
  );
}

function SearchCard() {
  const field = "w-full rounded-xl border border-rose-950/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-rose-400";
  return (
    <form id="join" action="#" className="mt-10 grid gap-3 rounded-3xl border border-white bg-white/70 p-4 shadow-xl shadow-rose-900/5 backdrop-blur sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end">
      <label className="text-xs font-medium text-[#7a6570]">
        I&apos;m a
        <select className={`${field} mt-1.5 text-[#2a1520]`} defaultValue="Woman">
          <option>Woman</option>
          <option>Man</option>
          <option>Non-binary</option>
        </select>
      </label>
      <label className="text-xs font-medium text-[#7a6570]">
        Looking for
        <select className={`${field} mt-1.5 text-[#2a1520]`} defaultValue="Man">
          <option>Man</option>
          <option>Woman</option>
          <option>Anyone</option>
        </select>
      </label>
      <label className="text-xs font-medium text-[#7a6570]">
        Age
        <select className={`${field} mt-1.5 text-[#2a1520]`} defaultValue="27 to 34">
          <option>21 to 26</option>
          <option>27 to 34</option>
          <option>35 to 44</option>
          <option>45+</option>
        </select>
      </label>
      <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 hover:brightness-105">
        Find matches <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto h-[520px] w-full sm:h-[600px] max-w-md lg:max-w-none">
      <div className="absolute inset-8 -z-10 rounded-full bg-gradient-to-br from-rose-300/50 via-orange-200/50 to-violet-300/40 blur-3xl" />

      {/* Back card */}
      <div className="absolute top-6 right-0 w-56 rotate-6 overflow-hidden rounded-3xl bg-white p-2 shadow-2xl shadow-rose-900/10">
        <Portrait colors={["#8b5cf6", "#ec4899"]} className="aspect-[4/5] rounded-2xl" />
        <p className="px-2 pt-3 pb-1 text-sm font-semibold">Rohan, 31</p>
      </div>

      {/* Front card */}
      <div className="absolute top-14 left-0 w-72 -rotate-3 overflow-hidden rounded-[2rem] bg-white p-2.5 shadow-2xl shadow-rose-900/15 sm:left-6">
        <Portrait colors={["#fb7185", "#f59e0b"]} className="aspect-[4/5] rounded-[1.6rem]" />
        <div className="absolute top-6 left-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-600 backdrop-blur">
          94% match
        </div>
        <div className="px-3 pt-4 pb-2">
          <p className="flex items-center gap-2 text-lg font-semibold">
            Ananya, 29 <Verified />
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-[#7a6570]">
            <Icon name="pin" className="h-3.5 w-3.5" /> Product designer · Austin
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-rose-950/10 text-[#7a6570]">
              <Icon name="close" />
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-lg shadow-rose-500/40">
              <Icon name="heart" />
            </span>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute top-[330px] right-0 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-rose-900/10">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-rose-100 text-rose-600">
          <Icon name="heart" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold">It&apos;s a match!</p>
          <p className="text-xs text-[#7a6570]">You and Rohan liked each other</p>
        </div>
      </div>
      <div className="absolute top-[450px] right-4 z-10 hidden max-w-[15rem] sm:block rounded-2xl rounded-bl-md bg-[#2a1520] px-4 py-3 text-sm text-white shadow-xl">
        Coffee at that little place on South Congress this Saturday?
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_20%,#ffe4e6,transparent),radial-gradient(40%_40%_at_10%_80%,#ffedd5,transparent)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-14 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs font-medium text-rose-700">
            <Icon name="sparkle" className="h-3.5 w-3.5" /> Matrimony and dating for people who mean it
          </p>
          <h1 className={`${serif.className} mt-6 text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-7xl`}>
            Find someone who feels like{" "}
            <em className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text font-normal text-transparent">home.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5b4650]">
            Kindred matches you on what lasts: values, family, faith and the life you want to build. Every profile is
            verified by a real person.
          </p>
          <SearchCard />
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[["#fb7185", "#f59e0b"], ["#8b5cf6", "#ec4899"], ["#06b6d4", "#8b5cf6"], ["#f97316", "#e11d48"]].map((c) => (
                <Portrait key={c[0]} colors={c} className="h-10 w-10 rounded-full ring-3 ring-[#fdf8f4]" />
              ))}
            </div>
            <p className="text-sm text-[#5b4650]">
              <span className="font-semibold text-[#2a1520]">1,200 people</span> found their match this week
            </p>
          </div>
        </div>
        <HeroCollage />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-y-8 rounded-[2rem] bg-[#2a1520] px-8 py-10 text-white lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className={`${serif.className} text-4xl font-medium sm:text-5xl`}>{s.value}</p>
            <p className="mt-2 text-sm text-rose-100/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Modes() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-widest text-rose-600 uppercase">Two ways to meet</p>
        <h2 className={`${serif.className} mt-3 text-4xl font-medium tracking-tight sm:text-5xl`}>
          Looking for a life partner, or a great first date?
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 via-rose-50 to-white p-8 ring-1 ring-rose-950/5 sm:p-10">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">Matrimony</span>
          <h3 className={`${serif.className} mt-6 text-3xl font-medium`}>Ready for marriage</h3>
          <p className="mt-3 max-w-md text-[#5b4650]">
            Detailed profiles with education, family background and community. Invite a parent or sibling to help you
            shortlist.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {["Community and faith filters", "Family-managed profiles", "Horoscope matching", "Verified education and work"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-amber-600"><Icon name="check" className="h-4 w-4" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-100 via-rose-50 to-white p-8 ring-1 ring-rose-950/5 sm:p-10">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm">Dating</span>
          <h3 className={`${serif.className} mt-6 text-3xl font-medium`}>Open to something real</h3>
          <p className="mt-3 max-w-md text-[#5b4650]">
            Fewer, better matches every day. Prompts that spark real conversations and video dates when you&apos;re both ready.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {["Curated daily picks", "Conversation prompts", "In-app video dates", "Relationship goals up front"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-violet-600"><Icon name="check" className="h-4 w-4" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-28">
      <h2 className={`${serif.className} text-center text-4xl font-medium tracking-tight sm:text-5xl`}>
        Three steps to <em className="text-rose-600">your person</em>
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className={`${serif.className} text-7xl font-light text-rose-200 italic`}>0{i + 1}</span>
            <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-[#5b4650]">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Matches() {
  return (
    <section id="matches" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold tracking-widest text-rose-600 uppercase">Today&apos;s picks</p>
          <h2 className={`${serif.className} mt-3 text-4xl font-medium tracking-tight sm:text-5xl`}>Hand-picked for you</h2>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-rose-600 hover:gap-3">
          Browse all members <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((p) => (
          <li key={p.name} className="group overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-sm ring-1 ring-rose-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-900/10">
            <div className="relative">
              <Portrait colors={p.colors} className="aspect-[4/5] rounded-[1.4rem]" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-rose-600 backdrop-blur">
                {p.match}% match
              </span>
              <span className="absolute right-3 bottom-3 grid h-11 w-11 place-items-center rounded-full bg-white text-rose-500 shadow-lg transition group-hover:bg-rose-500 group-hover:text-white">
                <Icon name="heart" />
              </span>
            </div>
            <div className="p-3">
              <p className="flex items-center gap-2 text-lg font-semibold">
                {p.name}, {p.age} <Verified />
              </p>
              <p className="text-sm text-[#7a6570]">
                {p.job} · {p.city}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-rose-50 px-2.5 py-1 text-xs text-rose-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Stories() {
  const [main, ...rest] = stories;
  return (
    <section id="stories" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-28">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <figure className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-500 via-rose-500 to-orange-400 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="flex -space-x-4">
            <Portrait colors={["#fde68a", "#fb923c"]} className="h-16 w-16 rounded-full ring-4 ring-rose-400" />
            <Portrait colors={["#c4b5fd", "#f472b6"]} className="h-16 w-16 rounded-full ring-4 ring-rose-400" />
          </div>
          <blockquote className={`${serif.className} mt-8 text-2xl leading-snug font-normal sm:text-3xl`}>
            &ldquo;{main.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8">
            <p className="font-semibold">{main.names}</p>
            <p className="text-sm text-white/75">{main.when}</p>
          </figcaption>
        </figure>
        <div className="grid gap-6">
          {rest.map((s) => (
            <figure key={s.names} className="rounded-[2rem] bg-white p-8 ring-1 ring-rose-950/5">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.5 6.6-.8z" />
                  </svg>
                ))}
              </div>
              <blockquote className={`${serif.className} mt-4 text-xl leading-snug`}>&ldquo;{s.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{s.names}</span> <span className="text-[#7a6570]">· {s.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety() {
  const safetyIcons = ["shield", "lock", "video", "user"] as const;
  return (
    <section className="mt-28 bg-[#2a1520] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-rose-300 uppercase">Trust and safety</p>
          <h2 className={`${serif.className} mt-3 text-4xl font-medium tracking-tight sm:text-5xl`}>
            Real people. Real intentions. <em className="text-rose-300">No catfish.</em>
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {safety.map((s, i) => (
              <div key={s.title}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-rose-300">
                  <Icon name={safetyIcons[i]} />
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-rose-100/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-72">
          <div className="absolute -inset-10 -z-0 rounded-full bg-rose-500/30 blur-3xl" />
          <div className="relative rounded-[2.75rem] border-[10px] border-[#1a0c13] bg-[#fdf8f4] text-[#2a1520] shadow-2xl">
            <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-[#1a0c13]" />
            <div className="flex items-center gap-3 border-b border-rose-950/5 px-4 py-3">
              <Portrait colors={["#8b5cf6", "#ec4899"]} className="h-9 w-9 rounded-full" />
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  Rohan <Verified />
                </p>
                <p className="text-[11px] text-emerald-600">Online now</p>
              </div>
              <span className="ml-auto text-rose-500"><Icon name="video" /></span>
            </div>
            <div className="space-y-3 px-4 py-5 text-[13px] leading-snug">
              <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 shadow-sm">
                Your profile says you&apos;ve hiked all of Big Bend. I have so many questions.
              </p>
              <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-r from-rose-500 to-orange-400 px-3.5 py-2.5 text-white">
                Ha! Only most of it. Ask me over coffee?
              </p>
              <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 shadow-sm">
                Deal. Video call tonight first?
              </p>
              <div className="flex items-center gap-2 rounded-2xl bg-rose-50 px-3 py-2.5 text-[12px] text-rose-700">
                <Icon name="shield" className="h-4 w-4 shrink-0" />
                Your number stays private until you share it.
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-rose-950/5 px-4 py-3">
              <span className="flex-1 rounded-full bg-white px-3 py-2 text-xs text-[#7a6570] shadow-sm">Write a message</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-500 text-white">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section id="membership" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-28">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-widest text-rose-600 uppercase">Membership</p>
        <h2 className={`${serif.className} mt-3 text-4xl font-medium tracking-tight sm:text-5xl`}>Start free. Upgrade when it clicks.</h2>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-[2rem] p-8 ${
              p.featured
                ? "bg-[#2a1520] text-white shadow-2xl shadow-rose-900/30 lg:-my-4 lg:py-12"
                : "bg-white ring-1 ring-rose-950/5"
            }`}
          >
            {p.featured && (
              <span className="absolute top-8 right-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-3 py-1 text-xs font-semibold">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className={`mt-1 text-sm ${p.featured ? "text-rose-100/70" : "text-[#7a6570]"}`}>{p.blurb}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className={`${serif.className} text-5xl font-medium`}>{p.price}</span>
              <span className={`text-sm ${p.featured ? "text-rose-100/70" : "text-[#7a6570]"}`}>{p.period}</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <span className={p.featured ? "text-rose-300" : "text-rose-500"}>
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
            <a
              href="#join"
              className={`mt-10 block rounded-full py-3 text-center text-sm font-semibold ${
                p.featured
                  ? "bg-gradient-to-r from-rose-500 to-orange-400 text-white hover:brightness-105"
                  : "border border-rose-950/15 hover:bg-rose-50"
              }`}
            >
              {p.name === "Free" ? "Create your profile" : `Choose ${p.name}`}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-orange-50 to-violet-100 px-8 py-16 text-center sm:py-24">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-rose-300/40 blur-3xl" />
        <h2 className={`${serif.className} relative mx-auto max-w-2xl text-4xl font-medium tracking-tight text-balance sm:text-6xl`}>
          Your person is <em className="text-rose-600">already here.</em>
        </h2>
        <p className="relative mx-auto mt-5 max-w-md text-[#5b4650]">Join free in under ten minutes. No credit card, no swiping marathons.</p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <a href="#join" className="rounded-full bg-[#2a1520] px-8 py-4 font-semibold text-white hover:bg-rose-600">
            Create my profile
          </a>
          <a href="#" className="flex items-center gap-2 rounded-full border border-rose-950/15 bg-white/60 px-8 py-4 font-semibold hover:bg-white">
            <Icon name="chat" className="h-4 w-4" /> Talk to a matchmaker
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Kindred", links: ["About us", "Careers", "Press", "Contact"] },
    { title: "Members", links: ["Browse", "Success stories", "Membership", "Gift Premium"] },
    { title: "Safety", links: ["Safety tips", "Verification", "Report a profile", "Community rules"] },
  ];
  return (
    <footer className="border-t border-rose-950/5">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className={`${serif.className} text-2xl font-semibold`}>Kindred</p>
          <p className="mt-3 max-w-xs text-sm text-[#7a6570]">Matrimony and dating for people who are ready for something that lasts.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold">{c.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#7a6570]">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-rose-600">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-rose-950/5 py-6 text-center text-xs text-[#7a6570]">
        © 2026 Kindred Inc. · Privacy · Terms · Made with care in Austin
      </p>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fdf8f4] text-[#2a1520] antialiased selection:bg-rose-200">
      <Header />
      <Hero />
      <Stats />
      <Modes />
      <HowItWorks />
      <Matches />
      <Stories />
      <Safety />
      <Membership />
      <ClosingCta />
      <Footer />
    </div>
  );
}
