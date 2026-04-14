'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Brain, Trophy, Heart } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

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
    content: 'AI · Software Engineering · Data Engineering',
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                CS grad and software engineer focused on{' '}
                <span className="text-text-primary font-medium">data engineering</span> — building
                pipelines, wrangling data, and making it actually useful. Big fan of{' '}
                <span className="text-text-primary font-medium">AI tools</span> and always
                experimenting with what they can do.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Outside of work, I&apos;m into fitness and have been playing{' '}
                <span className="text-text-primary font-medium">basketball</span> since I was 2 —
                even played varsity in high school. That competitive drive never really goes away.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {INFO_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                    className="flex gap-3 p-4 rounded-xl bg-card-bg border border-divider hover:border-accent/30 transition-colors"
                  >
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
