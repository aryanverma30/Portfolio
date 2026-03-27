// next.config.ts
// This file configures the Next.js framework itself.
// It runs at build time and controls how Next.js processes your project.
//
// Next.js is a React framework that adds:
//   - File-based routing (files in src/app/ become URL routes)
//   - Server-Side Rendering (SSR) and Static Generation (SSG)
//   - Automatic image optimization via the <Image> component
//   - API routes, middleware, and more

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // images.formats tells Next.js which modern image formats to serve.
  // WebP and AVIF are much smaller than JPEG/PNG — a 1.7 MB photo can
  // become ~150 KB in WebP. Next.js detects browser support and
  // serves the best format automatically via the <Image> component.
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
