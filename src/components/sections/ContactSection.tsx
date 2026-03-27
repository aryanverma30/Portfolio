'use client'
// src/components/sections/ContactSection.tsx
//
// The final section — three contact method cards plus a resume download CTA.
//
// Each contact card is a clickable link that opens the appropriate app:
//   - Email card:    opens the user's default mail client via mailto:
//   - LinkedIn card: opens LinkedIn profile in a new tab
//   - Facebook card: opens Facebook profile in a new tab
//
// ACCESSIBILITY:
// All links have aria-label attributes so screen readers can describe them.
// External links include rel="noopener noreferrer" for security.

import { motion } from 'framer-motion'
import { Mail, Linkedin, Facebook, Download } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientButton from '@/components/ui/GradientButton'

// Contact method data — update href values if your contact info changes
const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vermaary@msu.edu',
    href: 'mailto:vermaary@msu.edu',
    description: 'Send me a message',
    // null target means opens in same tab — mailto links open the mail app, not a page
    target: undefined as string | undefined,
    color: 'from-indigo-500/20 to-indigo-600/10',
    border: 'hover:border-indigo-500/50',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/aryan-verma30',
    href: 'https://www.linkedin.com/in/aryan-verma30',
    description: "Let's connect professionally",
    target: '_blank',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'hover:border-blue-500/50',
    iconColor: 'text-blue-400',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Aryan Verma',
    href: 'https://www.facebook.com/profile.php?id=100037927936684',
    description: 'Connect on Facebook',
    target: '_blank',
    color: 'from-sky-500/20 to-sky-600/10',
    border: 'hover:border-sky-500/50',
    iconColor: 'text-sky-400',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title="Get In Touch"
          subtitle="I'm always open to new opportunities, collaborations, or just chatting about AI and basketball"
        />

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {CONTACT_METHODS.map((method, i) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.target}
                rel={method.target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={`Contact via ${method.label}: ${method.value}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                // Hover animation: lift up slightly
                whileHover={{ y: -4 }}
                className={`
                  flex flex-col items-center text-center p-8 rounded-2xl
                  bg-card-bg border border-divider transition-all duration-300
                  ${method.border} hover:shadow-lg group
                  bg-gradient-to-br ${method.color}
                `}
              >
                {/* Icon circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                               bg-card-bg border border-divider group-hover:border-current/30 transition-colors`}>
                  <Icon className={`w-7 h-7 ${method.iconColor}`} />
                </div>

                <p className="text-text-primary font-semibold mb-1">{method.label}</p>
                <p className="text-text-muted text-xs mb-2">{method.description}</p>
                <p className={`text-xs font-mono ${method.iconColor} break-all`}>{method.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Resume download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          {/* Visual divider */}
          <div className="flex items-center gap-4 mb-8 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-divider" />
            <span className="text-text-muted text-xs uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-divider" />
          </div>

          <p className="text-text-secondary mb-5 text-sm">
            Want the full picture? Download my resume.
          </p>

          <GradientButton
            href="/resume.pdf"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </GradientButton>
        </motion.div>

      </div>
    </section>
  )
}
