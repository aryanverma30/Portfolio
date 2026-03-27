// src/components/ui/GradientButton.tsx
//
// Reusable button component with two visual variants:
//   - "primary": filled gradient background (indigo → violet)
//   - "ghost":   transparent with gradient border and text
//
// Used in HeroSection for the main CTAs and ContactSection for resume download.
//
// TYPESCRIPT INTERFACE:
// We define a Props interface to describe every possible prop this component accepts.
// TypeScript will show an error if you pass an unknown prop or forget a required one.
// This makes components self-documenting — you can hover over <GradientButton> in
// your editor to see exactly what it accepts.

import { cn } from '@/lib/utils'

interface GradientButtonProps {
  children: React.ReactNode   // The button's label content (text, icons, etc.)
  href?: string               // If provided, renders as <a> tag instead of <button>
  onClick?: () => void        // Click handler for <button> usage
  variant?: 'primary' | 'ghost'
  className?: string
  target?: string             // For external links: "_blank" opens in new tab
  rel?: string                // For security: "noopener noreferrer" with target="_blank"
  download?: boolean          // Triggers browser download instead of navigation
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  target,
  rel,
  download,
}: GradientButtonProps) {
  // Shared classes that apply to both variants
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'px-6 py-3 rounded-xl font-medium text-sm',
    'transition-all duration-300',
    'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
    className
  )

  // Variant-specific classes
  const variantClasses = {
    // Filled gradient: indigo→violet background with white text
    // On hover: lift up (translateY) and increase shadow glow
    primary: cn(
      'bg-gradient-to-r from-accent to-accent-2 text-white',
      'shadow-lg shadow-accent/25',
      'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40',
    ),
    // Ghost: transparent background, gradient border, gradient text
    // The border is achieved via a box-shadow trick since CSS gradients
    // can't be applied directly to border-color.
    ghost: cn(
      'border border-accent/50 text-accent',
      'hover:border-accent hover:bg-accent/10',
      'hover:-translate-y-0.5',
    ),
  }

  // If an `href` is provided, render as an anchor tag (link).
  // Otherwise render as a button for onClick handlers.
  // This pattern is called a "polymorphic component."
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={cn(baseClasses, variantClasses[variant])}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant])}
    >
      {children}
    </button>
  )
}
