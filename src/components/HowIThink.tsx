import { motion } from 'framer-motion'
import {
  CircleUserRound,
  Compass,
  Cpu,
  FlaskConical,
  Gauge,
  GitBranchPlus,
  Layers3,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import { differentials, processSteps } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const icons = [
  CircleUserRound,
  Compass,
  Layers3,
  Cpu,
  FlaskConical,
  GitBranchPlus,
  ShieldCheck,
  Gauge,
  Rocket,
]

export function HowIThink() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="how-i-think" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How I Think As A Developer"
          title="More Than Code - How I Think"
          subtitle="I don't just build solutions. I understand problems deeply before solving them."
        />

        <h3 className="mb-6 text-lg font-semibold text-fg">My Problem-Solving Process</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.article
                key={step.title}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.42 }}
                className="gradient-border-hover glass-panel group relative rounded-2xl p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-glass-border bg-elevated/50 px-3 py-1 text-xs font-medium text-muted">
                  <span className="text-cyber">0{i + 1}</span>
                  <Icon className="h-3.5 w-3.5 text-accent" />
                </div>
                <h4 className="text-sm font-semibold text-fg">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.blockquote
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyber">
              My Development Philosophy
            </p>
            <p className="mt-4 text-lg leading-relaxed text-fg">
              Good developers write code. <span className="text-gradient">Great developers understand problems.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Before writing a single line of code, I focus on why the problem exists, who it impacts, and what the
              simplest effective solution looks like. I believe in clarity over complexity, structure over shortcuts,
              and impact over implementation.
            </p>
          </motion.blockquote>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyber">What Makes Me Different</p>
            <ul className="mt-5 space-y-3">
              {differentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}