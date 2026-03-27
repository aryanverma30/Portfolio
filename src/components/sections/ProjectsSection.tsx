'use client'
// src/components/sections/ProjectsSection.tsx
//
// Renders the project cards grid — or an "empty state" when no projects exist.
//
// EMPTY STATE PATTERN:
// Rather than rendering nothing (confusing) or crashing, we show a friendly
// placeholder that communicates intent and looks polished.
// This is a standard UX pattern used in production apps everywhere.
//
// TO ADD A PROJECT:
// Open src/data/projects.ts and add an entry to the `projects` array.
// No changes needed in this file — it automatically renders whatever is in the data.

import { motion } from 'framer-motion'
import { FolderOpen } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title="Projects"
          subtitle="Things I've built and am building"
        />

        {/* ---- CONDITIONAL RENDERING ----
            If projects array is empty, show the placeholder.
            If it has items, show the card grid.
            The ternary operator (condition ? valueIfTrue : valueIfFalse) handles this. */}
        {projects.length === 0 ? (
          // ---- EMPTY STATE ----
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center py-20 px-6"
          >
            {/* Dashed border card — the dashed border signals "placeholder" visually */}
            <div className="w-full max-w-md mx-auto rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 p-12 text-center">

              {/* Icon with glowing background */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
                <FolderOpen className="w-8 h-8 text-accent" />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                Projects Coming Soon
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m currently working on some exciting projects.
                Check back soon — this section will showcase my work!
              </p>

              {/* Small decorative dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-accent/60 animate-pulse [animation-delay:200ms]" />
                <span className="w-2 h-2 rounded-full bg-accent/40 animate-pulse [animation-delay:400ms]" />
              </div>
            </div>
          </motion.div>

        ) : (
          // ---- PROJECT GRID ----
          // md:grid-cols-2 means: 1 column on mobile, 2 columns on tablet+
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
