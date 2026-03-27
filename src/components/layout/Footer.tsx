// src/components/layout/Footer.tsx
//
// The footer shown at the bottom of the page.
// This is a Server Component (no "use client") — it has no interactivity,
// so it can render entirely on the server. Faster page loads, better SEO.
//
// WHAT IT CONTAINS:
// - Social links with Lucide icons
// - Copyright notice
// - "Built with" tech stack credit (good for recruiters to see)

import { Github, Linkedin, Mail } from 'lucide-react'

// Social link data — update these URLs as needed
const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/aryanverma30',
    // Lucide icons are React components that accept className for styling
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aryan-verma30',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:vermaary@msu.edu',
    icon: Mail,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // <footer> semantic element — signals to browsers and screen readers
    // that this is the page footer region
    <footer className="border-t border-divider bg-card-bg mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Social icons row */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                // target="_blank" opens in a new tab
                // rel="noopener noreferrer" is a security best practice:
                // - noopener: prevents the new tab from accessing window.opener
                // - noreferrer: doesn't send the referrer header (privacy)
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-muted hover:text-accent transition-colors duration-200 p-2 rounded-lg hover:bg-accent/10"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider line */}
          <div className="w-24 h-px bg-divider" />

          {/* Copyright and built-with notice */}
          <div className="text-center space-y-1">
            <p className="text-text-muted text-sm">
              © {currentYear} Aryan Verma. All rights reserved.
            </p>
            <p className="text-text-muted text-xs">
              Built with{' '}
              <span className="text-accent">Next.js</span>
              {', '}
              <span className="text-accent-2">TypeScript</span>
              {', and '}
              <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
