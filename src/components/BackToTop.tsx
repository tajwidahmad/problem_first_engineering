import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export function BackToTop() {
  const reduced = usePrefersReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
          onClick={scrollUp}
          className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-glass-border bg-glass text-fg shadow-[var(--shadow-glow)] backdrop-blur-xl transition-[box-shadow,transform] hover:scale-105 hover:shadow-[0_0_48px_-6px_rgba(124,92,255,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-cyber" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
