'use client';
// src/components/sections/AboutSection.tsx
//
// Personal background, education, interests, and fun facts.
//
// LAYOUT (responsive):
//   Mobile:  Single column — photos stacked above text
//   Desktop: Two columns — photos left, text content right (lg:grid-cols-2)
//
// PHOTO LAYOUT:
// Instead of the old Bootstrap carousel (which broke on mobile), we use a
// CSS grid with overlapping photos at different rotations. Each photo has a
// slight rotation offset and different z-index, creating a "scattered stack" look.
//
// NEXT.JS Image COMPONENT:
// All three photos (picture1-3.jpg) are 1.6–1.8 MB JPEGs.
// next/image automatically:
//   1. Converts them to WebP/AVIF (~150KB on mobile)
//   2. Serves different sizes based on viewport (sizes prop)
//   3. Lazy-loads photos that are off-screen

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Brain, Trophy, Heart } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// Info card data — easy to update without touching JSX
const INFO_CARDS = [
  {
    icon: GraduationCap,
    title: 'Education',
    content: 'B.S. Computer Science — Michigan State University',
    accent: 'text-accent',
  },
  {
    icon: Brain,
    title: 'Interests',
    content: 'Artificial Intelligence · Machine Learning · Big Data',
    accent: 'text-accent-2',
  },
  {
    icon: Trophy,
    title: 'Basketball',
    content: 'Playing since age 2 · Varsity high school player · Team leader',
    accent: 'text-available',
  },
  {
    icon: Heart,
    title: 'Personal',
    content: 'First in my family born and raised in the United States',
    accent: 'text-amber-400',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="A little about who I am beyond the code" />

        {/* Two-column grid on large screens, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---- LEFT: Headshot ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/40 hover:scale-105 transition-all duration-500">
              <Image
                src="/images/headshot.jpg"
                alt="Aryan Verma"
                fill
                sizes="(max-width: 768px) 80vw, 35vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-accent/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* ---- RIGHT: Text Content ---- */}
          <div className="space-y-6">
            {/* Opening bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                I&apos;m a Computer Science graduate with a deep passion for the intersection of{' '}
                <span className="text-text-primary font-medium">Artificial Intelligence</span> and
                real-world problem solving. I love building things — whether it&apos;s training a
                model, architecting a system, or crafting a clean UI.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Off the computer, I&apos;ve been playing{' '}
                <span className="text-text-primary font-medium">basketball</span> since I was 2
                years old. The discipline, teamwork, and competitive drive from playing varsity in
                high school carries directly into how I approach engineering challenges.
              </p>
            </motion.div>

            {/* Info cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {INFO_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    // Staggered delay: each card appears 100ms after the previous
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                    className="flex gap-3 p-4 rounded-xl bg-card-bg border border-divider hover:border-accent/30 transition-colors"
                  >
                    {/* Icon with category accent color */}
                    <div className={`mt-0.5 shrink-0 ${card.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-semibold mb-0.5">{card.title}</p>
                      <p className="text-text-muted text-xs leading-relaxed">{card.content}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
