import FadeIn from './FadeIn'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We talk through what you need, what success looks like, and what\'s realistic. No fluff, just clarity.',
  },
  {
    num: '02',
    title: 'Scope & Quote',
    desc: 'You get a flat-rate quote with a clear scope. No hourly surprises, no scope creep without agreement.',
  },
  {
    num: '03',
    title: 'Build & Iterate',
    desc: 'I ship fast with regular check-ins. You see real progress early and can give feedback that matters.',
  },
  {
    num: '04',
    title: 'Ship & Support',
    desc: 'Deployed, documented, and handed off cleanly. Available for follow-up questions and future work.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <FadeIn className="text-center max-w-xl mx-auto mb-16">
          <p className="font-mono text-xs font-medium text-purple-light tracking-widest uppercase mb-3">
            How I work
          </p>
          <h2 className="text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15]">
            From idea to live<br />in days, not months.
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.35), transparent)' }}
          />

          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 100}>
              <div className="text-center px-4">
                <div className="w-12 h-12 rounded-full border border-[var(--border-glow)] bg-surface flex items-center justify-center font-mono text-sm font-bold text-purple-light mx-auto mb-5 relative z-10">
                  {s.num}
                </div>
                <h3 className="text-[15px] font-bold mb-2">{s.title}</h3>
                <p className="text-[13px] text-muted leading-[1.65]">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
