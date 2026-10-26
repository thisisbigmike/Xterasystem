import { clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the custom scale in globals.css so `text-display` is
// treated as a font size (not a color) and `tracking-label` as letter spacing.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display"],
      tracking: ["display", "label"],
      font: ["display"],
    },
  },
})

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
