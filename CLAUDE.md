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
- **Deployment:** Vercel · domain: adhirajagarwala.com · auto-deploys on push to `main`
- **Repo:** github.com/adhirajagarwala/portfolio
- **Analytics:** Vercel Analytics + Speed Insights (both wired into `layout.tsx`)

## Design System — Warm Espresso Dark

### Colors
| Value       | Role                                    | Where used                              |
|-------------|-----------------------------------------|-----------------------------------------|
| `#14110e`   | Background                              | `body`, page bg                         |
| `#1c1814`   | Surface                                 | Cards, stat boxes, hero card            |
| `#221e18`   | Surface elevated                        | Code blocks, tag pills                  |
| `#0e0c09`   | Surface deep                            | Code block in LC-3 hero card            |
| `#2e2820`   | Border                                  | Section rules, nav border, card borders |
| `#262218`   | Border subtle                           | Dividers inside sections (Skills)       |
| `#ede8dc`   | Text primary                            | Headings, names, stat values, nav active|
| `#a09080`   | Text muted                              | Body copy, descriptions, contact text   |
| `#5a4f42`   | Text subtle                             | Timestamps, labels, inactive nav links  |
| `#6b5d4e`   | Text dim                                | Org names under project titles          |
| `#7a6b58`   | Tag text                                | Project tag pill text                   |
| `#252018`   | Tag bg                                  | Project tag pill background             |
| `#d4943a`   | Accent amber                            | Section labels, nav AA, links, badges   |
| `rgba(212,148,58,.10)` | Accent muted               | Selection bg                            |
| `#3a3028`   | Scrollbar thumb                         | Webkit scrollbar                        |

All these values are defined as CSS tokens in `src/app/globals.css` under `@theme inline`.

### Typography
- **Body / headings:** Inter (`var(--font-inter)`) — 15px, line-height 1.7
- **Mono labels:** JetBrains Mono (`var(--font-jetbrains)`) — 10–12px, uppercase, tracking-wider
- **Section heading size:** `text-2xl`, `font-medium`, `tracking-tight`

### Spacing
- Section padding: `py-20`
- Section anchor offset: `scroll-mt-20` on every `<section>` (clears 56px fixed nav)
- Max content width: `max-w-3xl mx-auto px-6`

## File Map

```
src/
  app/
    globals.css        ← CSS tokens (@theme inline), animations, dot-grid, pulse-dot, scrollbar
    layout.tsx         ← Inter + JetBrains Mono fonts, full metadata (OG, Twitter, canonical,
                          robots, keywords), color-scheme dark, Analytics, SpeedInsights
    page.tsx           ← Assembles all section components in order
    not-found.tsx      ← Styled 404 page (matches site theme)
    sitemap.ts         ← Dynamic sitemap.xml for SEO
    robots.ts          ← robots.txt (allows all, points to sitemap)
    blog/page.tsx      ← Writing section placeholder page with canonical meta
  components/
    Nav.tsx            ← Sticky, backdrop-blur, scroll-spy (IntersectionObserver),
                          mobile hamburger (animated bars → X, slide-down dropdown)
    Hero.tsx           ← Photo (circular, amber ring), stagger animations (.hero-item-1..5),
                          dot-grid bg, availability badge with pulse dot, resume pill
    SectionHeader.tsx  ← Reusable: "// LABEL" (mono accent) + h2 + 1px rule
    About.tsx          ← Bio paragraphs + card-style stats grid (multi-value cell support)
    Projects.tsx       ← LC-3 hero card (full-width, code block) + 2-col grid with "GitHub ↗"
    Skills.tsx         ← Table: Hardware → Languages → Software → Other
    Experience.tsx     ← Vertical timeline (left line, date col, content col)
    Education.tsx      ← Same timeline layout as Experience
    Writing.tsx        ← Placeholder card linking to /blog
    Contact.tsx        ← Specific contact copy + 3 rows (Email, GitHub, LinkedIn) + SVG icons
    Footer.tsx         ← Centred mono: "Adhiraj Agarwala · 2026"
    Reveal.tsx         ← IntersectionObserver scroll reveal; viewport-checks on mount
                          so sections already in view don't stay invisible
  lib/
    data.ts            ← ALL site content. Never hardcode copy in components.
public/
  avatar.jpg           ← Headshot (600×600px, processed)
  resume.pdf           ← Resume PDF
next.config.ts         ← Security headers (CSP, HSTS, X-Frame-Options, etc.)
```

## Editing Content

All content lives in `src/lib/data.ts`. Component files never hardcode copy.

### Key fields in `meta`

| Field       | Effect                                                          |
|-------------|-----------------------------------------------------------------|
| `resume`    | Set to `"/resume.pdf"` to show Resume pill in hero. `""` hides it. |
| `seeking`   | Availability badge text. `""` removes the badge entirely.      |
| `linkedin`  | Used in both Hero pills and Contact section.                   |

### Projects

- `projects[0]` always renders as the full-width hero card
- `hidden: true` hides a project without deleting it
- Once MBSE paper link is available: add `link`, set `hidden: false`
- Once LC-3 repo is public: confirm link at `https://github.com/adhirajagarwala/lc3-assembler`

### Adding a blog post

1. Create a route at `src/app/blog/[slug]/page.tsx`
2. Add the post to the `posts` array in `src/app/blog/page.tsx` (template is in the comments)
3. Update `sitemap.ts` to include the new URL

## Animations

- **Scroll reveal:** `.reveal` → `Reveal.tsx` adds `.in-view` via IntersectionObserver. Viewport-checks on mount prevent off-screen sections from staying hidden when jumping to anchors.
- **Hero stagger:** `.hero-item-1` through `.hero-item-5` (delays: 0 / 100 / 200 / 320 / 420ms)
- **Availability badge:** `.pulse-dot` — pure CSS keyframe animation, no JS
- **Hero background:** `.dot-grid` — amber-tinted radial-gradient dots (`rgba(212,148,58,0.18)`)
- **Mobile nav:** Hamburger bars animate to X via CSS `rotate` and `translate`. Dropdown uses `max-h` transition. Closes on scroll via one-shot scroll listener.
- No framer-motion. No animation libraries.

## Section Header Pattern

```
// ABOUT          ← JetBrains Mono, 11px, #d4943a, uppercase, tracking-widest
About             ← Inter, text-2xl, font-medium, #ede8dc, tracking-tight
───────────────   ← h-px, #2e2820
```

## Nav Scroll-Spy

Uses `IntersectionObserver` with `rootMargin: "-30% 0px -65% 0px"`.
Active link: `#ede8dc` · Inactive: `#5a4f42` · Hover: `#ede8dc`
"Writing" links to `/blog` (separate page). All others are `#anchor` links.

## Security Headers (`next.config.ts`)

Applied to all routes:

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `X-DNS-Prefetch-Control` | `on` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | See `next.config.ts` for full value |

## Deployment

- Push to `main` → Vercel auto-deploys
- Vercel project root: `portfolio/` (do not change)
- No environment variables required
- Analytics and Speed Insights active on production only (Vercel injects the environment flag)
