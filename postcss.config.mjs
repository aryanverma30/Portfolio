// postcss.config.mjs
// PostCSS is a tool that transforms CSS using JavaScript plugins.
// Tailwind CSS is implemented as a PostCSS plugin — this file wires them together.
//
// When you run `npm run build` or `npm run dev`, Next.js runs PostCSS on your CSS files.
// PostCSS then runs the tailwindcss plugin, which scans your source files for Tailwind
// class names and generates only the CSS you actually used (no unused styles in production).
// Autoprefixer automatically adds vendor prefixes like -webkit- for browser compatibility.

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // tailwindcss reads your tailwind.config.ts and generates utility classes
    tailwindcss: {},
    // autoprefixer adds vendor prefixes so CSS works across all browsers
    autoprefixer: {},
  },
}

export default config
