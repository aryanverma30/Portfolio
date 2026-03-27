// src/app/page.tsx
// The home page — maps to the "/" URL route.
//
// In Next.js App Router, every page.tsx file in the src/app/ directory
// corresponds to a URL route. This file (at the root) handles "/".
//
// This component is intentionally minimal — it just composes the sections
// in the correct order. All the real logic and UI lives in the section components.
// This separation makes it easy to:
//   - Reorder sections (just move lines here)
//   - Add new sections (import and add a line here)
//   - Remove sections (delete a line here)
//
// SERVER COMPONENT:
// This page has no interactivity itself. The individual sections that need
// animations or event listeners declare "use client" on their own.
// In Next.js, you can mix server and client components — only the parts
// that NEED the browser are sent to the client as JavaScript.

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      {/*
        Each section has an id="" attribute for anchor link navigation.
        The Navbar links use href="#about", "#skills", etc.
        smooth scroll-behavior (set in globals.css) animates the scroll.
      */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
