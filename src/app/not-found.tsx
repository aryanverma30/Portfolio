// src/app/not-found.tsx
// Custom 404 page — shown when a user visits a URL that doesn't exist.
//
// Next.js automatically uses this file for 404 responses.
// Without it, Next.js shows a generic default 404 page that doesn't match
// your site's design. This page keeps the same dark theme and visual language.
//
// SERVER COMPONENT — no interactivity needed here.

import Link from 'next/link'
import { Code2, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">

      {/* Large 404 display */}
      <div className="text-8xl font-extrabold gradient-text mb-4 select-none">
        404
      </div>

      {/* Icon */}
      <Code2 className="w-12 h-12 text-accent/40 mb-6" />

      <h1 className="text-2xl font-bold text-text-primary mb-3">
        Page Not Found
      </h1>

      <p className="text-text-secondary text-sm max-w-sm mb-8">
        Looks like this URL doesn&apos;t exist. Let&apos;s get you back to the portfolio.
      </p>

      {/*
        Link from next/link is Next.js's client-side navigation component.
        It prefetches the target page in the background so navigation feels instant.
        Use <Link> for internal routes; use <a> for external URLs.
      */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                   bg-gradient-to-r from-accent to-accent-2 text-white font-medium
                   hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-accent/25"
      >
        <Home className="w-4 h-4" />
        Back to Portfolio
      </Link>

    </div>
  )
}
