import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return (
      <section id={id} className={`scroll-mt-24 ${className}`}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12% 0px' }}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}
