// src/lib/utils.ts
// Shared utility functions used across the entire app.
//
// WHY THIS FILE EXISTS:
// Tailwind class names are just strings. When you conditionally apply classes
// in JSX, you end up with messy template literals:
//   `px-4 py-2 ${isActive ? 'bg-indigo-500' : 'bg-slate-800'} ${large ? 'text-lg' : 'text-sm'}`
//
// This gets hard to read fast. The `cn()` utility below solves this cleanly.

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn() — "class names" utility
 *
 * Combines clsx and tailwind-merge into one function:
 *
 * clsx: Conditionally joins class names, filtering out falsy values.
 *   clsx('px-4', isActive && 'bg-indigo-500', false && 'hidden')
 *   → 'px-4 bg-indigo-500'
 *
 * twMerge: Resolves Tailwind conflicts by keeping only the last conflicting class.
 *   Without twMerge: 'px-4 px-6' → both classes in the string (px-4 wins by CSS order, confusing)
 *   With twMerge:    'px-4 px-6' → 'px-6' (last value wins, predictable)
 *
 * Usage:
 *   cn('px-4 py-2', isActive && 'bg-indigo-500', className)
 *   cn('text-sm', large && 'text-lg')  // twMerge removes 'text-sm' when large is true
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
