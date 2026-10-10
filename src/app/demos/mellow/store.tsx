"use client";

import { useMemo, useState } from "react";

/* ---------- Catalog: replace with your own products or fetch from your commerce backend ---------- */

type Shape = "dropper" | "jar" | "tube" | "pump";

type Product = {
  id: string;
  name: string;
  blurb: string;
  type: "Serums" | "Moisturizers" | "Cleansers";
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge?: string;
  shape: Shape;
  /** Bottle color and tile background. */
  color: string;
  tile: string;
};

const products: Product[] = [
  {
    id: "barrier-serum",
    name: "Barrier Serum",
    blurb: "Ceramides + niacinamide",
    type: "Serums",
    price: 34,
    rating: 4.9,
    reviews: 3210,
    badge: "New",
    shape: "dropper",
    color: "#e8b49a",
    tile: "#f6e4d8",
  },
  {
    id: "cloud-cream",
    name: "Cloud Cream",
    blurb: "Whipped daily moisturizer",
    type: "Moisturizers",
    price: 38,
    rating: 4.8,
    reviews: 5120,
    badge: "Bestseller",
    shape: "jar",
    color: "#c9d6c4",
    tile: "#e5ece1",
  },
  {
    id: "soft-cleanse",
    name: "Soft Cleanse",
    blurb: "Low-foam gel cleanser",
    type: "Cleansers",
    price: 22,
    compareAt: 28,
    rating: 4.7,
    reviews: 2044,
    badge: "Sale",
    shape: "tube",
    color: "#d9cfe8",
    tile: "#ece7f3",
  },
  {
    id: "glow-drops",
    name: "Glow Drops",
    blurb: "Vitamin C 15% brightener",
    type: "Serums",
    price: 42,
    rating: 4.8,
    reviews: 1873,
    shape: "dropper",
    color: "#f2c66d",
    tile: "#f8ecd0",
  },
  {
    id: "body-milk",
    name: "Body Milk",
    blurb: "Oat + shea body lotion",
    type: "Moisturizers",
    price: 26,
    rating: 4.9,
    reviews: 988,
    shape: "pump",
    color: "#ead9c6",
    tile: "#f3ebe1",
  },
  {
    id: "night-balm",
    name: "Night Balm",
    blurb: "Overnight repair balm",
    type: "Moisturizers",
    price: 44,
    rating: 4.8,
    reviews: 1402,
    shape: "jar",
    color: "#b9a6d6",
    tile: "#e7e0f1",
  },
  {
    id: "milky-wash",
    name: "Milky Wash",
    blurb: "Cream-to-milk cleanser",
    type: "Cleansers",
    price: 24,
    rating: 4.6,
    reviews: 760,
    shape: "pump",
    color: "#cfe0e6",
    tile: "#e3edf0",
  },
  {
    id: "calm-gel",
    name: "Calm Gel",
    blurb: "Centella soothing gel",
    type: "Serums",
    price: 30,
    rating: 4.7,
    reviews: 1290,
    shape: "tube",
    color: "#a9c7a4",
    tile: "#e1ecdd",
  },
];

const concerns: { title: string; body: string; tile: string; shape: Shape; color: string }[] = [
  { title: "Hydration", body: "For tight, thirsty skin", tile: "from-sky-100 to-sky-200/60", shape: "pump", color: "#cfe0e6" },
  { title: "Calm & redness", body: "For sensitive skin", tile: "from-emerald-100 to-emerald-200/60", shape: "tube", color: "#a9c7a4" },
  { title: "Dull skin", body: "For a brighter glow", tile: "from-amber-100 to-amber-200/60", shape: "dropper", color: "#f2c66d" },
  { title: "Breakouts", body: "For clearer pores", tile: "from-violet-100 to-violet-200/60", shape: "jar", color: "#b9a6d6" },
];

const reviews = [
  {
    name: "Jasmine R.",
    product: "Barrier Serum",
    title: "My skin finally stopped stinging",
    body: "Three weeks in and the redness around my nose is basically gone. It sinks in fast and plays nicely with sunscreen.",
  },
  {
    name: "Chris T.",
    product: "Cloud Cream",
    title: "Like a glass of water for my face",
    body: "Light enough for summer, rich enough for Chicago winters. The jar lasts forever, too.",
  },
  {
    name: "Maya L.",
    product: "Routine bundle",
    title: "Simplest routine I've ever had",
    body: "Three steps, two minutes, and my skin has never looked this even. I've already reordered twice.",
  },
];

