import { motion } from 'framer-motion'
import { Layers, Lightbulb, Scale, Workflow } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const points = [
  'Understanding before building',
  'Simplicity over complexity',
  'Real-world usability',
  'Scalable, maintainable architecture',
]

const iconMap = [Lightbulb, Scale, Workflow, Layers]

export function BeyondCode() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="beyond-code" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Problem-Solving Philosophy"
          title="Beyond Code"
          subtitle="Anyone can learn syntax. Not everyone learns how to think through systems, context, and impact."
        />

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            I aim to be a developer who doesn't just complete tasks, but solves meaningful problems. My work starts by
            framing the right question, then choosing the clearest path to a durable solution.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {points.map((point, i) => {
              const Icon = iconMap[i]
              return (
                <div
                  key={point}
                  className="rounded-xl border border-glass-border bg-elevated/35 px-4 py-3 text-sm text-fg/95"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-cyber" />
                    {point}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
