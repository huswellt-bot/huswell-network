# Design Spec — "Editorial Flat"

The design contract for any future site built in this codebase or from this codebase.
Read this before writing code. The site must look like a print designer made it, not like AI slop.

---

## 1. Identity

**Style:** editorial flat / typography-first minimalism (the Stripe–Linear–Apple school).
Flat surfaces, no depth tricks, type hierarchy carries the design, borders not shadows.

**Master rule:** if a decoration needs a gradient, a blur, or a colored glow, it doesn't go in.

**Litmus test:** every element must pass one question — *"does this help the user complete the task?"*
No → cut it. Whitespace is the design; quiet is a feature.

---

## 2. The Restraint Contract — Palette

Exactly these colors. If it's not in this list, it doesn't render.

| Token | Value | Use |
|---|---|---|
| `white` | `#ffffff` | cards, header, footer |
| `zinc-50` | `#fafafa` | page background |
| `zinc-200` | `#e4e4e7` | hairline borders |
| `zinc-300` | `#d4d4d8` | card hover border, footer separators |
| `zinc-400` | `#a1a1aa` | micro-labels, muted icons |
| `zinc-500` | `#71717a` | secondary text |
| `zinc-600` | `#52525b` | supporting list text (About page) |
| `zinc-700` | `#3f3f46` | body copy, secondary button text |
| `zinc-900` | `#18181b` | primary text |
| `brand` | `#d92b2b` | the only accent — buttons, active states, links |
| `brand-dark` | `#bf2424` | accent hover |

Define as Tailwind v4 tokens: `--color-brand`, `--color-brand-dark` in `@theme`.

**Red discipline:** red appears on primary CTAs, active filter chips, link hover.
Red never appears on: backgrounds, gradients, borders, badges, card chrome.

---

## 3. Type Scale

One family (Inter via `next/font`, `tracking-tight` on display sizes). Typography carries the design.

| Element | Size / weight / tracking |
|---|---|
| Header nav link (About) | 14px / medium / -0.01em |
| Page title (h1) | 40px / semibold / -0.03em |
| Business/card name | 18px / semibold / -0.01em |
| Card tagline | 15px / normal / zinc-500, `line-clamp-3` |
| Micro-label (category etc.) | 11px / medium / uppercase / tracking-wider / zinc-400 |
| Profile name | 28px / semibold / -0.02em |
| Section heading | 13px / semibold / uppercase / tracking-wider / zinc-900 |
| Body copy | 15px / leading-7 / zinc-700 |

---

## 4. Spacing & Shape

- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48. Never arbitrary.
- Section padding: 24–48px. Grid gaps: 16–24px.
- `rounded-lg` on compact elements (buttons, inputs, cards).
- `rounded-2xl` only on large hero elements (cover photo).
- Pills (`rounded-full`) only on buttons and filter chips.
- Structure comes from 1px `border-zinc-200` hairlines — **not shadows.**
- The only shadow in the site: card hover `shadow-sm` (gray, subtle) + 1px lift.

---

## 5. The Ban List (zero tolerance)

- Gradients — backgrounds, text, buttons, borders, overlays, SVG placeholders
- Glow / colored shadows / `shadow-*` tinted with any color
- `backdrop-blur`, glassmorphism, frosted headers
- Decorative blobs, floating shapes, arbitrary SVG flourishes
- Gradient text, text shadows, drop-shadows on icons
- Neon colors, saturated two-color combos, rainbow accents
- Emoji anywhere in UI
- Entrance animations, stagger, parallax, confetti
- Dark mode
- Lorem ipsum — write realistic, specific copy

---

## 6. Allowed Decorations — Complete Inventory

Everything decorative, exhaustively:

1. 1px hairline `zinc-200` borders
2. Card hover: `-translate-y-px` + `shadow-sm` + border darkens to `zinc-300`
3. lucide icons — **only where functional** (search, contact methods, info list)
4. Micro-labels (11px uppercase)
5. `focus-visible` red ring (`ring-brand/40`) for accessibility
6. Hover transitions: color / border / shadow only, `motion-reduce` respected

---

## 7. Component Recipes

**Header** — `sticky top-0 z-10`, 56px (`h-14`), `border-b border-zinc-200 bg-white`, brand logo image left (real Huswell Trading logo, `h-8 w-auto`, transparent PNG on white), About nav link right (14px medium zinc-500, hover zinc-900).
**Footer** — `border-t border-zinc-200 bg-white`, `text-xs zinc-400`, left: "Huswell Trading Supplier Network" + `·` separator + About link (hover zinc-900), right: the promise line.
**Primary button** — `bg-brand text-white rounded-lg h-9 px-4 text-sm font-medium`, hover `bg-brand-dark`, icon + label.
**Secondary button** — white bg, `border-zinc-200`, text zinc-700, hover border-zinc-300.
**Icon button** — 36px square, hairline border, zinc-500 icon, hover zinc-900.
**Card** — white, `rounded-xl` `overflow-hidden`, hairline border, **full-bleed showcase image on top** (4:3, owner-chosen via `featureImage`, subtle `group-hover:scale-[1.03]` zoom), then padded content `p-6`: **identity row** — logo 48px + name 18px only (`items-center`, name `min-w-0 flex-1` so it wraps freely); **tagline 15px spans the full card width** flush with the left padding; **category micro-label as the last quiet line** (11px uppercase zinc-400). Grid: max 3 columns on desktop, `gap-6`. Whole card is one link. **No "Learn more" buttons on cards.**
**Avatar / logo plate** — uniform: `bg-white rounded-full ring-1 ring-zinc-200 object-contain` so logos never blend into white surfaces and wide wordmarks show fully (never rely on file transparency alone): 48px on directory cards, 112/144px (`h-28 w-28 sm:h-36 sm:w-36`) on profile pages where the plate also separates from the cover photo it overlaps.
**Filter chip** — active: red pill white text; inactive: white hairline pill.
**Search input** — `rounded-lg`, hairline border, `focus:border-brand focus:ring-2 focus:ring-brand/40`, lucide search icon left.
**Empty state** — centered, clear message, reset action, no illustrations.
**Details rail** — white card, `divide-y` rows of icon + 11px uppercase label + value.
**Photo rail** — horizontal snap scroll: `flex gap-4 overflow-x-auto pb-2 snap-x snap-proximity`, fixed tiles `w-64 h-64 shrink-0 snap-start rounded-xl`, subtle hover zoom, thin scrollbar (see globals). Unlimited photos — data is just a list of image paths; layout never constrains count.
**Contact row** — removed. Business profiles expose contact via the floating WhatsApp button only; no Call/Email/Website buttons.
**Floating WhatsApp button** — profile pages only: `fixed right-6 bottom-6 z-20`, brand-red pill `rounded-full h-12 px-5`, hand-rolled WhatsApp glyph + "WhatsApp" label, links `wa.me/<number>`, hover `brand-dark`.

---

## 8. Build Rules

- Light mode only. Remove `dark:` variants from templates.
- Inter via `next/font`; `::selection` in brand color.
- Semantic HTML (`nav`, `main`, `section`, `footer`, `dl`), `alt` text on every image.
- `focus-visible` rings everywhere; `motion-reduce` respected.
- Icons: lucide-react only. Brand glyphs (WhatsApp etc.) hand-rolled as flat SVGs — lucide has removed brand icons.
- No shadcn/Radix on static sites — hand-written components, minimal deps.
- Static sites: `output: "export"` + `images: { unoptimized: true }` in `next.config`.
- Metadata: real titles/descriptions per page (`generateMetadata`).