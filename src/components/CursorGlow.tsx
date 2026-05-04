import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export function CursorGlow() {
  const reduced = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduced) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px] transition-opacity duration-500"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            'radial-gradient(circle, rgba(124,92,255,0.35) 0%, rgba(0,212,255,0.12) 45%, transparent 70%)',
          opacity: visible ? 0.55 : 0,
        }}
      />
    </div>
  )
}
