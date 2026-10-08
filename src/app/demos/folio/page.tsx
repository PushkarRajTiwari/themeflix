import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Rivera: designer and developer",
  description: "A portfolio template by Themeflix.",
};

const work = [
  { title: "Harbor Bank", kind: "Mobile app redesign", year: "2026", color: "from-amber-200 to-orange-300" },
  { title: "Field Notes", kind: "Brand and website", year: "2025", color: "from-rose-200 to-red-300" },
  { title: "Orbit", kind: "Design system", year: "2025", color: "from-stone-200 to-amber-200" },
  { title: "Kiln Studio", kind: "E-commerce site", year: "2024", color: "from-orange-200 to-rose-200" },
];

const experience = [
  { years: "2024 to now", role: "Independent designer and developer", place: "Remote" },
  { years: "2021 to 2024", role: "Senior product designer", place: "Harbor Bank" },
  { years: "2018 to 2021", role: "Front-end developer", place: "Field & Co." },
];

function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 sm:pt-32">
      <p className="text-sm tracking-widest text-stone-500 uppercase">Alex Rivera</p>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-balance sm:text-6xl">
        I design and build calm, useful products for small teams.
      </h1>
      <p className="mt-8 max-w-xl text-lg text-stone-600">
        Ten years across product design and front-end engineering. Currently taking on two projects for early 2027.
      </p>
      <div className="mt-10 flex gap-6 text-sm">
        <a href="#work" className="border-b border-stone-900 pb-0.5">
          Selected work
        </a>
        <a href="#contact" className="border-b border-stone-300 pb-0.5 text-stone-600 hover:border-stone-900">
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm tracking-widest text-stone-500 uppercase">Selected work</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {work.map((w) => (
          <a key={w.title} href="#" className="group">
            <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${w.color} transition group-hover:scale-[0.98]`} />
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl">{w.title}</h3>
              <span className="text-sm text-stone-500">{w.year}</span>
            </div>
            <p className="text-sm text-stone-600">{w.kind}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-sm tracking-widest text-stone-500 uppercase">Experience</h2>
      <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
        {experience.map((e) => (
          <li key={e.role} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr_auto] sm:gap-6">
            <span className="text-sm text-stone-500">{e.years}</span>
            <span>{e.role}</span>
            <span className="text-stone-600">{e.place}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="font-serif text-3xl sm:text-5xl">Have a project in mind?</h2>
      <a href="mailto:hello@example.com" className="mt-6 inline-block border-b border-stone-900 text-lg">
        hello@example.com
      </a>
      <p className="mt-16 text-sm text-stone-500">© Alex Rivera. Built with Folio by Themeflix.</p>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900">
      <Intro />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}
