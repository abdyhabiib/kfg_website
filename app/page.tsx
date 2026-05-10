import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MENU_URL = "https://menu.kfggalkacyo.com/";
const WHATSAPP_URL = "https://wa.me/252907795752";
const PHONE_URL = "tel:+252905522221"; // Added for direct call navigation
const MAPS_URL = "https://maps.app.goo.gl/7L2NLEhstWFVHHFv7";

/* ── SVG icons ─────────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M2 7h10M7 2l5 5-5 5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPin = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4 flex-shrink-0">
    <path d="M8 1.5C5 1.5 3 3.5 3 6.4 3 10 8 14.5 8 14.5S13 10 13 6.4C13 3.5 11 1.5 8 1.5Z" />
    <circle cx="8" cy="6.5" r="2" />
  </svg>
);
const Dot = () => (
  <svg viewBox="0 0 14 14" fill="currentColor" className="w-2.5 h-2.5 text-[#E30613] flex-shrink-0">
    <circle cx="7" cy="7" r="3" />
  </svg>
);
const WiFiIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[18px] h-[18px]">
    <path d="M2 6.5C4 4.5 12 4.5 14 6.5M4 9C5.5 7.5 10.5 7.5 12 9M6 11.5C7 10.5 9 10.5 10 11.5" />
    <circle cx="8" cy="13.5" r="1" fill="currentColor" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── menu card ─────────────────────────────────────────────────── */
