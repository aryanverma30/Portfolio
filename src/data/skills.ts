export interface SkillCategory {
  name: string
  color: string
  skills: string[]
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
