import Image from "next/image";
import Link from "next/link";

const MENU_URL = "https://kfg-menu.vercel.app/";
const WHATSAPP_URL = "https://wa.me/252907795752";

/* ── tiny SVG icons ────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <path d="M2 7h10M7 2l5 5-5 5" />
  </svg>
);
const MapPin = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
    <path d="M8 1.5C5 1.5 3 3.5 3 6.4 3 10 8 14.5 8 14.5S13 10 13 6.4C13 3.5 11 1.5 8 1.5Z" />
    <circle cx="8" cy="6.5" r="2" />
  </svg>
);
const Dot = () => (
  <svg viewBox="0 0 14 14" fill="currentColor" className="w-3 h-3 text-[#E30613]">
    <circle cx="7" cy="7" r="3" />
  </svg>
);
const WiFiIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]">
    <path d="M2 6.5C4 4.5 12 4.5 14 6.5M4 9C5.5 7.5 10.5 7.5 12 9M6 11.5C7 10.5 9 10.5 10 11.5" />
    <circle cx="8" cy="13.5" r="1" fill="currentColor" />
  </svg>
);

/* ── menu card ────────────────────────────────────────────────── */
function MenuCard({
  badge,
  badgeVariant = "red",
  imgSrc,
  imgAlt,
  name,
  price,
  desc,
  category,
}: {
  badge: string;
  badgeVariant?: "red" | "dark" | "cream";
  imgSrc: string;
  imgAlt: string;
  name: string;
  price: string;
  desc: string;
  category: string;
}) {
  const badgeClasses =
    badgeVariant === "dark"
      ? "bg-[#1A1A1A] text-white"
      : badgeVariant === "cream"
        ? "bg-white text-[#1A1A1A] border border-[#E5E5E5]"
        : "bg-[#E30613] text-white";

  return (
    <article className="bg-white rounded-2xl p-3 border border-[#E5E5E5] flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.25)]">
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3.5 relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide z-10 ${badgeClasses}`}>
          {badge}
        </span>
      </div>
      <div className="px-1.5 pb-2.5 flex flex-col gap-1.5 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif italic font-black text-[22px] sm:text-2xl leading-[1.05] tracking-tight text-[#1A1A1A]">
            {name}
          </h3>
          <span className="font-bold text-[15px] text-[#E30613] bg-[#FFF1F2] px-3 py-1 rounded-full whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-[#555] text-sm leading-relaxed">{desc}</p>
        <span className="mt-auto pt-2.5 border-t border-[#E5E5E5] text-[11px] tracking-[0.12em] uppercase text-[#8A8A8A]">
          {category}
        </span>
      </div>
    </article>
  );
}

/* ── feature item ─────────────────────────────────────────────── */
function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white border border-[#ECE6DC] rounded-xl p-4 flex gap-3 items-start">
      <div className="w-9 h-9 rounded-[10px] bg-[#E30613] text-white grid place-items-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <b className="block font-bold text-[15px] text-[#1A1A1A] mb-0.5">{title}</b>
        <span className="text-[13px] text-[#555] leading-relaxed block">{desc}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── TOPBAR ─────────────────────────────────────────────── */}
      <div className="bg-[#1A1A1A] text-white text-xs py-2.5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-[22px] md:px-10 xl:px-16 flex gap-3.5 flex-wrap justify-between items-center">
          <span className="inline-flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]" />
            Open now · 06:00 — 23:30 daily
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">Galkacyo · Puntland · Somalia</span>
          <Link href={WHATSAPP_URL} className="inline-flex items-center gap-2 text-white hover:underline">
            WhatsApp +252 90 779 5752 →
          </Link>
        </div>
      </div>

      {/* ── NAV ────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/[0.92] backdrop-blur-[12px] border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-[22px] md:px-10 xl:px-16 flex items-center justify-between py-3.5 gap-4">
          <Link href="/" aria-label="KFG home" className="inline-flex items-center">
            <Image
              src="/logo-transparent.png"
              alt="KFG"
              width={120}
              height={44}
              className="h-9 md:h-11 w-auto object-contain"
            />
          </Link>
          <div className="hidden lg:flex gap-7">
            {[
              { href: "#menu", label: "Menu" },
              { href: "#cafe", label: "Café & Workspace" },
              { href: "#visit", label: "Visit" },
              { href: MENU_URL, label: "Full menu ↗" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-medium text-sm text-[#555] hover:text-[#E30613] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 px-[18px] py-2.5 md:px-[22px] md:py-3 rounded-full bg-[#E30613] text-white font-semibold text-[13px] md:text-sm whitespace-nowrap transition-all hover:bg-[#B70410] hover:-translate-y-px"
          >
            WhatsApp
            <ArrowRight />
          </Link>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <header className="pt-[clamp(40px,7vw,80px)] pb-[clamp(60px,9vw,110px)]">
        <div className="max-w-[1280px] mx-auto px-[22px] md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-[clamp(40px,5vw,72px)] items-center">

            {/* copy */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFF1F2] border border-[#FFD9DC] text-[12px] font-semibold text-[#E30613] tracking-[0.02em] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#E30613]" />
                Restaurant · Café · Workspace
              </span>

              <h1 className="font-serif italic font-black text-[clamp(44px,9vw,96px)] leading-[0.98] tracking-[-0.025em] text-[#1A1A1A]">
                Burgers,{" "}
                <span className="text-[#E30613]">chicken</span>,<br />
                <span className="relative inline-block z-[1] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[4%] after:h-[0.18em] after:bg-[#E30613] after:opacity-[0.18] after:rounded-full after:-z-10">
                  coffee
                </span>{" "}
                &amp; chill.
              </h1>

              <p className="mt-5 md:mt-6 text-base md:text-[17px] leading-relaxed text-[#555] max-w-[52ch]">
                A neighbourhood spot in Galkacyo for a properly good burger, fire-grilled chicken and the best Spanish latte in town. Cool air, city views, plug-friendly tables — stay as long as you&apos;d like.
              </p>

              <div className="mt-7 flex gap-3 flex-wrap">
                <Link
                  href={MENU_URL}
                  className="inline-flex items-center gap-2.5 px-[22px] py-3.5 md:px-[26px] md:py-4 rounded-full bg-[#E30613] text-white font-semibold text-sm md:text-[15px] transition-all hover:bg-[#B70410] hover:-translate-y-px"
                >
                  See the menu
                  <ArrowRight />
                </Link>
                <Link
                  href="#visit"
                  className="inline-flex items-center gap-2.5 px-[22px] py-3.5 md:px-[26px] md:py-4 rounded-full bg-transparent text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] font-semibold text-sm md:text-[15px] transition-all hover:bg-[#1A1A1A] hover:text-white"
                >
                  <MapPin />
                  Find us
                </Link>
              </div>

              <div className="mt-7 flex gap-2 flex-wrap">
                {["Fresh, never frozen", "Halal", "Family friendly", "Free Wi-Fi"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F4EF] rounded-full text-xs font-medium text-[#555]"
                  >
                    <Dot />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* collage */}
            <div className="relative w-full aspect-square mt-2">
              {/* slot A — tall left: burger hero shot */}
              <div
                className="absolute left-0 top-[6%] w-[64%] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.25)]"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/assets/Burgerheroshot.png"
                  alt="KFG signature burger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 64vw, 33vw"
                  priority
                />
              </div>
              {/* slot B — top right: coffee cup */}
              <div className="absolute right-0 top-0 w-[42%] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.25)] aspect-square">
                <Image
                  src="/assets/Coffeecup.png"
                  alt="KFG Spanish latte"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 42vw, 22vw"
                  priority
                />
              </div>
              {/* slot C — bottom right: chicken bucket */}
              <div
                className="absolute right-[4%] bottom-0 w-[50%] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.25)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/assets/Chickenbucket.png"
                  alt="KFG chicken bucket"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 26vw"
                  priority
                />
              </div>
              {/* stamp */}
              <div className="absolute right-[-6px] top-[38%] w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full bg-[#E30613] text-white grid place-items-center text-center -rotate-12 z-10 shadow-[0_18px_40px_-12px_rgba(227,6,19,0.55)]">
                <div>
                  <span className="font-serif italic font-black text-xl sm:text-2xl leading-none tracking-tight block">
                    Taste<br />the diff.
                  </span>
                  <small className="text-[8px] sm:text-[9px] tracking-[0.18em] mt-1.5 block not-italic">EST · 2024</small>
                </div>
              </div>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-[clamp(48px,8vw,80px)] bg-[#1A1A1A] text-white rounded-2xl p-[22px] md:p-[26px_32px] grid grid-cols-2 md:grid-cols-4 gap-[18px_14px] md:gap-4">
            {[
              {
                num: <>94<span className="text-[#FF5757]">+</span></>,
                lab: "Items on the menu",
              },
              {
                num: <>06<span className="text-[#FF5757]">·</span>23<span className="text-[0.7em]">:30</span></>,
                lab: "Open every day",
              },
              {
                num: <>$0.30<span className="text-[#FF5757]">↑</span></>,
                lab: "From, the cheapest item",
              },
              {
                num: <>A/C<span className="text-[#FF5757]">.</span></>,
                lab: "Cool, all day long",
              },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-serif italic font-black text-[clamp(28px,5vw,38px)] leading-none text-white">
                  {s.num}
                </div>
                <div className="text-xs text-[#BDBDBD] leading-snug">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── MENU ───────────────────────────────────────────────── */}
      <section className="py-[clamp(64px,11vw,120px)]" id="menu">
        <div className="max-w-[1280px] mx-auto px-[22px] md:px-10 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-end mb-[clamp(36px,6vw,64px)]">
            <div>
              <span className="block text-[11px] tracking-[0.18em] uppercase text-[#E30613] font-semibold mb-3">
                02 · The Menu
              </span>
              <h2 className="font-serif italic font-black text-[clamp(34px,6.5vw,72px)] leading-none tracking-[-0.025em] text-[#1A1A1A]">
                House <span className="text-[#E30613]">favourites</span>.
              </h2>
            </div>
            <p className="text-[#555] text-sm max-w-[32ch] md:text-right">
              Four things we make most days. The full digital menu has the rest — 94 items in total.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[18px] sm:gap-5 xl:gap-[22px]">
            <MenuCard
              badge="Bestseller"
              imgSrc="/assets/BoxMealLarge.png"
              imgAlt="KFG Box Meal Large"
              name="Box Meal"
              price="$27"
              desc="15 pcs fire-grilled chicken, 2 baskets of fries and 4 chilled drinks. Feeds the whole table."
              category="Dinner"
            />
            <MenuCard
              badge="House"
              badgeVariant="dark"
              imgSrc="/assets/ChickenBurger.png"
              imgAlt="KFG Chicken Burger"
              name="Chicken Burger"
              price="$4.50"
              desc="Buttermilk-brined fillet, lettuce, pickles & KFG sauce on a soft brioche bun."
              category="Burgers"
            />
            <MenuCard
              badge="Hot"
              imgSrc="/assets/PizzaMargherita.png"
              imgAlt="KFG Pizza Margherita"
              name="Margherita"
              price="$6 — $13.5"
              desc="San-Marzano tomato, mozzarella & basil. Stone-baked, blistered crust. Three sizes."
              category="Pizza"
            />
            <MenuCard
              badge="Café"
              badgeVariant="cream"
              imgSrc="/assets/SpanishLatte.png"
              imgAlt="KFG Spanish Latte"
              name="Spanish Latte"
              price="$2"
              desc="Double espresso, condensed milk, steamed whole milk. Silk in a glass — hot or iced."
              category="Coffee"
            />
          </div>

          {/* menu CTA */}
          <div className="mt-[clamp(32px,5vw,48px)] flex items-center justify-between gap-5 flex-wrap bg-[#F7F4EF] rounded-2xl px-[26px] py-6 md:px-9 md:py-7">
            <p className="font-serif italic font-extrabold text-[clamp(20px,3.5vw,30px)] leading-[1.15] tracking-tight max-w-[22ch]">
              94 items, every one of them <span className="text-[#E30613]">made to order</span>.
            </p>
            <Link
              href={MENU_URL}
              className="inline-flex items-center gap-2.5 px-[22px] py-3.5 md:px-[26px] md:py-4 rounded-full bg-[#E30613] text-white font-semibold text-sm md:text-[15px] transition-all hover:bg-[#B70410] hover:-translate-y-px whitespace-nowrap"
            >
              Browse the full menu
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CAFÉ & WORKSPACE ───────────────────────────────────── */}
      <section className="py-[clamp(64px,11vw,120px)] bg-[#F7F4EF]" id="cafe">
        <div className="max-w-[1280px] mx-auto px-[22px] md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-[clamp(28px,5vw,56px)] items-center">

            {/* visual */}
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
              <Image
                src="/assets/DROPINCafeinteriorworkspace.png"
                alt="KFG café interior and workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 px-3.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] flex items-center gap-3 max-w-[280px]">
                <div className="w-9 h-9 rounded-full bg-[#E30613] text-white grid place-items-center flex-shrink-0">
                  <WiFiIcon />
                </div>
                <div>
                  <small className="text-[11px] text-[#8A8A8A] uppercase tracking-[0.1em] block not-italic">Fast, free</small>
                  <b className="font-serif italic font-black text-[18px] leading-[1.05] text-[#1A1A1A] block mt-px">Fibre Wi-Fi</b>
                </div>
              </div>
            </div>

            {/* copy */}
            <div>
              <span className="block text-[11px] tracking-[0.18em] uppercase text-[#E30613] font-semibold mb-3">
                03 · Café &amp; Workspace
              </span>
              <h2 className="font-serif italic font-black text-[clamp(34px,6vw,64px)] leading-none tracking-[-0.025em] text-[#1A1A1A]">
                Sit. Sip.{" "}
                <span className="text-[#E30613]">Stay a while.</span>
              </h2>
              <p className="mt-[18px] text-[#555] text-base md:text-[17px] max-w-[46ch]">
                Our upper floor is built for long mornings and slower afternoons — air-conditioned, panoramic views over Galkacyo, plenty of plug sockets and coffee a few steps away. Bring a laptop, bring a friend. No minimum order, ever.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Feature
                  icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]"><path d="M2 8h12M5 5h6M3 11h10" /></svg>}
                  title="Air-conditioned"
                  desc="Two-zone A/C across dining hall & workspace."
                />
                <Feature
                  icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]"><rect x="2" y="3" width="12" height="9" rx="1" /><path d="M2 9.5l3-3 2 2 3-3 4 4" /></svg>}
                  title="Panoramic view"
                  desc="Floor-to-ceiling windows over the city."
                />
                <Feature
                  icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]"><path d="M5 2v3M11 2v3M3 6h10v8H3z" /><path d="M6 9h4M6 11h2" /></svg>}
                  title="Outlets at every seat"
                  desc="USB-C and shuko plugs throughout."
                />
                <Feature
                  icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]"><circle cx="8" cy="8" r="6" /><path d="M8 4v4l3 2" /></svg>}
                  title="06:00 — 23:30"
                  desc="Open every day. Coffee bar opens earliest."
                />
                <Feature
                  icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]"><path d="M3 5h8a3 3 0 0 1 0 6H3z" /><path d="M3 11v2M11 5V3" /></svg>}
                  title="Coffee, two metres away"
                  desc="House Spanish latte, fresh tea, filter."
                />
                <Feature
                  icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]"><circle cx="8" cy="8" r="6" /><path d="M5 8l2 2 4-4" /></svg>}
                  title="No minimum order"
                  desc="One espresso buys the whole afternoon."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT ──────────────────────────────────────────────── */}
      <div className="px-[22px] md:px-10 xl:px-16 my-[clamp(32px,6vw,64px)]">
        <section id="visit" className="bg-[#1A1A1A] text-white rounded-2xl max-w-[1280px] mx-auto">
          <div className="px-[clamp(22px,5vw,56px)] py-[clamp(36px,7vw,72px)] grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-[clamp(28px,4vw,48px)] md:items-end">
            <div>
              <span className="block text-[11px] tracking-[0.18em] uppercase text-[#FF5757] font-semibold mb-3">
                04 · Visit
              </span>
              <h2 className="font-serif italic font-black text-[clamp(34px,6vw,64px)] leading-none tracking-[-0.02em] text-white">
                Come hungry.<br />Leave <span className="text-[#FF5757]">happy</span>.
              </h2>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#BDBDBD] mb-2.5 font-medium">Hours</h4>
              <p className="font-serif italic font-extrabold text-[22px] leading-snug tracking-tight text-white">
                Open daily<br />06:00 — 23:30
              </p>
              <small className="block text-[13px] text-[#BDBDBD] mt-1.5 leading-relaxed not-italic">
                Coffee bar from 05:30. Last orders 23:00.
              </small>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#BDBDBD] mb-2.5 font-medium">Address</h4>
              <p className="font-serif italic font-extrabold text-[22px] leading-snug tracking-tight text-white">
                Galkacyo, <span className="text-[#FF5757]">PL</span><br />Puntland, Somalia
              </p>
              <small className="block text-[13px] text-[#BDBDBD] mt-1.5 leading-relaxed not-italic">
                Walk-in welcome. Reservations for 6+.
              </small>
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-white pt-[clamp(48px,7vw,80px)] pb-7">
        <div className="text-center font-serif italic font-black text-[clamp(96px,22vw,280px)] leading-[0.85] tracking-[-0.04em] text-[#1A1A1A] border-b border-[#E5E5E5] pb-7 mb-9">
          K<span className="text-[#E30613]">F</span>G
          <p className="font-bold not-italic text-[clamp(14px,1.6vw,22px)] text-[#555] tracking-[-0.01em] mt-2.5">
            Taste the difference.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-[22px] md:px-10 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-7 lg:gap-8 mb-8">
            <div>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#8A8A8A] font-semibold mb-3.5">The house</h4>
              <p className="font-serif italic font-extrabold text-[clamp(20px,3.2vw,26px)] text-[#1A1A1A] leading-[1.15] tracking-tight max-w-[26ch]">
                A friendly neighbourhood spot in Galkacyo for burgers, chicken, pizza &amp; great coffee.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#8A8A8A] font-semibold mb-3.5">Visit</h4>
              {["Galkacyo, Puntland", "Open 06:00 — 23:30", "Daily, no closures"].map((t) => (
                <p key={t} className="text-sm text-[#555] leading-[1.7]">{t}</p>
              ))}
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#8A8A8A] font-semibold mb-3.5">Order</h4>
              <Link href={WHATSAPP_URL} className="block text-sm text-[#555] leading-[1.7] hover:text-[#E30613] transition-colors">
                WhatsApp +252 90 779 5752
              </Link>
              <Link href={MENU_URL} className="block text-sm text-[#555] leading-[1.7] hover:text-[#E30613] transition-colors">
                Full digital menu
              </Link>
              <p className="text-sm text-[#555] leading-[1.7]">Catering &amp; box meals</p>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#8A8A8A] font-semibold mb-3.5">Follow</h4>
              <Link href="https://www.tiktok.com/@kfg_galkacyo" className="block text-sm text-[#555] leading-[1.7] hover:text-[#E30613] transition-colors">
                TikTok @kfg_galkacyo
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61574278020670" className="block text-sm text-[#555] leading-[1.7] hover:text-[#E30613] transition-colors">
                Facebook · KFG
              </Link>
              <Link href={WHATSAPP_URL} className="block text-sm text-[#555] leading-[1.7] hover:text-[#E30613] transition-colors">
                WhatsApp Business
              </Link>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-5 flex justify-between items-center gap-3.5 flex-wrap text-xs text-[#8A8A8A]">
            <span>© 2026 KFG · All rights reserved</span>
            <span>Made with care in Galkacyo, Puntland.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
