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
    color: 'indigo',
    skills: ['Python', 'SQL'],
  },
  {
    name: 'Data Engineering',
    color: 'violet',
    skills: [
      'Apache Spark',
      'PySpark',
      'Delta Lake',
      'Delta Live Tables',
      'Databricks Workflows',
    ],
  },
  {
    name: 'Platforms & Tools',
    color: 'blue',
    skills: ['Databricks', 'Snowflake', 'Azure', 'Oracle'],
  },
  {
    name: 'Dev Tools',
    color: 'emerald',
    skills: ['Git', 'GitHub', 'GitHub Copilot', 'Claude'],
  },
  {
    name: 'Data Formats',
    color: 'slate',
    skills: ['JSON', 'Parquet'],
  },
]
