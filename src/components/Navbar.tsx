import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#how-i-think', label: 'How I Think' },
  { href: '#skills', label: 'Capabilities' },
  { href: '#projects', label: 'Case Studies' },
  { href: '#traits', label: 'Traits' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar() {
  const reduced = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-b border-glass-border bg-glass/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: reduced ? 0 : 0.35 }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="group relative text-sm font-semibold tracking-tight text-fg"
          onClick={close}
        >
          <span className="bg-gradient-to-r from-fg via-accent to-cyber bg-clip-text text-transparent">TA</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent to-cyber transition-all duration-300 group-hover:w-full" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-glass-border bg-glass/50 text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.28 }}
            className="overflow-hidden border-t border-glass-border bg-deep/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-glass hover:text-fg"
                    onClick={close}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
