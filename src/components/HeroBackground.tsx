export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,92,255,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(0,212,255,0.08),transparent_50%)]" />
      <svg
        className="absolute -bottom-24 left-1/2 h-[420px] w-[140%] -translate-x-1/2 opacity-[0.4] motion-safe:animate-[wave-shift_18s_ease-in-out_infinite]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave)"
          d="M0,160 C360,240 720,80 1080,140 C1260,170 1380,150 1440,130 L1440,320 L0,320 Z"
        />
      </svg>
      <div className="absolute left-[12%] top-[22%] h-64 w-64 motion-safe:animate-[float_12s_ease-in-out_infinite] rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute right-[8%] top-[38%] h-48 w-48 motion-safe:animate-[float_14s_ease-in-out_infinite_reverse] rounded-full bg-cyber/15 blur-[90px]" />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(12px, -18px) scale(1.06); }
        }
        @keyframes wave-shift {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-12px); }
        }
      `}</style>
    </div>
  )
}
