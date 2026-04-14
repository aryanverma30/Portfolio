'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import GradientButton from '@/components/ui/GradientButton'

const ROLES = [
  'CS Graduate',
  'AI Enthusiast',
  'Software Engineer',
  'Data Engineer',
  'Problem Solver',
]

const TYPE_SPEED   = 80
const ERASE_SPEED  = 40
const PAUSE_TYPED  = 2000
const PAUSE_ERASED = 500

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isErasing, setIsErasing] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const delay = isErasing ? ERASE_SPEED : TYPE_SPEED

    const timer = setTimeout(() => {
      if (!isErasing) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsErasing(true), PAUSE_TYPED)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setTimeout(() => {
            setIsErasing(false)
            setRoleIndex((prev) => (prev + 1) % ROLES.length)
          }, PAUSE_ERASED)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [displayText, isErasing, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-gradient-drift" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-accent-2/15 blur-3xl animate-gradient-drift [animation-delay:4s]" />
        <div className="absolute -bottom-20 left-1/2 w-64 h-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-gradient-drift [animation-delay:8s]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
        >
          <span className="text-text-primary">Hi, I&apos;m </span>
          <span className="gradient-text">Aryan Verma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6 h-10 flex items-center justify-center"
        >
          <span>{displayText}</span>
          <span className="ml-1 inline-block w-0.5 h-7 bg-accent animate-pulse" aria-hidden="true" />
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GradientButton href="#projects" variant="primary">
            View Projects
          </GradientButton>
          {/* TODO: replace href with a hosted link (Google Drive, Notion, etc.) before deploying */}
          <GradientButton
            href="#"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </GradientButton>
        </motion.div>
      </div>

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
