'use client'
// src/components/sections/HeroSection.tsx
//
// The first thing visitors see — full-screen hero with animated intro.
//
// ANIMATION SEQUENCE (staggered with delays):
//   0ms:   "Hi, I'm" greeting fades in
//   150ms: Name slides up with gradient text
//   300ms: Typewriter role cycling begins
//   600ms: Bio paragraph fades in
//   800ms: CTA buttons appear
//   1100ms: Scroll indicator bounces in
//
// TYPEWRITER EFFECT:
// Uses a combination of React state + useEffect to cycle through an array of
// role strings, building each one character-by-character then erasing it.
// No library needed — just setInterval and string slicing.
//
// BACKGROUND:
// CSS gradient orbs with `animate-gradient-drift` keyframes (defined in tailwind.config.ts).
// These are absolutely positioned divs with blur and low opacity — they create a soft
// glowing mesh effect without any JavaScript or canvas drawing.

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import GradientButton from '@/components/ui/GradientButton'

// The roles that cycle in the typewriter — update these to match your current career stage
const ROLES = [
  'CS Graduate',
  'AI Enthusiast',
  'Software Engineer',
  'Data Engineer',
  'Problem Solver',
]

// Typewriter timing constants (in milliseconds)
const TYPE_SPEED   = 80   // ms per character when typing forward
const ERASE_SPEED  = 40   // ms per character when erasing (faster feels snappier)
const PAUSE_TYPED  = 2000 // pause after fully typing a role before erasing
const PAUSE_ERASED = 500  // pause after fully erasing before typing the next role

export default function HeroSection() {
  // displayText: the currently visible portion of the role string
  const [displayText, setDisplayText] = useState('')
  // roleIndex: which role in the ROLES array we're currently showing
  const [roleIndex, setRoleIndex] = useState(0)
  // isErasing: whether we're in the erase phase (true) or type phase (false)
  const [isErasing, setIsErasing] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex]

    // Determine the delay based on current phase
    const delay = isErasing ? ERASE_SPEED : TYPE_SPEED

    const timer = setTimeout(() => {
      if (!isErasing) {
        // TYPING PHASE: add one character to displayText
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          // Finished typing — pause then start erasing
          setTimeout(() => setIsErasing(true), PAUSE_TYPED)
        }
      } else {
        // ERASING PHASE: remove one character from displayText
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          // Finished erasing — pause then move to next role
          setTimeout(() => {
            setIsErasing(false)
            setRoleIndex((prev) => (prev + 1) % ROLES.length)
          }, PAUSE_ERASED)
        }
      }
    }, delay)

    // Cleanup: clear the timeout if the component re-renders before it fires.
    // This prevents multiple timers from running simultaneously.
    return () => clearTimeout(timer)
  }, [displayText, isErasing, roleIndex])

  return (
    // <section> with id="hero" — the Navbar logo links to #hero to scroll back to top
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >

      {/* ---- ANIMATED BACKGROUND ORBS ----
          These are blurred, semi-transparent gradient circles.
          `animate-gradient-drift` (from tailwind.config.ts) slowly moves them around.
          `pointer-events-none` ensures they don't interfere with clicks.
          `aria-hidden` hides them from screen readers (purely decorative). */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Top-left orb — indigo */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-gradient-drift" />
        {/* Center-right orb — violet */}
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-accent-2/15 blur-3xl animate-gradient-drift [animation-delay:4s]" />
        {/* Bottom-center orb — indigo, smaller */}
        <div className="absolute -bottom-20 left-1/2 w-64 h-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-gradient-drift [animation-delay:8s]" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ---- HERO CONTENT ---- */}
      {/* max-w-4xl: constrains line length for readability */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Available for opportunities
        </motion.div>

        {/* Main name heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          // delay: 0.15s — staggers after the greeting badge
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
        >
          {/* Plain text first line */}
          <span className="text-text-primary">Hi, I&apos;m </span>
          {/* Gradient text for the name — the brand color treatment */}
          <span className="gradient-text">Aryan Verma</span>
        </motion.h1>

        {/* Typewriter role line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6 h-10 flex items-center justify-center"
        >
          {/* The cursor blink animation is CSS-only — no JS needed */}
          <span>{displayText}</span>
          <span className="ml-1 inline-block w-0.5 h-7 bg-accent animate-pulse" aria-hidden="true" />
        </motion.div>

        {/* Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Computer Science graduate from{' '}
          <span className="text-text-primary font-medium">Michigan State University</span>
          {' '}passionate about{' '}
          <span className="gradient-text font-medium">AI</span>
          {' '}and building software that makes an impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA — scrolls to projects section */}
          <GradientButton href="#projects" variant="primary">
            View Projects
          </GradientButton>

          {/* Secondary CTA — downloads the resume PDF */}
          <GradientButton
            href="/resume.pdf"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </GradientButton>
        </motion.div>

      </div>

      {/* ---- SCROLL INDICATOR ----
          Bounces to hint the user to scroll down.
          `animate-bounce` is a built-in Tailwind animation. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>

    </section>
  )
}
