export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'spent',
    title: 'Spent',
    description:
      'Self-hosted personal finance tracker. Log expenses via Telegram, get AI-powered categorization, and visualize spending with a web dashboard and iOS widget.',
    image: '',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Claude AI', 'Docker', 'Telegram Bot'],
    githubUrl: 'https://github.com/aryanverma30/spent',
    featured: true,
  },
]
