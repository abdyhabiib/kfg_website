# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

There are no tests in this project.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — configured via `@theme inline` in `globals.css` (not `tailwind.config.js`)
- No external UI component library; all components are hand-crafted inline SVGs and JSX

## Architecture

This is a single-page marketing site. All page content lives in `app/page.tsx` (Server Component). The only client component is `app/components/Navbar.tsx`.

**Page sections** (in order, with scroll-target IDs):
1. Hero — image collage + stat strip
2. Scrolling ticker (CSS marquee via `.ticker-track` animation)
3. `#menu` — four `<MenuCard>` components (horizontal scroll on mobile, grid on desktop)
4. Trust band
5. `#cafe` — workspace features via `<Feature>` components
6. WhatsApp order band (dark)
7. `#visit` — address/hours card
8. Footer — large logotype + columns
9. Floating call CTA (mobile-only, fixed position)

**Reusable components** (defined at the top of `page.tsx`, not in separate files):
- `MenuCard` — food item card with image, badge variant (`red` | `dark` | `cream`), name, price, description
- `Feature` — workspace amenity tile with inline SVG icon

**External URLs** are constants at the top of `page.tsx`:
- `MENU_URL` → digital menu
- `WHATSAPP_URL` → WhatsApp order link
- `PHONE_URL` → click-to-call
- `MAPS_URL` → Google Maps

## Styling conventions

- Brand tokens are CSS custom properties defined in `globals.css` under `@theme inline`:
  - `--color-kfg-red: #E30613` — primary red (use for accents, CTAs, hover states)
  - `--color-kfg-ink: #1A1A1A` — near-black text
  - `--color-kfg-bg-soft: #F7F4EF` — warm off-white sections
- Fonts: `font-serif` → Playfair Display (italic, black weight for headings); `font-sans` → DM Sans (body)
- Most raw hex values are used directly in Tailwind classes (e.g. `text-[#E30613]`) rather than through the token aliases — match the existing style when editing
- Max content width: `max-w-[1280px]` with `mx-auto px-5 md:px-10 xl:px-16`
- Fluid type/spacing: `clamp()` values via Tailwind's arbitrary value syntax

## Images

All images are in `public/assets/`. Next.js `<Image>` is used throughout with `fill` + `sizes` props for responsive loading. Add new food/venue images to `public/assets/` and reference them as `/assets/filename.ext`.
