'use client'

import { useEffect, useRef } from 'react'

const phrases = [
  'AI voice assistants that actually listen.',
  'iOS games built solo in weeks.',
  'Agent systems that do the work for you.',
  'Web apps that ship in days.',
]

const stack = ['React', 'Next.js', 'Swift', 'Node.js', 'Python', 'Claude API', 'Ollama']

export default function Hero() {
  const twRef  = useRef<HTMLSpanElement>(null)
  const state  = useRef({ pi: 0, ci: 0, deleting: false })

  useEffect(() => {
    let raf: ReturnType<typeof setTimeout>

    function tick() {
      const { pi, ci, deleting } = state.current
      const phrase = phrases[pi]
      const el = twRef.current
      if (!el) return

      if (!deleting) {
        el.textContent = phrase.slice(0, ci + 1)
        state.current.ci++
        if (state.current.ci === phrase.length) {
          state.current.deleting = true
          raf = setTimeout(tick, 2000)
          return
        }
      } else {
        el.textContent = phrase.slice(0, ci - 1)
        state.current.ci--
        if (state.current.ci === 0) {
          state.current.deleting = false
          state.current.pi = (pi + 1) % phrases.length
        }
      }
      raf = setTimeout(tick, deleting ? 40 : 70)
    }

    raf = setTimeout(tick, 400)
    return () => clearTimeout(raf)
  }, [])

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-purple-DEFAULT/10 border border-purple-DEFAULT/30 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-light tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse-dot" />
              Available for freelance work
            </div>

            <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.07] tracking-[-0.03em] mb-5">
              I build things<br />
              <span className="grad-text">that actually ship.</span>
            </h1>

            {/* Typewriter */}
            <p className="font-mono text-base lg:text-lg text-cyan-DEFAULT mb-6 min-h-7 typewriter-cursor">
              <span ref={twRef} />
            </p>

            <p className="text-base text-muted leading-relaxed mb-10 max-w-lg">
              Freelance engineer specializing in web apps, AI integrations, automations,
              and rapid prototyping. I use the best tools available — including AI —
              to build faster and smarter.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 grad-bg text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition-all duration-200"
              >
                Let&apos;s work together
                <ArrowRight />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl border border-dim hover:border-white/20 hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-200"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Right: code card */}
          <div className="hidden lg:block">
            <div className="relative bg-surface border border-dim rounded-2xl p-7 overflow-hidden glow-line">
              {/* Window dots */}
              <div className="flex gap-1.5 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>

              <pre className="font-mono text-[13px] leading-relaxed text-muted select-none">
                <CodeLine ln="1" comment="// latest build" />
                <CodeLine ln="2"><Kw>const</Kw> <Fn>project</Fn> = {'{'}</CodeLine>
                <CodeLine ln="3">&nbsp;&nbsp;name: <Str>&quot;client-dashboard&quot;</Str>,</CodeLine>
                <CodeLine ln="4">&nbsp;&nbsp;stack: [<Str>&quot;Next.js&quot;</Str>, <Str>&quot;AI&quot;</Str>],</CodeLine>
                <CodeLine ln="5">&nbsp;&nbsp;shipped: <Kw>true</Kw>,</CodeLine>
                <CodeLine ln="6">&nbsp;&nbsp;days: <Num>4</Num>,</CodeLine>
                <CodeLine ln="7">{'}'}</CodeLine>
                <CodeLine ln="8">&nbsp;</CodeLine>
                <CodeLine ln="9" comment="// status" />
                <CodeLine ln="10"><Fn>console</Fn>.<Fn>log</Fn>(<Str>&quot;✓ deployed&quot;</Str>)</CodeLine>
              </pre>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-dim">
                {[
                  { num: '6+', label: 'Projects' },
                  { num: 'iOS+Web', label: 'Platforms' },
                  { num: 'AI', label: 'Native' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <span className="block text-xl font-extrabold grad-text">{s.num}</span>
                    <span className="block text-[10px] text-dim uppercase tracking-widest mt-1">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2 mt-5">
                {stack.map(t => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-dim text-muted bg-white/[0.02]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Tiny inline helpers ── */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CodeLine({ ln, children, comment }: { ln: string; children?: React.ReactNode; comment?: string }) {
  return (
    <div>
      <span className="text-[var(--text-dim)] mr-4 select-none">{ln}</span>
      {comment ? <span className="text-[var(--text-dim)] italic">{comment}</span> : children}
    </div>
  )
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-light">{children}</span>
}
function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-cyan-DEFAULT">{children}</span>
}
function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-400">{children}</span>
}
function Num({ children }: { children: React.ReactNode }) {
  return <span className="text-pink-DEFAULT">{children}</span>
}
