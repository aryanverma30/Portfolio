# Aryan Verma — Portfolio Context

This file is read by Claude Code at the start of every session in this directory.
It provides full context so you never need to re-explain the project.

---

## Project Overview

**What it is:** Personal portfolio website — single-page app with 5 sections.
**Deployed to:** Netlify (existing site connected to this GitHub repo)
**GitHub:** https://github.com/aryanverma30/Portfolio
**Working directory:** `/Users/aryanverma/Documents/Portfolio`

---

## Owner

| Field       | Value                                          |
|-------------|------------------------------------------------|
| Name        | Aryan Verma                                    |
| Education   | Michigan State University — B.S. Computer Science |
| Interests   | Artificial Intelligence, Machine Learning, Big Data |
| Email       | vermaary@msu.edu                              |
| LinkedIn    | linkedin.com/in/aryan-verma30                 |
| Facebook    | facebook.com/profile.php?id=100037927936684   |
| Hobbies     | Basketball (since age 2, varsity HS), working out, coding |
| Fun fact    | First in family born and raised in the US     |

---

## Tech Stack

| Layer       | Tool                      | Version  |
|-------------|---------------------------|----------|
| Framework   | Next.js (App Router)      | ^15      |
| Language    | TypeScript                | ^5       |
| Styling     | Tailwind CSS              | ^3       |
| Animations  | Framer Motion             | ^11      |
| Icons       | Lucide React              | latest   |
| Deployment  | Netlify                   | —        |
| Build       | @netlify/plugin-nextjs    | ^5       |

### Dependencies (= requirements.txt equivalent for Node.js)
All dependencies are in `package.json`. Install them with `npm install`.

**Runtime deps (`dependencies`):**
- `next` — The React framework
- `react`, `react-dom` — React core
- `framer-motion` — Animation library (scroll reveals, hover effects, transitions)
- `lucide-react` — Icon library (tree-shakable SVG icons)
- `clsx` — Conditionally join class names
- `tailwind-merge` — Resolve conflicting Tailwind classes

**Dev deps (`devDependencies`):**
- `typescript` + `@types/*` — TypeScript language and type definitions
- `tailwindcss`, `autoprefixer`, `postcss` — Tailwind CSS build toolchain
- `eslint`, `eslint-config-next` — Code quality linting
- `@netlify/plugin-nextjs` — Enables SSR and image optimization on Netlify

---

## Architecture

### Page structure (single-page, all sections on `/`)
```
Hero → About → Skills → Projects → Contact
```

### File map
```
src/
├── app/
│   ├── layout.tsx        Root layout: Inter font, metadata, Navbar + Footer
│   ├── page.tsx          Assembles all sections in order
│   ├── globals.css       Tailwind directives + base styles + custom utilities
│   └── not-found.tsx     Custom 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    Sticky scroll-aware navbar with mobile drawer
│   │   └── Footer.tsx    Social links + copyright
│   ├── sections/
│   │   ├── HeroSection.tsx     Full-screen hero with typewriter
│   │   ├── AboutSection.tsx    Photo stack + personal story + info cards
│   │   ├── SkillsSection.tsx   Categorized skill badges with stagger animation
│   │   ├── ProjectsSection.tsx Project cards or empty-state placeholder
│   │   └── ContactSection.tsx  Contact cards + resume download
│   └── ui/
│       ├── SectionHeader.tsx   Reusable gradient title + animated underline
│       ├── GradientButton.tsx  CTA button (primary/ghost variants)
│       ├── SkillBadge.tsx      Colored skill pill badge
│       └── ProjectCard.tsx     Project card with hover lift animation
├── data/
│   ├── projects.ts       Project[] — currently empty, add entries here
│   └── skills.ts         SkillCategory[] — 5 categories of skill badges
└── lib/
    └── utils.ts          cn() helper (clsx + tailwind-merge)
```

---

## Color Palette

| Token         | Hex       | Usage                              |
|---------------|-----------|------------------------------------|
| `navy`        | `#0a0f1e` | Page background                    |
| `card-bg`     | `#111827` | Card surfaces                      |
| `card-hover`  | `#1e2a3a` | Card hover state                   |
| `divider`     | `#1f2937` | Borders and dividers               |
| `text-primary`| `#f8fafc` | Headings and important text        |
| `text-secondary`|`#94a3b8`| Body copy                          |
| `text-muted`  | `#64748b` | Labels, captions                   |
| `accent`      | `#6366f1` | Indigo — primary brand color       |
| `accent-2`    | `#8b5cf6` | Violet — gradient end              |
| `accent-hover`| `#a78bfa` | Hover state                        |
| `available`   | `#10b981` | Emerald — "available" indicator    |

Font: **Inter** (loaded via `next/font/google` in layout.tsx)

---

## How to Add a Project

1. Open `src/data/projects.ts`
2. Add an object to the `projects` array:
```typescript
{
  id: 'my-project',          // unique slug
  title: 'My Project',
  description: 'What it does in 1-2 sentences.',
  image: '/images/my-image.png',  // put image in public/images/
  tags: ['Python', 'React'],
  githubUrl: 'https://github.com/aryanverma30/my-project',  // optional
  liveUrl: 'https://demo.example.com',                       // optional
  featured: true,
}
```
3. Drop the image in `public/images/`
4. That's it — no other files need to change.

---

## Deploy Workflow

```
Edit code → npm run build (verify) → git commit → git push origin main → Netlify auto-deploys
```

Netlify is connected to the `main` branch of the GitHub repo.
Every push to `main` triggers an automatic build and deploy.

---

## Commit Convention

| Prefix     | When to use                              |
|------------|------------------------------------------|
| `feat:`    | New feature or component                 |
| `fix:`     | Bug fix                                  |
| `style:`   | Visual / UI changes (no logic change)    |
| `content:` | Updating text, adding projects/skills    |
| `chore:`   | Config, dependencies, tooling            |
| `docs:`    | Comments, README, CLAUDE.md updates      |

Example: `content: add machine-learning-project to projects.ts`

---

## Common Commands

```bash
npm run dev        # Start local dev server at http://localhost:3000
npm run build      # Build for production (run before pushing)
npm run type-check # Check TypeScript types without building
npm run lint       # Run ESLint
```
