# Aryan Verma — Portfolio

Personal portfolio website built with Next.js — a single-page app showcasing skills, projects, and
contact info.

**Live site:** https://aryanverma30.netlify.app/#hero

---

## Tech Stack

| Layer      | Tool                               | Version |
| ---------- | ---------------------------------- | ------- |
| Framework  | Next.js (App Router)               | ^15     |
| Language   | TypeScript                         | ^5      |
| Styling    | Tailwind CSS                       | ^3      |
| Animations | Framer Motion                      | ^11     |
| Icons      | Lucide React                       | latest  |
| Deployment | Netlify + `@netlify/plugin-nextjs` | —       |

### Runtime Dependencies

| Package                      | Purpose                                         |
| ---------------------------- | ----------------------------------------------- |
| `next`, `react`, `react-dom` | Core framework                                  |
| `framer-motion`              | Scroll reveals, hover effects, page transitions |
| `lucide-react`               | Tree-shakable SVG icon set                      |
| `clsx`                       | Conditional class name joining                  |
| `tailwind-merge`             | Resolve conflicting Tailwind utility classes    |

---

## Project Layout

```
src/
├── app/
│   ├── layout.tsx          Root layout — Inter font, metadata, Navbar + Footer
│   ├── page.tsx            Assembles all sections in order on the home route
│   ├── globals.css         Tailwind directives, base styles, custom utilities
│   └── not-found.tsx       Custom 404 page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      Sticky, scroll-aware navbar with mobile drawer
│   │   └── Footer.tsx      Social links and copyright
│   │
│   ├── sections/           One file per page section (rendered in page.tsx)
│   │   ├── HeroSection.tsx       Full-screen intro with typewriter effect
│   │   ├── AboutSection.tsx      Photo stack, personal story, info cards
│   │   ├── SkillsSection.tsx     Categorized skill badges with stagger animation
│   │   ├── ProjectsSection.tsx   Project cards (or "Coming Soon" placeholder)
│   │   └── ContactSection.tsx    Contact cards + resume download button
│   │
│   └── ui/                 Reusable primitives shared across sections
│       ├── SectionHeader.tsx     Gradient title + animated underline
│       ├── GradientButton.tsx    CTA button — primary and ghost variants
│       ├── SkillBadge.tsx        Colored skill pill badge
│       └── ProjectCard.tsx       Project card with hover lift animation
│
├── data/
│   ├── projects.ts         Project[] array — add new projects here
│   └── skills.ts           SkillCategory[] array — 5 skill categories
│
└── lib/
    └── utils.ts            cn() helper (clsx + tailwind-merge)
```
