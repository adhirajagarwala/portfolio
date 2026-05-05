# adhirajagarwala.com

Personal portfolio site for Adhiraj Agarwala — ECE student at UIUC focused on embedded systems, digital logic, and hardware-software interfaces.

**Live:** [adhirajagarwala.com](https://adhirajagarwala.com)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Fonts | Inter · JetBrains Mono (via `next/font/google`) |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel — auto-deploys on push to `main` |

## Structure

```
src/
  app/
    globals.css        # design tokens, animations, dot-grid
    layout.tsx         # fonts, metadata, analytics
    page.tsx           # page assembly
    not-found.tsx      # 404 page
    sitemap.ts         # dynamic sitemap for SEO
    robots.ts          # robots.txt
    blog/page.tsx      # writing placeholder
  components/          # one file per section
    Nav.tsx            # sticky nav with scroll-spy + mobile hamburger
    Hero.tsx           # stagger animations, photo, availability badge, resume pill
    About.tsx          # bio + stats grid
    Projects.tsx       # hero card + 2-col grid
    Skills.tsx         # category table
    Experience.tsx     # vertical timeline
    Education.tsx      # vertical timeline
    Writing.tsx        # blog placeholder card
    Contact.tsx        # contact links
    Footer.tsx
    Reveal.tsx         # IntersectionObserver scroll reveal
    SectionHeader.tsx  # reusable section heading pattern
  lib/
    data.ts            # all site content — edit here, nowhere else
public/
  avatar.jpg           # headshot
  resume.pdf           # resume
next.config.ts         # security headers
```

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Editing content

**All written content lives in `src/lib/data.ts`.** No component files need to change for text updates, new projects, or experience entries.

Key fields:

```ts
meta.resume   // set to "/resume.pdf" to show Resume pill in hero
meta.seeking  // availability badge text — set to "" to hide
projects[]    // hidden: true hides a project without deleting it
```

## Deployment

Every push to `main` triggers a Vercel deployment automatically.
Vercel project root is set to `portfolio/` — do not change this.
