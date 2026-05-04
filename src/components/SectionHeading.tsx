import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: ReactNode
}) {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="mb-12 max-w-2xl">
      <motion.p
        className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyber"
        initial={reduced ? false : { opacity: 0, x: -12 }}
        whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {eyebrow}
      </motion.p>
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  )
}
