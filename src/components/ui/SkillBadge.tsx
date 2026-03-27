// src/components/ui/SkillBadge.tsx
//
// A small pill-shaped badge that displays a single skill name.
// Used in SkillsSection.tsx — one badge per skill in the skills data.
//
// COLOR VARIANTS:
// Each skill category has a different color accent (indigo, violet, blue, emerald, slate).
// The color is passed as a prop from the SkillCategory data in skills.ts.
//
// NOTE ON TAILWIND DYNAMIC CLASSES:
// You might think we could do: `border-${color}-500` to dynamically set the color.
// But Tailwind uses static analysis — it scans your files for class names as strings.
// A dynamic string like `border-${color}-500` won't be found, so the class won't
// be generated in the final CSS bundle.
//
// The solution: use a lookup map (VARIANT_STYLES below) that contains the full
// class strings so Tailwind can find them statically.

import { cn } from '@/lib/utils'

// Precomputed style map — all Tailwind class strings must be complete (no dynamic interpolation).
// Tailwind scans for these exact strings to include them in the CSS bundle.
const VARIANT_STYLES: Record<string, string> = {
  indigo: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:border-indigo-400/60 hover:bg-indigo-500/20',
  violet: 'border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-400/60 hover:bg-violet-500/20',
  blue:   'border-blue-500/30   bg-blue-500/10   text-blue-300   hover:border-blue-400/60   hover:bg-blue-500/20',
  emerald:'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/60 hover:bg-emerald-500/20',
  slate:  'border-slate-500/30  bg-slate-500/10  text-slate-300  hover:border-slate-400/60  hover:bg-slate-500/20',
}

interface SkillBadgeProps {
  name: string    // The skill name to display (e.g., "Python")
  color: string   // Key into VARIANT_STYLES (e.g., "indigo")
}

export default function SkillBadge({ name, color }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        // Base pill styles
        'inline-flex items-center px-3 py-1.5 rounded-full',
        'text-xs font-medium border',
        'transition-all duration-200 cursor-default select-none',
        // Color variant — falls back to indigo if unknown color passed
        VARIANT_STYLES[color] ?? VARIANT_STYLES.indigo
      )}
    >
      {name}
    </span>
  )
}
