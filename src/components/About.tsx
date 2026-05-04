import { motion } from 'framer-motion'
import { education, personal } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Cpu, Sparkles, Target } from 'lucide-react'

const highlights = [
  {
    icon: Sparkles,
    title: 'Context before implementation',
    body: 'I begin with user and product context so every feature maps to a meaningful outcome.',
  },
  {
    icon: Cpu,
    title: 'Systems-level thinking',
    body: 'I connect frontend behavior, backend logic, and data flow as one coherent system.',
  },
  {
    icon: Target,
    title: 'Decision-focused execution',
    body: 'I make trade-offs deliberately and optimize for clarity, maintainability, and impact.',
  },
] as const

export function About() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering with context, clarity, and impact"
          subtitle={personal.overview}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.article
                key={h.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="gradient-border-hover glass-panel group relative overflow-hidden rounded-2xl p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent-dim p-3 text-accent ring-1 ring-accent/20 transition-[box-shadow] group-hover:shadow-[0_0_24px_-4px_rgba(124,92,255,0.5)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-fg">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 glass-panel rounded-2xl p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-cyber">Education</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xl font-semibold text-fg">{education.school}</p>
              <p className="mt-1 text-muted">{education.degree}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm font-medium text-fg">CGPA {education.cgpa}</p>
              <p className="text-sm text-muted">{education.years}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
