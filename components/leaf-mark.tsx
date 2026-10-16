import { cn } from "@/lib/utils"

/**
 * Trifoliate Bael (Aegle Marmelos) leaf — the firm's brand mark.
 * A simple, refined three-leaflet glyph referenced from the company name.
 */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <path
        d="M24 44C24 44 24 30 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 25C24 14 18 6 18 6C18 6 8 11 8 21C8 28 16 30 24 25Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M24 25C24 14 30 6 30 6C30 6 40 11 40 21C40 28 32 30 24 25Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M24 27C24 18 24 9 24 9C24 9 31 13 31 21C31 27 28 29 24 27Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
