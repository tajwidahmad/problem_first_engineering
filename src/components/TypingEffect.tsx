import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export function TypingEffect({ phrases }: { phrases: readonly string[] }) {
  const reduced = usePrefersReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return

    const full = phrases[phraseIndex] ?? ''
    let delay: number

    if (!deleting && display === full) {
      delay = 2000
      const t = window.setTimeout(() => setDeleting(true), delay)
      return () => window.clearTimeout(t)
    }

    if (deleting && display.length === 0) {
      delay = 400
      const t = window.setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }, delay)
      return () => window.clearTimeout(t)
    }

    delay = deleting ? 48 : 72
    const t = window.setTimeout(() => {
      if (deleting) {
        setDisplay(full.slice(0, Math.max(0, display.length - 1)))
      } else {
        setDisplay(full.slice(0, display.length + 1))
      }
    }, delay)

    return () => window.clearTimeout(t)
  }, [deleting, display, phraseIndex, phrases, reduced])

  const shownText = reduced ? (phrases[0] ?? '') : display

  return (
    <span className="inline-flex items-baseline text-cyber">
      <span className="font-medium">{shownText}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse bg-cyber align-[-0.15em]" />
    </span>
  )
}
