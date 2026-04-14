import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/aryanverma30',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aryan-verma30',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:averma2121@gmail.com',
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-card-bg mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-muted hover:text-accent transition-colors duration-200 p-2 rounded-lg hover:bg-accent/10"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="w-24 h-px bg-divider" />

          <div className="text-center space-y-1">
            <p className="text-text-muted text-sm">
              © {currentYear} Aryan Verma. All rights reserved.
            </p>
            <p className="text-text-muted text-xs">
              Built with <span className="text-accent">Next.js</span>
              {', '}
              <span className="text-accent-2">TypeScript</span>
              {', and '}
              <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
