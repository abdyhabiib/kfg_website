'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MENU_URL = 'https://menu.kfggalkacyo.com/';
const WHATSAPP_URL = 'https://wa.me/252907795752';

const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#cafe', label: 'Café & Workspace' },
  { href: '#visit', label: 'Visit' },
  { href: MENU_URL, label: 'Full Menu ↗' },
];

const ArrowRight = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M2 7h10M7 2l5 5-5 5" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-[12px] border-b border-[#E5E5E5] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_-6px_rgba(0,0,0,0.1)]' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16 flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <Link href="/" aria-label="KFG home" className="flex-shrink-0">
          <Image
            src="/logo-transparent.png"
            alt="KFG"
            width={240}
            height={88}
            className="h-14 md:h-[70px] w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-medium text-sm text-[#555] hover:text-[#E30613] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href={WHATSAPP_URL}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full bg-[#E30613] text-white font-semibold text-[13px] md:text-sm whitespace-nowrap transition-all hover:bg-[#B70410] hover:-translate-y-px shadow-[0_4px_16px_-4px_rgba(227,6,19,0.35)]"
          >
            Order Now
            <ArrowRight />
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-[#E5E5E5] bg-white gap-[5px] flex-shrink-0 transition-all hover:border-[#E30613]"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#1A1A1A] rounded-full transition-all duration-200 origin-center ${
                open ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#1A1A1A] rounded-full transition-all duration-200 ${
                open ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#1A1A1A] rounded-full transition-all duration-200 origin-center ${
                open ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-[440px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="bg-white border-t border-[#F0EDE8] px-5 pt-2 pb-5 flex flex-col gap-0.5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-3 px-4 rounded-xl text-[15px] font-medium text-[#1A1A1A] hover:bg-[#FFF1F2] hover:text-[#E30613] transition-colors flex items-center justify-between group"
            >
              {l.label}
              <span className="text-[#CCC] group-hover:text-[#E30613] transition-colors text-sm">→</span>
            </Link>
          ))}

          <div className="mt-3 pt-3 border-t border-[#F0EDE8] flex flex-col gap-3">
            <Link
              href={WHATSAPP_URL}
              onClick={close}
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#E30613] text-white font-semibold text-sm transition-all hover:bg-[#B70410]"
            >
              Order via WhatsApp
              <ArrowRight />
            </Link>
            <div className="flex items-center justify-center gap-2 text-[12px] text-[#8A8A8A]">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
              Open now · 06:00 — 23:30 daily
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
