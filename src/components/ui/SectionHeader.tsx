'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl sm:text-4xl font-bold gradient-text mb-3"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className={cn(
          'h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-2',
          align === 'center' ? 'mx-auto' : 'ml-0',
          subtitle ? 'mb-4' : 'mb-0'
        )}
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
      />

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
