@AGENTS.md

# Portfolio — Design & Architecture Reference

## Stack
- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body/headings) · JetBrains Mono (labels, timestamps, tags, code)
- **Deployment:** Vercel · domain: adhirajagarwala.com
- **Repo:** github.com/adhirajagarwala/portfolio

## Design System

### Colors
| Token              | Value                        | Usage                        |
|--------------------|------------------------------|------------------------------|
| `#0a0a0a`          | Background                   | `body` background            |
| `#111111`          | Surface                      | Cards, stat boxes            |
| `#1a1a1a`          | Surface elevated             | Code blocks, tag pills       |
| `#222222`          | Border                       | Section rule, nav border     |
| `#f0f0f0`          | Text primary                 | Headings, names, values      |
| `#666666`          | Text muted                   | Body copy, descriptions      |
| `#444444`          | Text subtle                  | Timestamps, labels, mono     |
| `#E8A838`          | Accent (amber)               | Section labels, nav AA, links|
| `rgba(232,168,56,.12)` | Accent muted             | Hover states, selection bg   |

### Typography
- **Body / headings:** Inter (`var(--font-inter)`) — 15px, line-height 1.7
- **Mono labels:** JetBrains Mono (`var(--font-jetbrains)`) — 10–12px, uppercase, tracking-wider
- **Section heading size:** text-2xl, font-medium, tracking-tight

### Spacing
- Section padding: `py-32` (128px top + bottom)
- Max content width: `max-w-3xl mx-auto px-6`
- Min vertical gap between sections: 120px (enforced by `py-32`)

## Component Architecture

```
src/
  app/
    globals.css       ← design tokens (@theme), hero animations, dot-grid, scrollbar
    layout.tsx        ← Inter + JetBrains Mono via next/font/google
    page.tsx          ← assembles all sections; no border dividers between them
    blog/page.tsx     ← placeholder writing page
  components/
    Nav.tsx           ← sticky, backdrop-blur, scroll-spy active state, AA monogram in accent
    Hero.tsx          ← stagger animations (.hero-item-1..4), dot-grid bg, pill links + SVG icons
    SectionHeader.tsx ← reusable: "// LABEL" (mono accent) + h2 heading + 1px rule
    About.tsx         ← bio paragraphs + card-style stats grid (6 stats)
    Projects.tsx      ← LC-3 hero card (full-width, inline code block) + 2-col grid
    Skills.tsx        ← table layout: category (mono) | comma-separated items
    Experience.tsx    ← vertical timeline (left border line, date col + content col)
    Education.tsx     ← same timeline layout as Experience
    Writing.tsx       ← placeholder card with blog link
    Contact.tsx       ← "Reach out." + 3 rows (Email, GitHub, LinkedIn) with SVG icons
    Footer.tsx        ← centered mono: "Adhiraj Agarwala · 2026"
    Reveal.tsx        ← IntersectionObserver scroll reveal (opacity + translateY)
  lib/
    data.ts           ← ALL site content lives here. Edit this to update the site.
```

## Editing Content

**All written content is in `src/lib/data.ts`.** You do not need to touch any component file to update text, add a project, or change an experience entry.

### To add a project
Add an entry to the `projects` array. Set `hidden: true` to hide it without deleting.
The **first** non-hidden project is always rendered as the hero card in Projects.tsx.

### To re-enable the MBSE paper
Find its entry in `data.ts`, add the `link` field, and set `hidden: false`.

### To add skills
Edit the `skills` array. Each group is `{ category: string, items: string[] }`.

### To add experience
Add to the `experience` array. IEM (Illini Electric Motorsports) is pinned first.

## Animations
- **Scroll reveal:** `.reveal` class → `Reveal.tsx` adds `.in-view` via IntersectionObserver
- **Hero stagger:** `.hero-item-1` through `.hero-item-4` use `animation-delay` (0/100/200/320ms)
- **Hero background:** `.dot-grid` class — radial-gradient dots at ~4.5% opacity
- **Project card hover:** `hover:-translate-y-0.5 transition-transform duration-200`
- No framer-motion. No heavy animation libraries.

## Section Header Pattern
Every section uses `<SectionHeader label="about" heading="About" />` which renders:
```
// ABOUT          ← JetBrains Mono, 11px, amber, uppercase, tracked
About             ← Inter, text-2xl, font-medium, #f0f0f0
───────────────   ← 1px, #222222
```

## Nav Scroll-Spy
Nav.tsx uses IntersectionObserver with `rootMargin: "-30% 0px -65% 0px"` to detect
which section is active. Active link is `text-[#f0f0f0]`; inactive is `text-[#666]`.
The "Writing" nav link goes to `/blog`, not an anchor.

## Deployment
Every push to `main` auto-deploys via Vercel.
- Project root: `portfolio/` (set in Vercel project settings)
- No env vars required currently
