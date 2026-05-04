import { motion } from 'framer-motion'
import { Brain, BookOpenCheck, ChartNoAxesCombined, ScanSearch, Spline } from 'lucide-react'
import { developerTraits } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const icons = [ScanSearch, Spline, ChartNoAxesCombined, Brain, BookOpenCheck]

export function DeveloperTraits() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="traits" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Developer Traits"
          title="What Defines Me as a Developer"
          subtitle="The principles I apply consistently when solving complex product and engineering problems."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {developerTraits.map((trait, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.article
                key={trait}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="gradient-border-hover glass-panel rounded-2xl p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-accent-dim p-3 text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-fg">{trait}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
