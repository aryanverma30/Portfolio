// tailwind.config.ts
// Tailwind CSS configuration. This file does two things:
//   1. Tells Tailwind WHERE to look for class names (the `content` array)
//   2. Extends the default design system with our custom tokens (the `theme.extend` object)
//
// HOW TAILWIND WORKS:
// Tailwind scans your source files at build time, finds every class name you used
// (e.g. "text-indigo-500", "bg-slate-900"), and generates only those CSS rules.
// This means zero unused CSS ships to production.
//
// UTILITY-FIRST APPROACH:
// Instead of writing `.hero-title { font-size: 4.5rem; color: white; }` in a CSS file,
// you write the styles directly in JSX: `<h1 className="text-7xl text-white">`.
// This keeps styles co-located with markup and prevents CSS file bloat.

import type { Config } from 'tailwindcss'

const config: Config = {
  // content: The files Tailwind should scan for class names.
  // Any class used in these files will be included in the final CSS bundle.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // Custom color palette — extends Tailwind's defaults rather than replacing them.
      // After this, you can use classes like `bg-navy`, `text-accent`, `border-accent-2`.
      colors: {
        // Page background — deep navy black
        navy: '#0a0f1e',
        // Card surfaces
        'card-bg': '#111827',
        'card-hover': '#1e2a3a',
        // Borders and dividers
        divider: '#1f2937',
        // Text hierarchy
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
        // Accent gradient — indigo to violet (used on headings, buttons, borders)
        accent: '#6366f1',
        'accent-2': '#8b5cf6',
        'accent-hover': '#a78bfa',
        // Available / success indicator
        available: '#10b981',
      },

      // Custom font family — maps to the CSS variable injected by next/font/google.
      // `var(--font-inter)` is set in layout.tsx when the Inter font is loaded.
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },

      // Custom keyframe animations used in HeroSection background mesh.
      // These run entirely in CSS — no JavaScript needed, no performance cost.
      keyframes: {
        // Slowly drifts a gradient blob around the screen for the hero background
        'gradient-drift': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(3%, -3%) scale(1.05)' },
          '66%': { transform: 'translate(-2%, 2%) scale(0.97)' },
        },
        // Fade in + slide up — used for staggered section entrances
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        'gradient-drift': 'gradient-drift 12s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },

  plugins: [],
}

export default config
