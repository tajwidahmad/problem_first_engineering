import { motion } from 'framer-motion'
import { achievements, certifications } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Award, ScrollText } from 'lucide-react'

export function Milestones() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="milestones" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements and certifications"
          subtitle="Hackathons, competitions, and structured learning that sharpen both craft and collaboration."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyber-dim p-2.5 text-cyber ring-1 ring-cyber/25">
                <Award className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-fg">Achievements</h3>
            </div>
            <ul className="relative space-y-0">
              {achievements.map((item, i) => (
                <li key={item} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < achievements.length - 1 && (
                    <span
                      className="absolute left-[7px] top-3 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-accent/50 to-transparent"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-accent to-cyber shadow-[0_0_12px_rgba(124,92,255,0.6)]" />
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-accent-dim p-2.5 text-accent ring-1 ring-accent/25">
                <ScrollText className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-fg">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <motion.li
                  key={c}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-glass-border/80 bg-elevated/30 px-4 py-3 text-sm text-muted transition-[border-color,box-shadow] hover:border-accent/30 hover:shadow-[0_0_24px_-12px_rgba(124,92,255,0.25)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
