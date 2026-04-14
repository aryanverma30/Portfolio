import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Serve modern image formats (WebP/AVIF) via the <Image> component
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
