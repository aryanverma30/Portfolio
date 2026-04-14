import { cn } from '@/lib/utils'

// Full class strings are required — Tailwind's static analysis can't resolve dynamic interpolation.
const VARIANT_STYLES: Record<string, string> = {
  indigo: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:border-indigo-400/60 hover:bg-indigo-500/20',
  violet: 'border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-400/60 hover:bg-violet-500/20',
  blue:   'border-blue-500/30   bg-blue-500/10   text-blue-300   hover:border-blue-400/60   hover:bg-blue-500/20',
  emerald:'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/60 hover:bg-emerald-500/20',
  slate:  'border-slate-500/30  bg-slate-500/10  text-slate-300  hover:border-slate-400/60  hover:bg-slate-500/20',
}

interface SkillBadgeProps {
  name: string
  color: string
}

export default function SkillBadge({ name, color }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-full',
        'text-xs font-medium border',
        'transition-all duration-200 cursor-default select-none',
        VARIANT_STYLES[color] ?? VARIANT_STYLES.indigo
      )}
    >
      {name}
    </span>
  )
}
