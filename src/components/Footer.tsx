import { personal } from '../data/content'

const quick = [
  { href: '#how-i-think', label: 'How I Think' },
  { href: '#projects', label: 'Case Studies' },
  { href: '#beyond-code', label: 'Beyond Code' },
  { href: '#contact', label: 'Contact' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-glass-border bg-deep/80 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-fg">{personal.name}</p>
          <p className="mt-1 text-xs text-muted">{personal.role}</p>
          <p className="mt-3 text-xs text-muted">
            © {year} {personal.name}. Built for real-world product impact.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {quick.map((q) => (
              <li key={q.href}>
                <a href={q.href} className="link-underline text-sm text-muted transition-colors hover:text-fg">
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}