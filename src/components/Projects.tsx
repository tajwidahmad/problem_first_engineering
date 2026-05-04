import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const labels = [
  { key: 'problem', title: 'Problem Statement' },
  { key: 'approach', title: 'My Approach' },
  { key: 'solution', title: 'Solution' },
  { key: 'impact', title: 'Impact' },
] as const

export function Projects() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies, not just project cards"
          subtitle="Each build is framed by context, decisions, constraints, and measurable impact."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.48 }}
              className="gradient-border-hover glass-panel group relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-wider text-cyber">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-fg">{project.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-glass-border bg-elevated/50 px-2.5 py-1 text-xs font-medium text-fg/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {labels.map((label) => (
                    <div key={label.key} className="rounded-xl border border-glass-border/70 bg-elevated/25 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyber">{label.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {project.caseStudy[label.key]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-glass-border/70 bg-elevated/25 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyber">Key Decisions</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted">
                      {project.caseStudy.keyDecisions.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-glass-border/70 bg-elevated/25 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyber">Challenges Faced</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted">
                      {project.caseStudy.challenges.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-cyber" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass/80 px-4 py-2 text-xs font-semibold text-fg backdrop-blur-sm transition-[transform,box-shadow,border-color] hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_0_24px_-8px_rgba(124,92,255,0.4)]"
                  >
                    <FaGithub className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#6a7cff] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-glow)] transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-[0_0_40px_-6px_rgba(124,92,255,0.55)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-glass-border px-4 py-2 text-xs font-medium text-muted">
                      <ExternalLink className="h-4 w-4 opacity-50" />
                      Live link soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
