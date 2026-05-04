import { motion } from 'framer-motion'
import { ArrowRight, Code2, MapPin, Sparkles } from 'lucide-react'
import { personal } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { HeroBackground } from './HeroBackground'
import { TypingEffect } from './TypingEffect'
import profileImage from '../../WhatsApp Image 2026-04-19 at 1.15.20 PM.jpeg'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass/60 px-3 py-1 text-xs font-medium text-fg backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                Problem-first engineering
              </span>
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                <MapPin className="h-3.5 w-3.5 text-cyber" />
                {personal.location}
              </span>
            </p>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient">{personal.name}</span>
            </h1>

            <p className="mt-4 text-xl font-medium text-fg/95 sm:text-2xl">{personal.heroHeadline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {personal.heroSubheading}
            </p>

            <div className="mt-4 min-h-[1.75rem] text-base sm:text-lg">
              <TypingEffect phrases={personal.heroTyping} />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-[#5b8cff] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-[0_0_56px_-8px_rgba(124,92,255,0.65)]"
                whileHover={reduced ? undefined : { scale: 1.02 }}
                whileTap={reduced ? undefined : { scale: 0.98 }}
              >
                <span className="relative z-10">View Work</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
              <motion.a
                href="#how-i-think"
                className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass/70 px-6 py-3 text-sm font-semibold text-fg backdrop-blur-md transition-[transform,box-shadow,border-color] hover:border-accent/40 hover:shadow-[0_0_32px_-8px_rgba(124,92,255,0.35)]"
                whileHover={reduced ? undefined : { scale: 1.02 }}
                whileTap={reduced ? undefined : { scale: 0.98 }}
              >
                See My Thinking
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass/70 px-6 py-3 text-sm font-semibold text-fg backdrop-blur-md transition-[transform,box-shadow,border-color] hover:border-cyber/40 hover:shadow-[0_0_32px_-8px_rgba(0,212,255,0.35)]"
                whileHover={reduced ? undefined : { scale: 1.02 }}
                whileTap={reduced ? undefined : { scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-cyber/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-glass-border bg-glass p-3 shadow-[var(--shadow-glow)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-white/10" />
              <img
                src={profileImage}
                alt={`${personal.name} portrait`}
                className="h-[420px] w-full rounded-[1.3rem] object-cover object-center"
              />
            </div>

            <motion.div
              className="absolute -left-8 top-6 hidden items-center gap-2 rounded-full border border-glass-border bg-deep/80 px-3 py-1.5 text-[11px] text-cyber shadow-[0_0_24px_-10px_rgba(0,212,255,0.75)] backdrop-blur-xl sm:inline-flex"
              animate={reduced ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>thinks_in_systems = true</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-deep/80 px-3 py-1.5 text-[11px] text-fg shadow-[0_0_26px_-10px_rgba(124,92,255,0.8)] backdrop-blur-xl"
              animate={reduced ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>impact over implementation</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          className="flex h-10 w-6 justify-center rounded-full border border-glass-border bg-glass/40 pt-2 backdrop-blur-sm"
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        >
          <span className="h-2 w-1 rounded-full bg-cyber/80" />
        </motion.div>
      </div>
    </section>
  )
}
