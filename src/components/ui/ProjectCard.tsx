'use client'
// src/components/ui/ProjectCard.tsx
//
// Displays a single project with image, description, tags, and links.
// Built and ready — add projects to src/data/projects.ts to use it.
//
// FRAMER MOTION whileHover:
// `whileHover` animates the card while the cursor is over it.
// { y: -8 } moves the card 8px upward, creating a "lift" effect.
// This is a popular UI pattern for interactive cards — it signals clickability.
//
// next/image COMPONENT:
// We use Next.js's <Image> component instead of a plain <img> tag because:
// 1. Automatic WebP/AVIF conversion — serves smaller files to modern browsers
// 2. Lazy loading — only loads images when they scroll into view
// 3. Prevents layout shift (CLS) — reserves space before image loads
// 4. Responsive sizing via the `sizes` prop

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Tag } from 'lucide-react'
import { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  // index is used to stagger animations — each card animates slightly after the previous one
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      // Entrance animation: fade in + slide up when scrolled into view
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // delay multiplied by index creates a stagger — first card at 0ms, second at 100ms, etc.
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}

      // Hover lift effect — card rises 8px and scales up slightly
      whileHover={{ y: -8, scale: 1.02 }}
      // Spring transition feels more physical than a linear tween
      // stiffness: how "tight" the spring is (higher = snappier)
      // damping: how quickly it stops oscillating (higher = less bouncy)
      whileTap={{ scale: 0.98 }}

      // <article> is the correct semantic element for a self-contained piece of content
      className={cn(
        'group relative flex flex-col rounded-2xl overflow-hidden',
        'bg-card-bg border border-divider',
        // On hover: border becomes semi-transparent indigo + subtle glow
        'hover:border-accent/50 transition-all duration-300',
        'shadow-lg hover:shadow-xl hover:shadow-accent/10',
      )}
    >
      {/* ---- PROJECT IMAGE ---- */}
      <div className="relative h-48 w-full overflow-hidden bg-navy">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill                            // Fills the parent container
          sizes="(max-width: 768px) 100vw, 50vw"  // Tells browser what size to expect
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          // object-cover: maintains aspect ratio while filling the container (like CSS background-size: cover)
        />
        {/* Gradient overlay — makes the image fade into the card background */}
        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/60 to-transparent" />
      </div>

      {/* ---- CARD BODY ---- */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* ---- ACTION LINKS ---- */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-divider">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors ml-auto"
            >
              Live Demo
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
