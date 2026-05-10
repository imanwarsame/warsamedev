# Design System — Iman Warsame Portfolio

## Direction
Innovation at the intersection of product, software, and civil engineering. Charged, expressive, forward-looking. Not a template — a portfolio that feels like an innovation studio built it.

## Palette

### Dark mode
- Base (default bg): `#070d1f` — deep space
- Paper (alternating bg): `#0e1628` — deep navy
- Accent (indigo): `#818cf8`
- Accent (amber): `#fbbf24`
- Accent (cyan): `#22d3ee`
- Text primary: `#f8faff`
- Text secondary: `#94a3b8`
- Text muted: `#64748b`
- Border: `rgba(99, 102, 241, 0.15)`

### Light mode
- Base (default bg): `#f0f4ff` — cool off-white
- Paper (alternating bg): `#ffffff`
- Accent (indigo): `#4f46e5`
- Accent (amber): `#f59e0b`
- Accent (cyan): `#06b6d4`
- Text primary: `#0f172a`
- Text secondary: `#475569`
- Text muted: `#94a3b8`
- Border: `rgba(79, 70, 229, 0.12)`

## Depth Strategy
Surface color shifts only. No shadows. Alternating section backgrounds create rhythm:
- Hero, Technologies, Books: default bg
- About, Projects, Contact: paper bg

## Typography
- Font: Poppins (already installed)
- Headings: `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1.1`
- Name/hero: `clamp(4rem, 9vw, 7.5rem)`, last name in `accent` color
- Section intro text: `font-size: lg`, `line-height: 1.7`, `max-width: 680px`

## Spacing
Base 8px. Scale: 8, 12, 16, 24, 32, 48, 64, 96.

## Section Header Pattern
Replace generic Badge with `SectionLabel` component (`src/components/ui/SectionLabel.tsx`):
- Small mono label: `01 / ABOUT` style
- Sequence: 01 About, 02 Stack, 03 Work, 04 Reading, 05 Connect

## Scroll Element Names
- `about_element` — About section
- `projects_element` — Projects section
- `contact_element` — Contact section

## Card Hover Pattern
Signature hover: `border-color` transitions to accent. No `translateY`. No movement.
```tsx
onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; }}
onMouseLeave={(e) => { e.currentTarget.style.borderColor = border; }}
```

## Discipline Grid (About)
Three disciplines as a bare CSS grid with `border-top` and `border-right` separators. No Paper backgrounds. Just thin indigo-tinted borders, padding, and content.

## Projects Layout
- First 2 projects: `SimpleGrid cols={{ base: 1, sm: 2 }}` with `featured` prop (280px image, title shown in content, 3-line description)
- Remaining: `SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}` compact (180px image, no title in content)

## Contact Layout
Two-column: left 5/12 (info + social links as plain `<a>` tags), right 7/12 (form bare, no Paper wrapper). Footer: simple copyright below a thin border.

## LiquidChrome Colors
- Dark: `[0.04, 0.05, 0.13]`
- Light: `[0.88, 0.9, 0.98]`

## Navbar
Floating glass pill. Desktop shows: About / Work / Contact (scroll) + Articles (route). Mobile shows: Articles + dark toggle only. Scroll links use `scroller.scrollTo()` from `react-scroll`.
