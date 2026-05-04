import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills framed by engineering outcomes"
          subtitle="My stack is organized by how I solve problems in production-like scenarios, not just by tools I've touched."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.article
              key={group.title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06, duration: 0.45 }}
              className="glass-panel group relative overflow-hidden rounded-2xl p-5 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-12px_rgba(124,92,255,0.35)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-sm font-semibold text-fg">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <motion.li
                    key={item}
                    initial={reduced ? false : { opacity: 0, scale: 0.94 }}
                    whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + ii * 0.02 }}
                    className="inline-block rounded-full border border-glass-border bg-elevated/60 px-3 py-1.5 text-xs font-medium text-muted transition-[color,box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-fg hover:shadow-[0_0_20px_-6px_rgba(0,212,255,0.35)]"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
