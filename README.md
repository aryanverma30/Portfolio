# Aryan Verma — Portfolio

Personal portfolio website built with Next.js.

**Live:** https://aryanverma30.netlify.app  
**GitHub:** https://github.com/aryanverma30/Portfolio

---

## Tech Stack

| Layer      | Tool                        |
| ---------- | --------------------------- |
| Framework  | Next.js 15 (App Router)     |
| Language   | TypeScript                  |
| Styling    | Tailwind CSS                |
| Animations | Framer Motion               |
| Deployment | Netlify                     |

---

## Project Layout

```
src/
├── app/
│   ├── layout.tsx          Root layout — font, metadata, Navbar + Footer
│   ├── page.tsx            Composes all sections in order
│   ├── globals.css         Tailwind directives and global styles
│   └── not-found.tsx       Custom 404 page
├── components/
│   ├── layout/             Navbar, Footer
│   ├── sections/           One file per page section (Hero → Contact)
│   └── ui/                 Reusable primitives (buttons, badges, cards)
├── data/
│   ├── projects.ts         Project data — add new projects here
│   └── skills.ts           Skill categories
└── lib/
    └── utils.ts            cn() helper (clsx + tailwind-merge)
```

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run type-check # TypeScript check
```
