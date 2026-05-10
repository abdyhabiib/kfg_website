import Link from 'next/link';

const MENU_URL = 'https://menu.kfggalkacyo.com/';
const WHATSAPP_URL = 'https://wa.me/252907795752';

export default function Footer() {
  return (
    <footer className="bg-white pt-[clamp(48px,7vw,80px)] pb-7">
      <div className="text-center font-serif italic font-black text-[clamp(96px,22vw,280px)] leading-[0.85] tracking-[-0.04em] text-[#1A1A1A] border-b border-[#E5E5E5] pb-7 mb-9 select-none">
        K<span className="text-[#E30613]">F</span>G
        <p className="font-bold not-italic text-[clamp(14px,1.6vw,22px)] text-[#555] tracking-[-0.01em] mt-2.5">
          Taste the difference.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-7 lg:gap-8 mb-8">
          <div>
            <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#8A8A8A] font-semibold mb-3.5">The house</h4>
            <p className="font-serif italic font-extrabold text-[clamp(20px,3.2vw,26px)] text-[#1A1A1A] leading-[1.15] tracking-tight max-w-[26ch]">
              A friendly neighbourhood spot in Galkacyo for burgers, chicken, pizza &amp; great coffee.
            </p>
            <div className="mt-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
              <span className="text-[13px] text-[#555]">Open now · 06:00 — 23:30</span>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.18em] uppercase text-[#8A8A8A] font-semibold mb-3.5">Visit</h4>
            {['Galkacyo, Puntland', 'Open 06:00 — 23:30', 'Daily, no closures'].map((t) => (
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

        <div className="border-t border-[#E5E5E5] pt-5 flex flex-col md:flex-row justify-between items-center gap-3.5 text-xs text-[#8A8A8A]">
          <span className="text-center md:text-left">© 2026 KFG · All rights reserved</span>
          <span className="text-center md:text-right">
            Developed by{' '}
            <a
              href="https://goodirtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline transition-colors"
              style={{ color: '#850d33' }}
            >
              goodirtechnology.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