const FREE_SHIPPING = 60;

const money = (n: number) => `$${n.toFixed(n % 1 === 0 ? 0 : 2)}`;

/* ---------- Building blocks ---------- */

const icons = {
  bag: "M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 016 0v2",
  search: "M11 17a6 6 0 100-12 6 6 0 000 12zM20 20l-4.5-4.5",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7",
  close: "M6 6l12 12M18 6L6 18",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  arrow: "M5 12h14M13 6l6 6-6 6",
  truck: "M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z",
  refresh: "M4 12a8 8 0 0114-5.3L20 8M20 4v4h-4M20 12a8 8 0 01-14 5.3L4 16M4 20v-4h4",
  leaf: "M5 19c0-8 5-13 14-14 0 9-5 14-13 14M5 19l7-7",
  recycle: "M7 19H4l3-5M17 19h3l-3-5M9 5l3-2 3 2M8 12l-2 4M16 12l2 4M10 19h4",
  check: "M5 12.5l4.5 4.5L19 7.5",
};

function Icon({ name, className = "h-5 w-5" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={icons[name]} />
    </svg>
  );
}

function Stars({ rating, className = "h-3.5 w-3.5" }: { rating: number; className?: string }) {
  return (
    <span className="flex text-[#1c1917]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`${className} ${i < Math.round(rating) ? "fill-current" : "fill-stone-300"}`} aria-hidden>
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.5 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

const glass = "linear-gradient(90deg, rgba(255,255,255,.45), rgba(255,255,255,0) 35%, rgba(0,0,0,0) 70%, rgba(0,0,0,.1))";

/**
 * Product packshot drawn in CSS so the template ships with no stock photos.
 * Replace with <Image src="/products/...png" /> when you have real photography.
 */
function Packshot({ shape, color, name, className = "" }: { shape: Shape; color: string; name: string; className?: string }) {
  const body = { background: `${glass}, ${color}` };
  const label = (
    <div className="absolute inset-x-[12%] top-1/2 -translate-y-1/2 text-center leading-none text-[#1c1917]/80">
      <p className="font-semibold tracking-tight" style={{ fontSize: "4.2cqw" }}>mellow.</p>
      <p className="mt-[0.6cqw] tracking-wide uppercase" style={{ fontSize: "2.1cqw" }}>{name}</p>
    </div>
  );
  return (
    <div
      className={`@container flex flex-col items-center justify-end pb-[14%] ${className.includes("absolute") ? "" : "relative"} ${className}`}
    >
      {shape === "dropper" && (
        <>
          <div className="aspect-[1/1.1] w-[13%] rounded-t-full bg-[#2b2622]" />
          <div className="aspect-[3/1] w-[18%] bg-[#c9a66b]" />
          <div className="relative aspect-[1/1.3] w-[32%] rounded-[16%] shadow-[inset_0_-10px_20px_rgba(0,0,0,.08)]" style={body}>
            {label}
          </div>
        </>
      )}
      {shape === "jar" && (
        <>
          <div className="aspect-[5/1.1] w-[50%] rounded-t-[14%] rounded-b-sm bg-[#f8f5f0] shadow-[inset_0_-4px_6px_rgba(0,0,0,.08)]" />
          <div className="relative aspect-[5/3] w-[52%] rounded-t-sm rounded-b-[24%] shadow-[inset_0_-12px_20px_rgba(0,0,0,.08)]" style={body}>
            {label}
          </div>
        </>
      )}
      {shape === "tube" && (
        <>
          <div className="aspect-[6/1] w-[30%] rounded-sm" style={{ background: color, filter: "brightness(.93)" }} />
          <div className="relative aspect-[1/2.2] w-[26%] rounded-b-[30%] [clip-path:polygon(0_0,100%_0,92%_100%,8%_100%)]" style={body}>
            <div className="absolute inset-0 rotate-180">{label}</div>
          </div>
          <div className="aspect-[2/1] w-[20%] rounded-b-lg bg-[#2b2622]" />
        </>
      )}
      {shape === "pump" && (
        <>
          <div className="flex w-[30%] items-end">
            <div className="aspect-[3/1] w-1/2 rounded-l-full bg-[#2b2622]" />
            <div className="aspect-[1/1.2] w-1/3 rounded-t-md bg-[#2b2622]" />
          </div>
          <div className="aspect-[1/1.6] w-[5%] bg-[#2b2622]" />
          <div className="aspect-[3/1] w-[16%] rounded-t-md bg-[#2b2622]" />
          <div className="relative aspect-[1/1.75] w-[30%] rounded-[18%] shadow-[inset_0_-12px_20px_rgba(0,0,0,.08)]" style={body}>
            {label}
          </div>
        </>
      )}
      <div className="absolute bottom-[11%] -z-0 h-[4%] w-[46%] rounded-[50%] bg-black/15 blur-md" />
    </div>
  );
}

/* ---------- Store ---------- */

type CartLine = { id: string; qty: number };

export function Store({ serif }: { serif: string }) {
  const [cart, setCart] = useState<CartLine[]>([{ id: "cloud-cream", qty: 1 }]);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"All" | Product["type"]>("All");

  const add = (id: string, qty = 1) => {
    setCart((c) => {
      const line = c.find((l) => l.id === id);
      return line ? c.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l)) : [...c, { id, qty }];
    });
    setOpen(true);
  };
  const change = (id: string, delta: number) =>
    setCart((c) => c.map((l) => (l.id === id ? { ...l, qty: l.qty + delta } : l)).filter((l) => l.qty > 0));

  const lines = cart.map((l) => ({ ...l, product: products.find((p) => p.id === l.id)! }));
  const count = cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * l.product.price, 0);

  const shown = useMemo(() => (tab === "All" ? products : products.filter((p) => p.type === tab)), [tab]);

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1c1917] antialiased">
      <p className="bg-[#1c1917] px-4 py-2.5 text-center text-xs tracking-wide text-stone-200">
        Free US shipping over {money(FREE_SHIPPING)} · 30-day happy-skin guarantee
      </p>

      <Header serif={serif} count={count} onCart={() => setOpen(true)} />
      <Hero serif={serif} onAdd={() => add("barrier-serum")} />
      <Press />

      {/* Shop by concern */}
      <section className="mx-auto max-w-7xl px-6 pt-24">
        <h2 className={`${serif} text-4xl sm:text-5xl`}>Shop by concern</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {concerns.map((c) => (
            <a key={c.title} href="#shop" className={`group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br p-5 sm:aspect-[5/4] sm:p-6 ${c.tile}`}>
              <Packshot shape={c.shape} color={c.color} name="" className="absolute -right-[12%] -bottom-[18%] aspect-square w-[75%] max-sm:top-[-6%] max-sm:right-[-4%] max-sm:bottom-auto max-sm:w-[85%] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3" />
              <span className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-white/70 max-sm:hidden transition group-hover:bg-[#1c1917] group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
              <h3 className={`${serif} relative text-2xl sm:text-3xl`}>{c.title}</h3>
              <p className="relative text-sm text-stone-600">{c.body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section id="shop" className="mx-auto max-w-7xl scroll-mt-20 px-6 pt-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${serif} text-4xl sm:text-5xl`}>
            The <em>bestsellers</em>
          </h2>
          <div className="flex flex-wrap gap-2">
            {(["All", "Serums", "Moisturizers", "Cleansers"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={tab === t}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  tab === t ? "bg-[#1c1917] text-white" : "bg-white text-stone-600 hover:text-[#1c1917]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {shown.map((p) => (
            <li key={p.id} className="group">
              <div className="relative overflow-hidden rounded-3xl" style={{ background: p.tile }}>
                <Packshot shape={p.shape} color={p.color} name={p.name} className="aspect-[4/5] transition duration-500 group-hover:scale-105" />
                {p.badge && (
                  <span
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium ${
                      p.badge === "Sale" ? "bg-[#c2410c] text-white" : "bg-white text-[#1c1917]"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => add(p.id)}
                  aria-label={`Add ${p.name} to bag`}
                  className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-[#1c1917] text-sm font-medium text-white transition hover:bg-[#3f6b4f] lg:inset-x-4 lg:bottom-4 lg:h-auto lg:w-auto lg:translate-y-16 lg:py-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                >
                  <Icon name="plus" className="h-4 w-4" /> <span className="hidden lg:inline">Add to bag</span>
                </button>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-stone-500">{p.blurb}</p>
                </div>
                <p className="text-right font-medium">
                  {money(p.price)}
                  {p.compareAt && <span className="block text-sm font-normal text-stone-400 line-through">{money(p.compareAt)}</span>}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-stone-500">
                <Stars rating={p.rating} className="h-3 w-3" /> {p.rating} ({p.reviews.toLocaleString("en-US")})
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Spotlight serif={serif} onAdd={(qty) => add("barrier-serum", qty)} />
      <Routine serif={serif} onAdd={() => ["soft-cleanse", "barrier-serum", "cloud-cream"].forEach((id) => add(id))} />
      <Reviews serif={serif} />
      <Perks />
      <Newsletter serif={serif} />
      <Footer serif={serif} />

      <CartDrawer
        serif={serif}
        open={open}
        onClose={() => setOpen(false)}
        lines={lines}
        subtotal={subtotal}
        onChange={change}
      />
    </div>
  );
}

function Header({ serif, count, onCart }: { serif: string; count: number; onCart: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-900/5 bg-[#f6f3ee]/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <nav className="hidden gap-7 text-sm md:flex">
          <a href="#shop" className="hover:text-[#3f6b4f]">Shop all</a>
          <a href="#routine" className="hover:text-[#3f6b4f]">Routines</a>
          <a href="#reviews" className="hover:text-[#3f6b4f]">Reviews</a>
          <a href="#" className="hover:text-[#3f6b4f]">Our story</a>
        </nav>
        <a href="#" className={`${serif} col-start-1 text-3xl md:col-start-2`}>
          mellow.
        </a>
        <div className="col-start-3 flex items-center justify-end gap-1">
          <button type="button" aria-label="Search" className="hidden rounded-full p-2.5 hover:bg-white sm:block">
            <Icon name="search" />
          </button>
          <button type="button" aria-label="Account" className="hidden rounded-full p-2.5 hover:bg-white sm:block">
            <Icon name="user" />
          </button>
          <button type="button" onClick={onCart} aria-label={`Open bag, ${count} items`} className="relative rounded-full p-2.5 hover:bg-white">
            <Icon name="bag" />
            {count > 0 && (
              <span className="absolute top-0.5 right-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-[#3f6b4f] px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ serif, onAdd }: { serif: string; onAdd: () => void }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-10 pb-16 lg:grid-cols-2 lg:pt-14">
      <div className="lg:pr-8">
        <p className="flex items-center gap-2 text-sm text-stone-600">
          <Stars rating={5} /> <span><b className="font-semibold text-[#1c1917]">4.9</b> from 12,400+ reviews</span>
        </p>
        <h1 className={`${serif} mt-6 text-6xl leading-[0.95] tracking-tight sm:text-8xl`}>
          Skincare that keeps it <em className="text-[#3f6b4f]">simple.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
          Three steps, clinically proven ingredients and nothing your skin doesn&apos;t need. Dermatologist-tested, fragrance-free,
          made in California.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#shop" className="flex items-center gap-2 rounded-full bg-[#1c1917] px-7 py-4 text-sm font-medium text-white hover:bg-[#3f6b4f]">
            Shop bestsellers <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a href="#routine" className="rounded-full border border-stone-900/15 px-7 py-4 text-sm font-medium hover:bg-white">
            Build my routine
          </a>
        </div>
        <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-stone-900/10 pt-6">
          {[
            ["97%", "saw softer skin"],
            ["0", "added fragrance"],
            ["100%", "recyclable packs"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className={`${serif} text-3xl`}>{v}</dt>
              <dd className="text-xs text-stone-500">{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2.5rem] bg-[radial-gradient(80%_70%_at_30%_20%,#fde7d7,transparent),radial-gradient(70%_60%_at_80%_90%,#d5e3cf,transparent)] bg-[#efe6dc]">
          <div className="absolute top-[12%] left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full bg-white/50 blur-2xl" />
          <Packshot shape="jar" color="#c9d6c4" name="Cloud Cream" className="absolute bottom-[2%] left-[-8%] aspect-square w-[60%]" />
          <Packshot shape="pump" color="#ead9c6" name="Body Milk" className="absolute right-[-6%] bottom-[4%] aspect-square w-[58%]" />
          <Packshot shape="dropper" color="#e8b49a" name="Barrier Serum" className="absolute bottom-[-2%] left-1/2 aspect-square w-[72%] -translate-x-1/2" />
        </div>

        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium shadow-lg backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#3f6b4f]" /> 3% ceramides · 5% niacinamide
        </div>
        <div className="absolute right-4 bottom-[-1.5rem] flex items-center gap-4 rounded-2xl bg-white p-3 pr-4 shadow-xl sm:top-24 sm:right-6 sm:bottom-auto">
          <div className="h-14 w-12 overflow-hidden rounded-xl bg-[#f6e4d8]">
            <Packshot shape="dropper" color="#e8b49a" name="" className="h-full w-full scale-150" />
          </div>
          <div>
            <p className="text-xs text-stone-500">New</p>
            <p className="text-sm font-semibold">Barrier Serum · $34</p>
          </div>
          <button type="button" onClick={onAdd} aria-label="Add Barrier Serum to bag" className="grid h-9 w-9 place-items-center rounded-full bg-[#1c1917] text-white hover:bg-[#3f6b4f]">
            <Icon name="plus" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Press() {
  const names = ["The Glow Edit", "BARE", "Northside Daily", "Well + Co", "STUDIO SKIN", "Clean Beauty Review"];
  return (
    <section className="border-y border-stone-900/10 bg-white/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-7 text-stone-400">
        <span className="text-xs tracking-widest uppercase">As featured in</span>
        {names.map((n, i) => (
          <span key={n} className={`text-lg ${i % 2 ? "font-semibold tracking-[0.2em]" : "font-serif italic"}`}>
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}

function Spotlight({ serif, onAdd }: { serif: string; onAdd: (qty: number) => void }) {
  const [size, setSize] = useState("30 ml");
  const [qty, setQty] = useState(1);
  const results = [
    { label: "More hydration after 2 weeks", value: 68 },
    { label: "Less visible redness after 4 weeks", value: 54 },
    { label: "Said their skin felt calmer", value: 92 },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 pt-28">
      <div className="grid overflow-hidden rounded-[2.5rem] bg-white lg:grid-cols-2">
        <div className="relative bg-gradient-to-br from-[#f6e4d8] to-[#efd2c0]">
          <Packshot shape="dropper" color="#e8b49a" name="Barrier Serum" className="mx-auto aspect-square w-full max-w-lg" />
          <span className="absolute top-6 left-6 rounded-full bg-white px-3 py-1 text-xs font-medium">Product of the month</span>
        </div>
        <div className="p-8 sm:p-12">
          <p className="text-sm text-stone-500">Serum · For dry and sensitive skin</p>
          <h2 className={`${serif} mt-2 text-5xl`}>Barrier Serum</h2>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Stars rating={4.9} /> 4.9 · 3,210 reviews
          </div>
          <p className="mt-6 leading-relaxed text-stone-600">
            A silky, water-light serum that rebuilds your skin barrier overnight. Three ceramides lock in moisture while
            niacinamide calms redness and refines pores.
          </p>

          <div className="mt-8 space-y-4">
            {results.map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-sm">
                  <span>{r.label}</span>
                  <span className="font-semibold">{r.value}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#e8b49a] to-[#3f6b4f]" style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs text-stone-400">Independent clinical study, 64 participants.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["15 ml", "30 ml", "50 ml"].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`rounded-full border px-4 py-2 text-sm ${size === s ? "border-[#1c1917] bg-[#1c1917] text-white" : "border-stone-200 hover:border-stone-400"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <div className="flex items-center rounded-full border border-stone-200">
              <button type="button" aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3">
                <Icon name="minus" className="h-4 w-4" />
              </button>
              <span className="w-6 text-center text-sm font-medium">{qty}</span>
              <button type="button" aria-label="Increase" onClick={() => setQty((q) => q + 1)} className="p-3">
                <Icon name="plus" className="h-4 w-4" />
              </button>
            </div>
            <button type="button" onClick={() => onAdd(qty)} className="flex-1 rounded-full bg-[#1c1917] py-3.5 text-sm font-medium text-white hover:bg-[#3f6b4f]">
              Add to bag · {money(34 * qty)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Routine({ serif, onAdd }: { serif: string; onAdd: () => void }) {
  const steps = [
    { step: "Cleanse", id: "soft-cleanse" },
    { step: "Treat", id: "barrier-serum" },
    { step: "Moisturize", id: "cloud-cream" },
  ].map((s) => ({ ...s, product: products.find((p) => p.id === s.id)! }));
  const total = steps.reduce((n, s) => n + s.product.price, 0);
  return (
    <section id="routine" className="mx-auto max-w-7xl scroll-mt-20 px-6 pt-28">
      <div className="rounded-[2.5rem] bg-[#3f6b4f] px-6 py-14 text-white sm:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm tracking-widest text-emerald-100/70 uppercase">The everyday routine</p>
            <h2 className={`${serif} mt-2 text-5xl sm:text-6xl`}>
              Three steps. <em>Two minutes.</em>
            </h2>
          </div>
          <p className="max-w-xs text-emerald-50/80">Bundle the full routine and save 15%, plus free shipping on us.</p>
        </div>
        <div className="mt-12 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((s, i) => (
            <div key={s.id} className="contents">
              <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="h-24 w-20 shrink-0 overflow-hidden rounded-2xl" style={{ background: s.product.tile }}>
                  <Packshot shape={s.product.shape} color={s.product.color} name="" className="h-full w-full scale-125" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-emerald-100/70 uppercase">Step {i + 1} · {s.step}</p>
                  <p className="mt-1 text-lg font-medium">{s.product.name}</p>
                  <p className="text-sm text-emerald-50/70">{money(s.product.price)}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-white/15">
                  <Icon name="plus" className="h-4 w-4" />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
          <p className="flex items-baseline gap-3">
            <span className={`${serif} text-5xl`}>{money(Math.round(total * 0.85))}</span>
            <span className="text-emerald-100/60 line-through">{money(total)}</span>
            <span className="rounded-full bg-[#f2c66d] px-3 py-1 text-xs font-semibold text-[#1c1917]">Save 15%</span>
          </p>
          <button type="button" onClick={onAdd} className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1c1917] hover:bg-[#f6e4d8]">
            Add the routine to bag
          </button>
        </div>
      </div>
    </section>
  );
}

function Reviews({ serif }: { serif: string }) {
  const bars = [82, 12, 4, 1, 1];
  return (
    <section id="reviews" className="mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-6 pt-28 lg:grid-cols-[320px_1fr]">
      <div>
        <h2 className={`${serif} text-5xl`}>Real skin, real reviews</h2>
        <p className="mt-6 flex items-end gap-3">
          <span className={`${serif} text-7xl leading-none`}>4.9</span>
          <span className="pb-1">
            <Stars rating={5} className="h-4 w-4" />
            <span className="text-sm text-stone-500">12,400+ verified reviews</span>
          </span>
        </p>
        <div className="mt-6 space-y-2">
          {bars.map((b, i) => (
            <div key={i} className="flex items-center gap-3 text-xs text-stone-500">
              <span className="w-3">{5 - i}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-200">
                <div className="h-full rounded-full bg-[#1c1917]" style={{ width: `${b}%` }} />
              </div>
              <span className="w-8 text-right">{b}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-3xl bg-white p-6">
            <Stars rating={5} />
            <p className="mt-4 font-semibold">{r.title}</p>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{r.body}</blockquote>
            <figcaption className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 text-xs">
              <span className="flex items-center gap-1.5 font-medium">
                {r.name}
                <span className="flex items-center gap-0.5 text-[#3f6b4f]">
                  <Icon name="check" className="h-3.5 w-3.5" /> Verified
                </span>
              </span>
              <span className="text-stone-400">{r.product}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Perks() {
  const perks = [
    { icon: "truck", title: "Free shipping", body: "On US orders over $60" },
    { icon: "refresh", title: "30-day guarantee", body: "Love it or get your money back" },
    { icon: "leaf", title: "Clean and vegan", body: "Cruelty-free, always" },
    { icon: "recycle", title: "Refill program", body: "Send empties back for credit" },
  ] as const;
  return (
    <section className="mx-auto mt-28 grid max-w-7xl grid-cols-2 gap-8 border-y border-stone-900/10 px-6 py-12 lg:grid-cols-4">
      {perks.map((p) => (
        <div key={p.title} className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white">
            <Icon name={p.icon} />
          </span>
          <div>
            <p className="font-medium">{p.title}</p>
            <p className="text-sm text-stone-500">{p.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Newsletter({ serif }: { serif: string }) {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <h2 className={`${serif} text-5xl sm:text-6xl`}>
        Take <em>10% off</em> your first order
      </h2>
      <p className="mt-4 text-stone-600">Plus early access to new launches and our monthly skin notes. No spam, ever.</p>
      {sent ? (
        <p className="mx-auto mt-8 w-fit rounded-full bg-white px-6 py-3 text-sm">Check your inbox for your code: <b>HELLOMELLOW</b></p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mx-auto mt-8 flex max-w-md gap-2 rounded-full bg-white p-1.5"
        >
          <input type="email" required placeholder="Your email" aria-label="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
          <button className="rounded-full bg-[#1c1917] px-6 py-3 text-sm font-medium text-white hover:bg-[#3f6b4f]">Get my code</button>
        </form>
      )}
    </section>
  );
}

function Footer({ serif }: { serif: string }) {
  const cols = [
    { title: "Shop", links: ["All products", "Serums", "Moisturizers", "Cleansers", "Gift cards"] },
    { title: "Help", links: ["Shipping", "Returns", "Track an order", "Contact us"] },
    { title: "About", links: ["Our story", "Ingredients", "Refill program", "Careers"] },
  ];
  return (
    <footer className="bg-[#1c1917] text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className={`${serif} text-4xl text-white`}>mellow.</p>
          <p className="mt-3 max-w-xs text-sm text-stone-400">Simple, effective skincare made in small batches in Los Angeles, California.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-medium text-white">{c.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-xs text-stone-500">
        <p>© 2026 Mellow Skin Co. · Privacy · Terms</p>
        <div className="flex gap-2">
          {["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal"].map((p) => (
            <span key={p} className="rounded-md border border-white/10 px-2 py-1 text-stone-400">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

type Line = CartLine & { product: Product };

function CartDrawer({
  serif,
  open,
  onClose,
  lines,
  subtotal,
  onChange,
}: {
  serif: string;
  open: boolean;
  onClose: () => void;
  lines: Line[];
  subtotal: number;
  onChange: (id: string, delta: number) => void;
}) {
  const left = Math.max(0, FREE_SHIPPING - subtotal);
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-[#f6f3ee] transition-transform duration-300 ${
          open ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-900/10 px-6 py-5">
          <h2 className={`${serif} text-3xl`}>Your bag</h2>
          <button type="button" onClick={onClose} aria-label="Close bag" className="rounded-full p-2 hover:bg-white">
            <Icon name="close" />
          </button>
        </div>

        <div className="px-6 pt-5">
          <p className="text-sm">
            {left > 0 ? (
              <>You&apos;re <b>{money(left)}</b> away from free shipping</>
            ) : (
              <>You&apos;ve unlocked <b>free shipping</b></>
            )}
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-200">
            <div className="h-full rounded-full bg-[#3f6b4f] transition-all" style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%` }} />
          </div>
        </div>

        <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {lines.length === 0 && <li className="py-16 text-center text-stone-500">Your bag is empty.</li>}
          {lines.map((l) => (
            <li key={l.id} className="flex gap-4 rounded-2xl bg-white p-3">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl" style={{ background: l.product.tile }}>
                <Packshot shape={l.product.shape} color={l.product.color} name="" className="h-full w-full scale-125" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-2">
                  <p className="font-medium">{l.product.name}</p>
                  <p className="font-medium">{money(l.product.price * l.qty)}</p>
                </div>
                <p className="text-sm text-stone-500">{l.product.blurb}</p>
                <div className="mt-auto flex w-fit items-center rounded-full border border-stone-200">
                  <button type="button" aria-label="Remove one" onClick={() => onChange(l.id, -1)} className="p-2">
                    <Icon name="minus" className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm">{l.qty}</span>
                  <button type="button" aria-label="Add one" onClick={() => onChange(l.id, 1)} className="p-2">
                    <Icon name="plus" className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-stone-900/10 px-6 py-6">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">{money(subtotal)}</span>
          </div>
          <p className="mt-1 text-xs text-stone-500">Taxes and shipping calculated at checkout.</p>
          <button type="button" disabled={lines.length === 0} className="mt-5 w-full rounded-full bg-[#1c1917] py-4 text-sm font-medium text-white hover:bg-[#3f6b4f] disabled:opacity-40">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
