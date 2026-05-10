import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — KFG · Galkacyo",
  description:
    "The story behind KFG — why we opened, what we believe, and what makes us Galkacyo's favourite place to eat, work, and gather.",
};

const WHATSAPP_URL = "https://wa.me/252907795752";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F7F4EF]">

        {/* ── Opening statement ─────────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 pt-16 md:pt-24 pb-12 md:pb-16">
          <p className="font-sans text-[#E30613] font-semibold text-xs tracking-[0.16em] uppercase mb-7">
            Our story
          </p>
          <h1 className="font-serif italic font-black text-[clamp(2.6rem,8vw,6rem)] leading-[1] tracking-[-0.025em] text-[#1A1A1A] max-w-[16ch]">
            We opened because Galkacyo deserved better.
          </h1>
        </div>

        {/* ── Long-form story ───────────────────────────────────── */}
        <div className="bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 py-16 md:py-24">
            <div className="grid md:grid-cols-[1fr_2px_1fr] gap-10 md:gap-16 items-start">

              {/* Left column */}
              <div className="font-sans text-[17px] leading-[1.8] text-[#444] space-y-6">
                <p>
                  For a long time, if you wanted a proper meal in Galkacyo — something
                  made with care, in a space that felt good to sit in — you had to make
                  do. The food was fine. The place was fine. But{" "}
                  <em className="text-[#1A1A1A] not-italic font-semibold">fine</em>{" "}
                  wasn&apos;t what we were after.
                </p>
                <p>
                  {/* TODO: Insert founder name(s) and personal backstory here */}
                  We&apos;d seen what a real restaurant could feel like. We knew what
                  a burger was supposed to taste like when someone actually tried. And we
                  thought: why not here? Why not us? Why not now?
                </p>
                <p>
                  So we built KFG. Not as a business plan on a spreadsheet, but as an
                  answer to a question we kept asking ourselves every time we sat down
                  somewhere disappointing.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-[#E5E5E5] self-stretch" />

              {/* Right column */}
              <div className="font-sans text-[17px] leading-[1.8] text-[#444] space-y-6">
                <p>
                  We started with the kitchen. Hired people who actually cared about
                  what went on the plate.{" "}
                  {/* TODO: Add detail about where the recipes came from, who trained the cooks */}
                  Argued about recipes. Threw out batches that weren&apos;t right and
                  started over. The menu took longer than we expected. It was worth it.
                </p>
                <p>
                  Then came the space — the air conditioning, the windows, the tables
                  you can actually spread out on, the Wi-Fi fast enough for real work.
                  We wanted KFG to be somewhere you&apos;d come for lunch and still be
                  there at sunset, not because you got stuck, but because you wanted to
                  stay.
                </p>
                <p>
                  {/* TODO: Add founding year once confirmed */}
                  When we opened our doors, Galkacyo showed up. That meant everything
                  to us. It still does.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Pull quote ────────────────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 py-14 md:py-20">
          <blockquote className="border-l-[3px] border-[#E30613] pl-7 md:pl-10">
            <p className="font-serif italic font-black text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.15] tracking-tight text-[#1A1A1A] max-w-[28ch]">
              &ldquo;One espresso buys you the whole afternoon. That&apos;s not a policy.
              That&apos;s just how we feel about people.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── What we believe ───────────────────────────────────── */}
        <div className="bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 py-16 md:py-24">
            <p className="font-sans text-[#E30613] font-semibold text-xs tracking-[0.16em] uppercase mb-10">
              What we believe
            </p>

            <div className="space-y-0 divide-y divide-[#F0EDE8]">
              {[
                {
                  label: "On food",
                  text: "If we wouldn't eat it ourselves, we won't put it in front of you. Every item on our menu exists because someone in our kitchen actually loves it — not because it was easy to make or cheap to source. Shortcuts aren't on the menu.",
                },
                {
                  label: "On hospitality",
                  text: "Good service doesn't announce itself. It's the water that arrives before you ask, the order that comes out right the first time, the staff member who notices you're waiting. We try to be the kind of place you remember not because of any single thing, but because everything quietly worked.",
                },
                {
                  label: "On this city",
                  text: "Galkacyo is growing. It's changing. Young people here are hungry for spaces that take them seriously — to work in, to meet in, to celebrate in. We want to be that place. Not just a restaurant. A neighbourhood fixture that this city grows up alongside.",
                },
              ].map(({ label, text }) => (
                <div
                  key={label}
                  className="py-9 md:py-11 grid md:grid-cols-[180px_1fr] gap-4 md:gap-14 items-start"
                >
                  <span className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8A8A8A] pt-1">
                    {label}
                  </span>
                  <p className="font-sans text-[17px] md:text-[18px] leading-[1.8] text-[#333] max-w-[60ch]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Closing invite ────────────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 py-16 md:py-24">
          <div className="bg-[#1A1A1A] rounded-2xl px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <p className="font-serif italic font-black text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.1] tracking-tight text-white max-w-[18ch]">
                We&apos;re open every single day. Come see us.
              </p>
              <p className="mt-4 font-sans text-[#BDBDBD] text-[15px] leading-relaxed max-w-[38ch]">
                06:00 to 23:30. No reservations needed unless you&apos;re six or more.
                Walk in, sit down, order something good.
              </p>
            </div>
            <Link
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#E30613] text-white font-semibold text-[14px] transition-all hover:bg-[#B70410] hover:-translate-y-px whitespace-nowrap flex-shrink-0 shadow-[0_8px_24px_-8px_rgba(227,6,19,0.45)]"
            >
              Order on WhatsApp
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
