'use client'
// src/components/sections/SkillsSection.tsx
//
// Displays skill badges organized by category with staggered entrance animations.
//
// DATA SOURCE: src/data/skills.ts — edit that file to add/remove skills.
//
// STAGGER ANIMATION:
// Each badge animates in slightly after the previous one.
// We calculate the delay as: (categoryIndex * 0.2) + (skillIndex * 0.05)
// This creates a "wave" effect where badges appear left-to-right within each category,
// and each category starts after the previous one has begun appearing.

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import SkillBadge from '@/components/ui/SkillBadge'
import { skillCategories } from '@/data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* Category grid — each category is a card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              // Card entrance: fade in + slide up with stagger per category
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: categoryIndex * 0.1,
              }}
              className="p-5 rounded-2xl bg-card-bg border border-divider hover:border-accent/30 transition-colors"
            >
              {/* Category heading */}
              <h3 className="text-text-primary font-semibold text-sm mb-4 pb-3 border-b border-divider">
                {category.name}
              </h3>

              {/* Skills badge grid — wraps when there are many badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                      // Combined delay: category offset + per-skill stagger
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <SkillBadge name={skill} color={category.color} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
