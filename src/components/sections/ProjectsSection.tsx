'use client'

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

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center py-20 px-6"
          >
            <div className="w-full max-w-md mx-auto rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 p-12 text-center">
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

              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-accent/60 animate-pulse [animation-delay:200ms]" />
                <span className="w-2 h-2 rounded-full bg-accent/40 animate-pulse [animation-delay:400ms]" />
              </div>
            </div>
          </motion.div>

        ) : (
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
