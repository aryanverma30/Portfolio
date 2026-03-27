// src/components/ui/SectionHeader.tsx
//
// Reusable section title component used at the top of every section
// (About, Skills, Projects, Contact).
//
// WHY A REUSABLE COMPONENT?
// Every section title follows the same visual pattern:
//   - Gradient text heading
//   - Optional subtitle
//   - Animated underline accent bar
// Instead of copying this markup into every section, we extract it here once.
// If you want to change how all section titles look, you change one file.
// This is the DRY principle (Don't Repeat Yourself) applied to UI.
//
// HOW FRAMER MOTION whileInView WORKS:
// Instead of animating when the component mounts, `whileInView` triggers
// the animation when the element enters the browser viewport.
// This creates the effect of content "fading in" as you scroll down the page.

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string                        // Optional — not all sections need one
  align?: 'left' | 'center'               // Default: center
  className?: string                       // Allow callers to pass extra classes
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>

      {/* Title with gradient text */}
      <motion.h2
        // initial: start invisible and 20px below final position
        initial={{ opacity: 0, y: 20 }}
        // whileInView: animate to visible when scrolled into view
        whileInView={{ opacity: 1, y: 0 }}
        // viewport: { once: true } means animate only the first time it enters view
        // without this, it would re-animate every time you scroll back to it
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl sm:text-4xl font-bold gradient-text mb-3"
      >
        {title}
      </motion.h2>

      {/* Animated underline bar — a decorative element below the title */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        // delay: 0.2s — starts slightly after the title animation begins
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className={cn(
          'h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-2',
          align === 'center' ? 'mx-auto' : 'ml-0',
          subtitle ? 'mb-4' : 'mb-0'
        )}
        // transform-origin controls where the scaleX animation grows from.
        // "left" makes it grow from left to right (more natural reading direction).
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
      />

      {/* Optional subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