function MenuCard({
  badge, badgeVariant = "red", imgSrc, imgAlt, name, price, desc, category,
}: {
  badge: string; badgeVariant?: "red" | "dark" | "cream";
  imgSrc: string; imgAlt: string; name: string; price: string; desc: string; category: string;
}) {
  const badgeClasses =
    badgeVariant === "dark"
      ? "bg-[#1A1A1A] text-white"
      : badgeVariant === "cream"
        ? "bg-white text-[#1A1A1A] border border-[#E5E5E5]"
        : "bg-[#E30613] text-white";

  return (
    <article className="bg-white rounded-2xl p-3 border border-[#E5E5E5] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.18)] hover:border-[#F0EDE8] group">
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3.5 relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1280px) 50vw, 25vw"
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

/* ── workspace feature ─────────────────────────────────────────── */
function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white border border-[#ECE6DC] rounded-xl p-4 flex gap-3 items-start transition-all hover:border-[#E30613]/30 hover:shadow-sm">
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
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <header className="pt-[clamp(40px,7vw,80px)] pb-[clamp(60px,9vw,110px)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-[clamp(40px,5vw,72px)] items-center">

            {/* copy — centered on mobile, left on desktop */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFF1F2] border border-[#FFD9DC] text-[12px] font-semibold text-[#E30613] tracking-[0.02em] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#E30613] animate-pulse" />
                Restaurant · Café · Workspace
              </span>

              <h1 className="font-serif italic font-black text-[clamp(44px,10vw,96px)] leading-[0.98] tracking-[-0.025em] text-[#1A1A1A]">
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

              <div className="mt-7 flex gap-3 flex-wrap justify-center lg:justify-start">
                <Link
                  href={MENU_URL}
                  className="inline-flex items-center gap-2.5 px-[22px] py-3.5 md:px-[26px] md:py-4 rounded-full bg-[#E30613] text-white font-semibold text-sm md:text-[15px] transition-all hover:bg-[#B70410] hover:-translate-y-px shadow-[0_8px_24px_-8px_rgba(227,6,19,0.4)]"
                >
                  See the menu
                  <ArrowRight />
                </Link>
                <Link
                  href={MAPS_URL}
                  className="inline-flex items-center gap-2.5 px-[22px] py-3.5 md:px-[26px] md:py-4 rounded-full border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] font-semibold text-sm md:text-[15px] transition-all hover:bg-[#1A1A1A] hover:text-white"
                >
                  <MapPin />
                  Find us
                </Link>
              </div>

              <div className="mt-6 flex gap-2 flex-wrap justify-center lg:justify-start">
                {["Fresh","Family friendly", "Free Wi-Fi"].map((c) => (
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

            {/* image collage */}
            <div className="relative w-full aspect-square mt-2 max-w-[400px] mx-auto lg:max-w-none">
              {/* tall left — burger */}
              <div
                className="absolute left-0 top-[6%] w-[64%] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.28)]"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/assets/Burgerheroshot.png"
                  alt="KFG signature burger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 58vw, 30vw"
                  priority
                />
              </div>
              {/* top right — coffee */}
              <div className="absolute right-0 top-0 w-[42%] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.28)] aspect-square">
                <Image
                  src="/assets/Coffeecup.png"
                  alt="KFG Spanish latte"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 38vw, 20vw"
                  priority
                />
              </div>
              {/* bottom right — chicken */}
              <div
                className="absolute right-[4%] bottom-0 w-[50%] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.28)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/assets/Chickenbucket.png"
                  alt="KFG chicken bucket"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 46vw, 24vw"
                  priority
                />
              </div>
              {/* red stamp */}
              <div className="absolute right-0 top-[38%] w-[96px] h-[96px] sm:w-[116px] sm:h-[116px] rounded-full bg-[#E30613] text-white grid place-items-center text-center -rotate-12 z-10 shadow-[0_18px_40px_-12px_rgba(227,6,19,0.55)]">
                <div>
                  <span className="font-serif italic font-black text-[17px] sm:text-[20px] leading-none tracking-tight block">
                    Taste<br />the diff.
                  </span>
                  <small className="text-[8px] tracking-[0.18em] mt-1 block not-italic opacity-80">EST · 2024</small>
                </div>
              </div>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-[clamp(48px,8vw,80px)] bg-[#1A1A1A] text-white rounded-2xl p-[22px] md:p-[26px_32px] grid grid-cols-2 md:grid-cols-4 gap-[18px_14px] md:gap-4">
            {[
              { num: <>94<span className="text-[#E30613]">+</span></>, lab: "Items on the menu" },
              { num: <>06<span className="text-[#E30613]">·</span>23<span className="text-[0.7em]">:30</span></>, lab: "Open every day" },
              { num: <>$0.30<span className="text-[#E30613]">↑</span></>, lab: "From, the cheapest item" },
              { num: <>A/C<span className="text-[#E30613]">.</span></>, lab: "Cool, all day long" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-serif italic font-black text-[clamp(28px,5vw,38px)] leading-none">{s.num}</div>
                <div className="text-xs text-[#BDBDBD] leading-snug">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── SCROLLING TICKER ─────────────────────────────────────── */}
      <div className="bg-[#E30613] py-3 overflow-hidden select-none" aria-hidden="true">
        <div className="flex whitespace-nowrap ticker-track">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex items-center flex-shrink-0">
              {[
                "🔥 Fire-grilled daily",
                "📦 Doorstep Delivery",
                "✅ Made to order",
                "☕ Best Spanish latte in town",
                "🏆 Est. 2024",
                "🍔 94 menu items",
                "📍 Galkacyo, Puntland",
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center text-white font-semibold text-[13px] px-5 shrink-0">
                  {item}
                  <span className="ml-5 opacity-40 text-base">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── MENU ─────────────────────────────────────────────────── */}
      <section className="py-[clamp(64px,11vw,120px)]" id="menu">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 justify-between mb-[clamp(36px,6vw,64px)]">
            <div>
              <span className="block text-[11px] tracking-[0.18em] uppercase text-[#E30613] font-semibold mb-3">
                02 · The Menu
              </span>
              <h2 className="font-serif italic font-black text-[clamp(34px,6.5vw,72px)] leading-none tracking-[-0.025em] text-[#1A1A1A]">
                House <span className="text-[#E30613]">favourites</span>.
              </h2>
            </div>
            <p className="text-[#555] text-sm max-w-[32ch] sm:text-right flex-shrink-0">
              Four things we make most days. The full digital menu has the rest — 94 items in total.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on sm+ */}
          <div className="overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 pb-3 sm:pb-0 sm:overflow-visible">
            <div className="flex gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-5 xl:gap-[22px] w-max sm:w-full">
              <div className="w-[76vw] sm:w-auto">
                <MenuCard
                  badge="Bestseller"
                  imgSrc="/assets/BoxMealLarge.png"
                  imgAlt="KFG Box Meal Large"
                  name="Box Meal"
                  price="$27"
                  desc="15 pcs fire-grilled chicken, 2 baskets of fries and 4 chilled drinks. Feeds the whole table."
                  category="Dinner"
                />
              </div>
              <div className="w-[76vw] sm:w-auto">
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
              </div>
              <div className="w-[76vw] sm:w-auto">
                <MenuCard
                  badge="Hot"
                  imgSrc="/assets/PizzaMargherita.png"
                  imgAlt="KFG Pizza Margherita"
                  name="Margherita"
                  price="$6 — $13.5"
                  desc="San-Marzano tomato, mozzarella & basil. Stone-baked, blistered crust. Three sizes."
                  category="Pizza"
                />
              </div>
              <div className="w-[76vw] sm:w-auto">
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
            </div>
          </div>

          {/* Scroll hint — mobile only */}
          <p className="sm:hidden text-center text-[11px] text-[#BDBDBD] tracking-[0.08em] mt-2">
            ← swipe to see more →
          </p>

          {/* menu CTA */}
          <div className="mt-[clamp(32px,5vw,48px)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[#F7F4EF] rounded-2xl px-6 py-6 md:px-9 md:py-7">
            <p className="font-serif italic font-extrabold text-[clamp(20px,3.5vw,30px)] leading-[1.15] tracking-tight max-w-[22ch]">
              94 items, every one of them <span className="text-[#E30613]">made to order</span>.
            </p>
            <Link
              href={MENU_URL}
              className="inline-flex items-center gap-2.5 px-[22px] py-3.5 md:px-[26px] md:py-4 rounded-full bg-[#E30613] text-white font-semibold text-sm md:text-[15px] transition-all hover:bg-[#B70410] hover:-translate-y-px whitespace-nowrap flex-shrink-0"
            >
              Browse the full menu
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ──────────────────────────────────────────── */}
      <div className="border-y border-[#ECE6DC] bg-[#F7F4EF]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 py-8 md:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {[
              { emoji: "🔥", title: "Fire-grilled", sub: "Cooked fresh to order" },
              { emoji: "📦", title: "Safe Delivery", sub: "Straight to your doorstep" },
              { emoji: "🤝", title: "Family friendly", sub: "Kids always welcome" },
              { emoji: "📶", title: "Free fibre Wi-Fi", sub: "Fast enough to work on" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-1.5 text-center">
                <span className="text-[28px] leading-none">{item.emoji}</span>
                <b className="text-[13px] font-bold text-[#1A1A1A] leading-snug mt-0.5">{item.title}</b>
                <span className="text-[11px] text-[#8A8A8A] leading-snug">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAFÉ & WORKSPACE ────────────────────────────────────── */}
      <section className="py-[clamp(64px,11vw,120px)] bg-white" id="cafe">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16">
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
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 px-3.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] flex items-center gap-3 max-w-[230px]">
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

      {/* ── WHATSAPP ORDER BAND ──────────────────────────────────── */}
      <div className="bg-[#111111] py-[clamp(52px,9vw,80px)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 text-center lg:text-left">
            <div className="max-w-[500px]">
              <span className="block text-[11px] tracking-[0.18em] uppercase text-[#E30613] font-semibold mb-3">
                Order in seconds
              </span>
              <h2 className="font-serif italic font-black text-[clamp(30px,5vw,56px)] leading-[1.0] tracking-[-0.025em] text-white">
                No app needed.<br />
                Just{" "}
                <span className="text-[#25D366]">WhatsApp</span>.
              </h2>
              <p className="mt-4 text-[#BDBDBD] text-[15px] leading-relaxed max-w-[38ch] mx-auto lg:mx-0">
                Send us your order, we&apos;ll have it ready. We reply fast — every day from 06:00 to 23:30.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4 flex-shrink-0">
              <div className="text-center lg:text-right">
                <p className="text-[#666] text-[11px] tracking-[0.12em] uppercase mb-1.5">Call or message</p>
                <p className="font-serif italic font-black text-[clamp(22px,3.5vw,32px)] text-white tracking-tight">
                  +252 90 779 5752
                </p>
              </div>
              <Link
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] text-white font-bold text-[15px] shadow-[0_12px_32px_-8px_rgba(37,211,102,0.45)] hover:bg-[#20c05a] hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <WhatsAppIcon />
                Order on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── VISIT ──────────────────────────────────────────────── */}
      <div className="px-5 md:px-10 xl:px-16 my-[clamp(32px,6vw,64px)]">
        <section id="visit" className="bg-[#1A1A1A] text-white rounded-2xl max-w-[1280px] mx-auto overflow-hidden">
          <div className="px-[clamp(22px,5vw,56px)] py-[clamp(36px,7vw,72px)] grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-[clamp(28px,4vw,48px)] md:items-end">
            <div>
              <span className="block text-[11px] tracking-[0.18em] uppercase text-[#E30613] font-semibold mb-3">
                04 · Visit
              </span>
              <h2 className="font-serif italic font-black text-[clamp(34px,6vw,64px)] leading-none tracking-[-0.02em] text-white">
                Come hungry.<br />Leave <span className="text-[#E30613]">happy</span>.
              </h2>
              <Link
                href={MAPS_URL}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white/75 text-[13px] font-medium hover:bg-white/10 hover:text-white transition-all"
              >
                <MapPin />
                Get directions →
              </Link>
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
                Galkacyo, <span className="text-[#E30613]">Puntland</span><br />Somalia
              </p>
              <small className="block text-[13px] text-[#BDBDBD] mt-1.5 leading-relaxed not-italic">
                Walk-in welcome. Reservations for 6+.
              </small>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* ── FLOATING CALL CTA (mobile only) ─────────────────── */}
<div className="lg:hidden fixed bottom-5 right-5 z-50">
  <Link
    href={PHONE_URL}
    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-[#E30613] text-white font-bold text-sm shadow-[0_12px_32px_-8px_rgba(227,6,19,0.5)] hover:bg-[#B70410] hover:-translate-y-0.5 transition-all"
  >
    <PhoneIcon />
    Call Us
  </Link>
</div>
    </>
  );
}
