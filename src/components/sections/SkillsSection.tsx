'use client'

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
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
              <h3 className="text-text-primary font-semibold text-sm mb-4 pb-3 border-b border-divider">
                {category.name}
              </h3>

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
