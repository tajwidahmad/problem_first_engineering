import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import { type FormEvent, useState } from 'react'
import { personal } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '').trim()
const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '').trim()
const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '').trim()

export function Contact() {
  const reduced = usePrefersReducedMotion()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const validate = () => {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email.'
    if (!message.trim()) next.message = 'Please enter a message.'
    else if (message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('idle')
    if (!validate()) return

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name.trim(),
          reply_to: email.trim(),
          message: message.trim(),
          to_email: personal.email,
        },
        publicKey,
      )
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const social = [
    { href: personal.social.github, label: 'GitHub', icon: FaGithub },
    { href: personal.social.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: personal.social.leetcode, label: 'LeetCode', icon: SiLeetcode },
    { href: personal.social.geeksforgeeks, label: 'GeeksforGeeks', icon: SiGeeksforgeeks },
  ] as const

  return (
    <Section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something remarkable"
          subtitle="Reach out for collaborations, internships, or full-stack and backend-focused roles. I typically reply within 24–48 hours."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            className="glass-panel rounded-2xl p-6 sm:p-8 lg:col-span-2"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-fg">Direct</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-start gap-3 text-muted transition-colors hover:text-fg"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyber" />
                  <span>
                    <span className="link-underline block font-medium text-fg">
                      {personal.email}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">Email</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, '')}`}
                  className="group flex items-start gap-3 text-muted transition-colors hover:text-fg"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="link-underline block font-medium text-fg">
                      {personal.phone}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">Phone</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyber" />
                <span>
                  <span className="block font-medium text-fg">{personal.location}</span>
                  <span className="mt-0.5 block text-xs text-muted">Location</span>
                </span>
              </li>
            </ul>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-muted">
              Social
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {social.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-elevated/40 px-3 py-2 text-xs font-medium text-fg transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_0_20px_-8px_rgba(124,92,255,0.35)]"
                >
                  <Icon className="h-4 w-4 shrink-0 text-cyber" aria-hidden />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="glass-panel rounded-2xl p-6 sm:p-8 lg:col-span-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-xs font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-glass-border bg-deep/60 px-4 py-3 text-sm text-fg outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-muted/50 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(124,92,255,0.15)]"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                )}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-xs font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-glass-border bg-deep/60 px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] placeholder:text-muted/50 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(124,92,255,0.15)]"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full resize-y rounded-xl border border-glass-border bg-deep/60 px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] placeholder:text-muted/50 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(124,92,255,0.15)]"
                  placeholder="Tell me about your project, role, or idea…"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#6a7cff] px-8 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-[transform,opacity] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                whileTap={reduced ? undefined : { scale: 0.98 }}
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </motion.button>
              <p className="text-xs text-muted">
                Powered by EmailJS · Delivered to{' '}
                <span className="text-fg/90">{personal.email}</span>
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.p
                  key="ok"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-4 rounded-xl border border-cyber/30 bg-cyber-dim px-4 py-3 text-sm text-cyber"
                >
                  Thanks — your message is on its way. I’ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {!serviceId || !templateId || !publicKey
                    ? 'EmailJS env vars are missing. Add them in .env and restart the dev server.'
                    : 'Something went wrong. Please try again or email me directly.'}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </Section>
  )
}
