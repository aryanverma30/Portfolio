import { cn } from '@/lib/utils'

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
  target?: string
  rel?: string
  download?: boolean
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
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'px-6 py-3 rounded-xl font-medium text-sm',
    'transition-all duration-300',
    'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
    className
  )

  const variantClasses = {
    primary: cn(
      'bg-gradient-to-r from-accent to-accent-2 text-white',
      'shadow-lg shadow-accent/25',
      'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40',
    ),
    ghost: cn(
      'border border-accent/50 text-accent',
      'hover:border-accent hover:bg-accent/10',
      'hover:-translate-y-0.5',
    ),
  }

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
