'use client'
// src/components/layout/Navbar.tsx
//
// The navigation bar that appears at the top of every page.
//
// WHY "use client"?
// In Next.js App Router, components are Server Components by default — they render
// on the server and send plain HTML to the browser (fast, good for SEO).
// But this navbar needs to:
//   1. Listen to scroll events (window.addEventListener) — browser-only API
//   2. Track state (isScrolled, isMenuOpen) — requires React hooks
// Both of these require a client-side component, so we add "use client" at the top.
//
// BEHAVIOR:
// - Desktop: transparent background over the hero → frosted-glass when scrolled
// - Mobile: hamburger icon that opens/closes a full-width slide-down drawer
// - Active section highlighting via IntersectionObserver
//
// FRAMER MOTION:
// motion.div, motion.nav, AnimatePresence are from the framer-motion library.
// They let us declaratively describe animations with props like:
//   initial={{ opacity: 0 }} — starting state (invisible)
//   animate={{ opacity: 1 }} — target state (fully visible)
//   exit={{ opacity: 0 }}    — state when the element is removed from DOM
// Framer Motion handles all the interpolation (tweening) between these states.

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// Navigation link definitions — edit this array to change the nav items.
// `href` uses anchor links (#about, #skills, etc.) because this is a single-page app.
const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  // isScrolled: true once the user scrolls past 50px.
  // Controls the navbar background (transparent → frosted glass).
  const [isScrolled, setIsScrolled] = useState(false)

  // isMenuOpen: controls the mobile hamburger drawer visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect runs AFTER the component mounts in the browser.
  // This is where we attach the scroll event listener.
  // The empty dependency array [] means "run once on mount, clean up on unmount."
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 50px, show the frosted glass background
      setIsScrolled(window.scrollY > 50)
    }

    // Attach the listener to the window scroll event
    window.addEventListener('scroll', handleScroll)

    // Cleanup function: removes the event listener when the Navbar unmounts.
    // Without this, the listener would persist as a memory leak.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    // <header> is a semantic HTML5 element that tells browsers (and screen readers)
    // this is the page header. Better than a plain <div> for accessibility and SEO.
    <header
      className={cn(
        // Always: fixed position, full width, top of the page, high z-index
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        // Conditional: add frosted glass effect once scrolled
        isScrolled
          ? 'bg-navy/80 backdrop-blur-md border-b border-divider shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      {/* Inner container: max-width constraint + horizontal padding */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ---- LOGO / BRAND ---- */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            {/* Code2 is a Lucide icon — a "</>" symbol that signals developer identity */}
            <Code2 className="w-6 h-6 text-accent group-hover:text-accent-hover transition-colors" />
            <span className="font-bold text-text-primary group-hover:gradient-text transition-all">
              Aryan Verma
            </span>
          </a>

          {/* ---- DESKTOP NAVIGATION (hidden on mobile) ---- */}
          {/* md:flex means: hidden by default, flex layout on medium screens and up */}
          <div className="hidden md:flex items-center gap-8">
            {/* Map over NAV_LINKS to render each link — DRY (Don't Repeat Yourself) */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary hover:text-accent transition-colors text-sm font-medium relative group"
              >
                {link.label}
                {/* Animated underline on hover — grows from 0 to full width */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Resume download button — styled differently to draw attention */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* ---- MOBILE HAMBURGER BUTTON (hidden on desktop) ---- */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            // aria-expanded tells screen readers whether the menu is open
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {/* Swap icon based on menu state — Menu (☰) or X (✕) */}
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ---- MOBILE DRAWER ----
          AnimatePresence enables exit animations.
          Without it, React just removes the element instantly — no animation.
          With it, Framer Motion plays the `exit` animation before removal. */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // initial: the starting state before the animation begins
            initial={{ opacity: 0, height: 0 }}
            // animate: the target state the animation moves toward
            animate={{ opacity: 1, height: 'auto' }}
            // exit: the state when this element is removed (isMenuOpen becomes false)
            exit={{ opacity: 0, height: 0 }}
            // transition: controls timing — 0.3s with ease-in-out curve
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-card-bg border-b border-divider overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-text-secondary hover:text-accent transition-colors py-2 text-sm font-medium border-b border-divider last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block mt-3 px-4 py-2 rounded-lg border border-accent text-accent text-center text-sm font-medium hover:bg-accent hover:text-white transition-all"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
