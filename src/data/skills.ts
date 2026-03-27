// src/data/skills.ts
// All skills data — organized by category with color accents.
//
// Each category gets a different color so the skills grid is visually scannable.
// The `color` field maps to Tailwind color names, which SkillBadge.tsx uses to
// apply the right border and background classes.
//
// TO ADD OR REMOVE SKILLS: Just edit the `skills` arrays below.
// TO ADD A CATEGORY: Add a new object following the SkillCategory interface.

export interface SkillCategory {
  name: string    // Category heading (e.g., "Languages")
  color: string   // Tailwind color name used by SkillBadge for accent styling
  skills: string[]// List of skill names to display as badges
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    // indigo accent — matches the primary brand color
    color: 'indigo',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    name: 'AI & Machine Learning',
    // violet — complementary to indigo, signals the AI/ML specialty
    color: 'violet',
    skills: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
  },
  {
    name: 'Web Development',
    // blue — classic web/frontend color
    color: 'blue',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'REST APIs',
    ],
  },
  {
    name: 'Data & Algorithms',
    // emerald — green signals data/infrastructure
    color: 'emerald',
    skills: [
      'Data Structures',
      'Algorithms',
      'Big Data',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    name: 'Tools & Platforms',
    // slate — neutral gray for tooling/infrastructure
    color: 'slate',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Netlify', 'Vercel'],
  },
]
