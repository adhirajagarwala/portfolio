@AGENTS.md

## Git Identity — Non-Negotiable

Every commit and push in this repo must be authored as:
  Name:  Adhiraj Agarwala
  Email: adhirajagarwala2007@gmail.com

Before the first commit in any session, run:
  git config user.name "Adhiraj Agarwala"
  git config user.email "adhirajagarwala2007@gmail.com"

Rules:
- Never commit without verifying git config user.email is adhirajagarwala2007@gmail.com
- Never add Co-Authored-By, Signed-off-by, or any other author/contributor lines
- The commit author is always and only Adhiraj Agarwala
- No AI tool, assistant, or automated process should appear in commit metadata

---

# Portfolio — Design & Architecture Reference

## Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body/headings) · JetBrains Mono (labels, timestamps, tags, code)
- **Deployment:** Vercel · domain: adhirajagarwala.com
- **Repo:** github.com/adhirajagarwala/portfolio

## Design System — Warm Espresso Dark

### Colors
| Token              | Value       | Usage                                |
|--------------------|-------------|--------------------------------------|
| `#14110e`          | Background  | `body` background                    |
| `#1c1814`          | Surface     | Cards, stat boxes                    |
| `#221e18`          | Surface elevated | Code blocks, tag pills          |
| `#2e2820`          | Border      | Section rule, nav border             |
| `#262218`          | Border subtle | Dividers inside sections           |
| `#ede8dc`          | Text primary | Headings, names, stat values        |
| `#a09080`          | Text muted  | Body copy, descriptions              |
| `#5a4f42`          | Text subtle | Timestamps, labels, inactive nav     |
| `#d4943a`          | Accent (amber) | Section labels, nav AA, links     |
| `rgba(212,148,58,.10)` | Accent muted | Hover states, selection bg      |

### Typography
- **Body / headings:** Inter (`var(--font-inter)`) — 15px, line-height 1.7
- **Mono labels:** JetBrains Mono (`var(--font-jetbrains)`) — 10–12px, uppercase, tracking-wider
- **Section heading size:** text-2xl, font-medium, tracking-tight

### Spacing
- Section padding: `py-20` (80px top + bottom)
- Section anchor offset: `scroll-mt-20` on every `<section>` (clears the 56px fixed nav)
- Max content width: `max-w-3xl mx-auto px-6`

## Component Architecture

```
src/
  app/
    globals.css       ← design tokens (@theme), hero animations, dot-grid, pulse-dot, scrollbar
    layout.tsx        ← Inter + JetBrains Mono, Analytics, SpeedInsights
    page.tsx          ← assembles all sections
    blog/page.tsx     ← writing placeholder page
  components/
    Nav.tsx           ← sticky, backdrop-blur, scroll-spy, mobile hamburger, AA monogram
    Hero.tsx          ← stagger animations (.hero-item-1..5), dot-grid, seeking badge, resume pill
    SectionHeader.tsx ← reusable: "// LABEL" (mono accent) + h2 + 1px rule
    About.tsx         ← bio paragraphs + card-style stats grid (6 stats, multi-value support)
    Projects.tsx      ← LC-3 hero card (code block) + 2-col grid
    Skills.tsx        ← table layout: category (mono) | dot-separated items
    Experience.tsx    ← vertical timeline (left border, date col + content col)
    Education.tsx     ← same timeline layout as Experience
    Writing.tsx       ← placeholder card with blog link
    Contact.tsx       ← contact copy + 3 rows (Email, GitHub, LinkedIn) with SVG icons
    Footer.tsx        ← centered mono: "Adhiraj Agarwala · 2026"
    Reveal.tsx        ← IntersectionObserver scroll reveal (opacity + translateY)
  lib/
    data.ts           ← ALL site content lives here. Edit this to update the site.
```

## Editing Content

**All written content is in `src/lib/data.ts`.** Never hardcode copy in components.

### To add a project
Add an entry to the `projects` array. Set `hidden: true` to hide without deleting.
The **first** non-hidden project renders as the full-width hero card.

### To add your resume
1. Drop the PDF at `public/resume.pdf`
2. In `data.ts` set `meta.resume = "/resume.pdf"`
The Resume pill in the hero renders automatically when this is set.

### To re-enable the MBSE paper
Find its entry in `data.ts`, add the `link` field, set `hidden: false`.

### To update availability
Edit `meta.seeking` in `data.ts`. Set to `""` to hide the badge entirely.

## Animations
- **Scroll reveal:** `.reveal` → `Reveal.tsx` adds `.in-view` via IntersectionObserver
- **Hero stagger:** `.hero-item-1` through `.hero-item-5` (0 / 100 / 200 / 320 / 420ms)
- **Availability badge:** `.pulse-dot` — CSS keyframe, no JS
- **Hero background:** `.dot-grid` — amber-tinted radial-gradient dots
- No framer-motion. No animation libraries.

## Section Header Pattern
```
// ABOUT          ← JetBrains Mono, 11px, #d4943a, uppercase, tracked
About             ← Inter, text-2xl, font-medium, #ede8dc
───────────────   ← 1px, #2e2820
```

## Nav
- Scroll-spy: IntersectionObserver `rootMargin: "-30% 0px -65% 0px"`
- Active link: `#ede8dc` · Inactive: `#5a4f42`
- Mobile: animated hamburger → slide-down dropdown, closes on scroll or link tap
- "Writing" nav link → `/blog` (separate page, not anchor)

## Security Headers (next.config.ts)
Applied to all routes via `headers()`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-DNS-Prefetch-Control: on`

## Deployment
Every push to `main` auto-deploys via Vercel.
- Project root: `portfolio/` (set in Vercel project settings)
- No env vars required
