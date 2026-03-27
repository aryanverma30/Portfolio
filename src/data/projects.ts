// src/data/projects.ts
// All project data lives here in one place.
//
// WHY A SEPARATE DATA FILE?
// Keeping content separate from UI components is a core software design principle
// called "separation of concerns." When you want to add a project, you only touch
// this file — you never need to open a component and hunt through JSX.
//
// HOW TO ADD A PROJECT:
// 1. Add an object to the `projects` array below following the Project interface.
// 2. Drop an image in public/images/ and reference it as "/images/your-image.jpg"
// 3. That's it — ProjectsSection will automatically render the new card.

// The Project interface defines the "shape" of a project object.
// TypeScript enforces this — if you forget a required field, you get a compile error
// instead of a silent bug in production.
export interface Project {
  id: string          // Unique slug, used as React key (e.g., "nba-stats")
  title: string       // Display name shown on the card
  description: string // 1–2 sentence summary of what the project does
  image: string       // Path relative to /public (e.g., "/images/us.svg")
  tags: string[]      // Technology / language tags shown as badges
  githubUrl?: string  // Optional — link to GitHub repo (? means not required)
  liveUrl?: string    // Optional — link to live demo
  featured: boolean   // Reserved for future "featured projects" filtering
}

// The projects array is currently empty — the ProjectsSection will show a
// "Coming Soon" placeholder when this array has no items.
// Add entries here when you're ready to showcase your work.
export const projects: Project[] = [
  // Example of how to add a project when ready:
  // {
  //   id: 'my-project',
  //   title: 'My Project',
  //   description: 'A short description of what this project does and why it matters.',
  //   image: '/images/my-project.png',
  //   tags: ['Python', 'React', 'TypeScript'],
  //   githubUrl: 'https://github.com/aryanverma30/my-project',
  //   liveUrl: 'https://my-project.netlify.app',
  //   featured: true,
  // },
]
