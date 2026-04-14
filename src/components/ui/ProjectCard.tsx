'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Tag } from 'lucide-react'
import { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group relative flex flex-col rounded-2xl overflow-hidden',
        'bg-card-bg border border-divider',
        'hover:border-accent/50 transition-all duration-300',
        'shadow-lg hover:shadow-xl hover:shadow-accent/10',
      )}
    >
      <div className="relative h-48 w-full overflow-hidden bg-navy">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/60 to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

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
