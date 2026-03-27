// src/app/layout.tsx
// Root layout — wraps EVERY page in the app.
//
// In Next.js App Router, layout.tsx files define shared UI that persists
// across page navigations. This root layout is the outermost wrapper:
// it sets the HTML <head> metadata, loads fonts, and renders the
// Navbar + Footer that appear on all pages.
//
// SERVER COMPONENT (no "use client"):
// Layout doesn't need interactivity, so it runs on the server by default.
// This means the HTML arrives pre-rendered — better for SEO and faster
// Time to First Byte (TTFB).
//
// METADATA OBJECT:
// Next.js reads the exported `metadata` object and injects the values
// into <head> automatically. No need for next/head or <Helmet>.
// This generates: <title>, <meta name="description">, Open Graph tags, etc.
// Open Graph tags are what social media platforms (LinkedIn, Twitter, etc.)
// read when generating link previews.

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Load the Inter font from Google Fonts.
// next/font/google downloads the font at BUILD TIME and self-hosts it —
// no runtime requests to Google's CDN, no privacy concerns, faster loading.
// The `variable` option injects a CSS custom property (--font-inter)
// that tailwind.config.ts references in fontFamily.sans.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  // Only load the weights we actually use — smaller font bundle
  weight: ['400', '500', '600', '700', '800'],
  // display: 'swap' shows a fallback font until Inter loads (no invisible text flash)
  display: 'swap',
})

// SEO and social sharing metadata
// Next.js injects all of this into the <head> of every page
export const metadata: Metadata = {
  // title.template: "%s" is replaced by each page's title.
  // e.g., a page that sets title: "Projects" would render: "Projects | Aryan Verma"
  // title.default: used when a page doesn't set its own title
  title: {
    template: '%s | Aryan Verma',
    default: 'Aryan Verma — CS Graduate & AI Enthusiast',
  },
  description:
    'Portfolio of Aryan Verma, Computer Science graduate from Michigan State University. Passionate about AI, Machine Learning, and full-stack development.',
  keywords: [
    'Aryan Verma',
    'CS Portfolio',
    'Michigan State University',
    'Computer Science',
    'AI',
    'Machine Learning',
    'Software Engineer',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Aryan Verma' }],
  // canonical URL — helps search engines avoid duplicate content issues
  // Update this once deployed to your actual Netlify domain
  metadataBase: new URL('https://aryanverma30.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aryan Verma — CS Graduate & AI Enthusiast',
    description:
      'Portfolio of Aryan Verma, Computer Science graduate from Michigan State University.',
    siteName: 'Aryan Verma Portfolio',
  },
  // robots: tells search engine crawlers what to do with this page
  robots: {
    index: true,    // Include in search index
    follow: true,   // Follow links on this page
  },
}

// RootLayout receives `children` — the current page component.
// Next.js automatically passes the correct page into children based on the URL.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // lang="en" is required for accessibility — screen readers use this
    // to determine the language for pronunciation
    <html lang="en" className={inter.variable}>
      {/*
        inter.variable injects the CSS custom property:
          --font-inter: 'Inter', sans-serif
        Tailwind then uses this via: fontFamily: { sans: ['var(--font-inter)'] }
        So every element that inherits font-family uses Inter automatically.
      */}
      <body className="min-h-screen flex flex-col">
        {/* Navbar is outside main so it's fixed above the content flow */}
        <Navbar />

        {/* <main> is the semantic landmark for the page's primary content.
            pt-16 accounts for the fixed navbar height (4rem = 64px). */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
