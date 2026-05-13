'use client'

import { useEffect, useRef, useState } from 'react'

const CHAPTERS = [
  { key: 'system',      label: 'System'      },
  { key: 'pantheon',    label: 'Pantheon'    },
  { key: 'memory',      label: 'Memory'      },
  { key: 'behavioral',  label: 'Behavioral'  },
  { key: 'interfaces',  label: 'Interfaces'  },
] as const

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ChapterTag({ children }: { children: string }) {
  return (
    <div className="font-mono text-[9px] tracking-[0.35em] text-violet-400/60 uppercase mb-5">
      {children}
    </div>
  )
}

interface PanelProps {
  active: boolean
  children: React.ReactNode
}

function Panel({ active, children }: PanelProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center px-8 lg:px-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}

function NodeGraph() {
  return (
    <svg
      viewBox="0 0 300 130"
      width="300"
      height="130"
      aria-label="Odin agent network diagram"
      className="opacity-55"
    >
      {/* Lines from center to agents */}
      <line x1="145" y1="65" x2="55"  y2="65"  stroke="#7c3aed" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="155" y1="65" x2="245" y2="65"  stroke="#06b6d4" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="150" y1="50" x2="150" y2="18"  stroke="#10b981" strokeWidth="0.75" strokeDasharray="4 3" />
      {/* Line to integrations */}
      <line x1="150" y1="80" x2="150" y2="106" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />

      {/* Brokkr */}
      <circle cx="40"  cy="65" r="15" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="0.75" />
      <text x="40"  y="69" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="monospace">Brokkr</text>

      {/* Odin center */}
      <circle cx="150" cy="65" r="20" fill="rgba(124,58,237,0.12)" stroke="#7c3aed" strokeWidth="1" />
      <text x="150" y="69" textAnchor="middle" fill="white" fontSize="9.5" fontFamily="monospace" fontWeight="bold">ODIN</text>

      {/* Sindri */}
      <circle cx="260" cy="65" r="15" fill="rgba(6,182,212,0.08)"   stroke="#06b6d4" strokeWidth="0.75" />
      <text x="260" y="69" textAnchor="middle" fill="#67e8f9" fontSize="7" fontFamily="monospace">Sindri</text>

      {/* TTS top */}
      <circle cx="150" cy="12" r="10" fill="rgba(16,185,129,0.08)"  stroke="#10b981" strokeWidth="0.75" />
      <text x="150" y="16" textAnchor="middle" fill="#6ee7b7" fontSize="6.5" fontFamily="monospace">TTS</text>

      {/* Integration dots */}
      {(['Spotify', 'Calendar', 'Plaid'] as const).map((label, i) => (
        <g key={label} transform={`translate(${80 + i * 70}, 114)`}>
          <circle r="3.5" fill="rgba(124,58,237,0.2)" stroke="#7c3aed" strokeWidth="0.5" />
          <text y="15" textAnchor="middle" fill="#7c3aed" fontSize="6" fontFamily="monospace" opacity="0.65">{label}</text>
        </g>
      ))}
    </svg>
  )
}

function SystemPanel({ active }: { active: boolean }) {
  return (
    <Panel active={active}>
      <ChapterTag>Overview</ChapterTag>
      <h4 className="text-3xl lg:text-[2.25rem] font-bold text-white leading-tight mb-5">
        Speak a command.<br />
        <span className="text-white/35">Odin routes it.</span>
      </h4>
      <p className="text-[14px] text-white/45 leading-relaxed max-w-[52ch] mb-10">
        A personal AI operating system built on a Norse mythology agent pantheon. Voice input flows to Odin, who evaluates intent and dispatches to the right specialist — with real-world context from Spotify, Google Calendar, and Plaid.
      </p>
      <NodeGraph />
    </Panel>
  )
}

function PantheonPanel({ active }: { active: boolean }) {
  const agents = [
    {
      name: 'Brokkr',
      role: 'Build Agent',
      model: 'Claude API',
      desc: 'The craftsman. Routes complex build tasks — code generation, scaffolding, implementation. When precision matters, Brokkr handles it.',
      nameClass:   'text-violet-400',
      borderClass: 'border-violet-500/20',
      bgClass:     'bg-violet-500/[0.05]',
    },
    {
      name: 'Sindri',
      role: 'Research Agent',
      model: 'Ollama · qwen2.5',
      desc: 'The scholar. Deep research and retrieval via local LLM. Runs entirely on-device — private, free, fast. Escalates to Brokkr when it hits its ceiling.',
      nameClass:   'text-cyan-400',
      borderClass: 'border-cyan-500/20',
      bgClass:     'bg-cyan-500/[0.05]',
    },
    {
      name: 'TTS',
      role: 'Voice Pipeline',
      model: 'Coqui VITS',
      desc: 'Custom voice model fine-tuned on personal recordings. Flask inference server with automatic Lemonfox fallback. Runs natively on Apple Silicon.',
      nameClass:   'text-emerald-400',
      borderClass: 'border-emerald-500/20',
      bgClass:     'bg-emerald-500/[0.05]',
    },
  ]

  return (
    <Panel active={active}>
      <ChapterTag>Agents</ChapterTag>
      <h4 className="text-3xl font-bold text-white mb-6">The Pantheon</h4>
      <div className="space-y-3">
        {agents.map(a => (
          <div key={a.name} className={`rounded-xl border ${a.borderClass} ${a.bgClass} p-4`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`font-mono font-bold text-[13px] ${a.nameClass}`}>{a.name}</span>
                <span className="text-white/20 text-xs">·</span>
                <span className="text-white/45 text-[12px]">{a.role}</span>
              </div>
              <span className="font-mono text-[10px] text-white/20">{a.model}</span>
            </div>
            <p className="text-[12px] text-white/35 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function MemoryPanel({ active }: { active: boolean }) {
  return (
    <Panel active={active}>
      <ChapterTag>Memory System</ChapterTag>
      <h4 className="text-3xl lg:text-[2.25rem] font-bold text-white leading-tight mb-5">
        Not files.<br />
        <span className="text-violet-400">Embeddings.</span>
      </h4>
      <p className="text-[14px] text-white/45 leading-relaxed max-w-[50ch] mb-9">
        Odin&apos;s memory runs on vector math. Information is encoded as high-dimensional embeddings and retrieved by semantic similarity — what you <span className="italic text-white/55">meant</span>, not just what you typed.
      </p>
      <div className="space-y-4 max-w-[46ch]">
        {[
          { title: 'Goals persist',       desc: 'Set an intention once. Odin carries it forward across every session.' },
          { title: 'Context compounds',   desc: 'Each interaction sharpens future recall. The more you use it, the more precise it gets.' },
          { title: 'Semantic retrieval',  desc: 'Vector distance, not keyword match. Related ideas surface even when the words don\'t match.' },
        ].map(({ title, desc }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className="w-px h-10 rounded-full bg-violet-500/35 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[13px] font-semibold text-white/65 mb-0.5">{title}</div>
              <div className="text-[12px] text-white/30 leading-relaxed">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function BehavioralPanel({ active }: { active: boolean }) {
  return (
    <Panel active={active}>
      <ChapterTag>Behavioral Intelligence</ChapterTag>
      <h4 className="text-3xl lg:text-[2.25rem] font-bold text-white leading-tight mb-5">
        Your AI notices<br />
        <span className="text-cyan-400">when you should sleep.</span>
      </h4>
      <p className="text-[14px] text-white/45 leading-relaxed max-w-[50ch] mb-9">
        Set a goal — health, productivity, anything. Odin tracks your metrics and interaction patterns over time, then sends proactive nudges when your behavior drifts from your intentions. No prompt needed.
      </p>
      <div className="space-y-3 max-w-[46ch]">
        {[
          { step: '01', trigger: 'Goal set',         result: 'Stored in vector memory'              },
          { step: '02', trigger: 'Patterns tracked',  result: 'Sleep, activity, interaction times'  },
          { step: '03', trigger: 'Drift detected',    result: 'Proactive message, unprompted'       },
        ].map(({ step, trigger, result }) => (
          <div key={step} className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full border border-cyan-500/30 bg-cyan-500/[0.07] flex items-center justify-center flex-shrink-0">
              <span className="font-mono text-[8px] text-cyan-400/70">{step}</span>
            </div>
            <div className="text-[12px]">
              <span className="text-white/55 font-medium">{trigger}</span>
              <span className="text-white/25 mx-2 text-xs">→</span>
              <span className="text-white/30">{result}</span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function InterfacesPanel({ active }: { active: boolean }) {
  const surfaces = [
    { name: 'Web HUD',      desc: 'SageOrb animated AI companion dashboard',  border: 'border-violet-500/20', hover: 'hover:border-violet-500/40 hover:bg-violet-500/[0.05]' },
    { name: 'iOS App',      desc: 'Native mobile companion',                   border: 'border-blue-500/20',   hover: 'hover:border-blue-500/40 hover:bg-blue-500/[0.05]'   },
    { name: 'Discord Bot',  desc: 'Remote access from any device',             border: 'border-indigo-500/20', hover: 'hover:border-indigo-500/40 hover:bg-indigo-500/[0.05]' },
    { name: 'Voice',        desc: 'TTS + Web Speech, fully hands-free',        border: 'border-emerald-500/20',hover: 'hover:border-emerald-500/40 hover:bg-emerald-500/[0.05]' },
    { name: 'Vision',       desc: 'Video ingestion + Claude analysis',         border: 'border-pink-500/20',   hover: 'hover:border-pink-500/40 hover:bg-pink-500/[0.05]'   },
    { name: 'Data Nucleus', desc: '3D agent network visualization',            border: 'border-cyan-500/20',   hover: 'hover:border-cyan-500/40 hover:bg-cyan-500/[0.05]'   },
  ]

  return (
    <Panel active={active}>
      <ChapterTag>Interfaces</ChapterTag>
      <h4 className="text-3xl font-bold text-white mb-7">Everywhere you are.</h4>
      <div className="grid grid-cols-2 gap-2.5">
        {surfaces.map(({ name, desc, border, hover }) => (
          <div
            key={name}
            className={`rounded-lg border ${border} ${hover} bg-white/[0.02] p-3.5 transition-colors duration-200`}
          >
            <div className="text-[12px] font-semibold text-white/65 mb-1">{name}</div>
            <div className="text-[11px] text-white/28 leading-snug">{desc}</div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default function OdinShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [chapter, setChapter] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onScroll = () => {
      const rect     = el.getBoundingClientRect()
      const scrollable = el.offsetHeight - window.innerHeight
      const scrolled   = Math.max(0, -rect.top)
      const progress   = Math.min(1, scrolled / scrollable)
      setChapter(Math.min(CHAPTERS.length - 1, Math.floor(progress * CHAPTERS.length)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ height: `${(CHAPTERS.length + 1) * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#07070f]">
        {/* Ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_25%_50%,rgba(124,58,237,0.14),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_75%_55%,rgba(6,182,212,0.06),transparent)]" />

        <div
          className="relative z-10 h-full flex flex-col md:grid"
          style={{ gridTemplateColumns: '300px 1fr' }}
        >
          {/* ── Left: Identity ── */}
          <div className="flex flex-col justify-between py-10 px-8 lg:px-10 border-b md:border-b-0 md:border-r border-white/[0.05]">
            <div>
              {/* Rune mark */}
              <div className="mb-8">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                  <circle cx="15" cy="15" r="13.5" stroke="#7c3aed" strokeWidth="0.75" />
                  <line x1="15" y1="1.5" x2="15" y2="28.5" stroke="#7c3aed" strokeWidth="0.75" />
                  <line x1="1.5" y1="15" x2="28.5" y2="15" stroke="#7c3aed" strokeWidth="0.75" />
                  <circle cx="15" cy="15" r="3.5" stroke="#7c3aed" strokeWidth="0.75" fill="none" />
                  <circle cx="15" cy="15" r="1.25" fill="#7c3aed" />
                </svg>
              </div>

              <div className="font-mono text-[9px] tracking-[0.35em] text-violet-400/55 uppercase mb-2">
                Personal AI System
              </div>
              <div className="text-[3.5rem] lg:text-[4rem] font-black tracking-[-0.04em] leading-[0.88] text-white mb-5">
                ODIN
              </div>
              <p className="text-[12px] text-white/30 leading-relaxed max-w-[22ch]">
                A living system that knows your goals, tracks your patterns, and acts on your behalf.
              </p>
            </div>

            {/* Chapter nav */}
            <nav aria-label="Odin showcase sections" className="hidden md:block">
              <div className="space-y-2.5">
                {CHAPTERS.map((c, i) => (
                  <div key={c.key} className="flex items-center gap-3">
                    <div className={`h-px rounded-full transition-all duration-500 ease-out ${
                      i === chapter
                        ? 'w-8 bg-violet-400'
                        : i < chapter
                          ? 'w-4 bg-white/20'
                          : 'w-2 bg-white/10'
                    }`} />
                    <span className={`text-[11px] font-mono tracking-wide transition-colors duration-300 ${
                      i === chapter ? 'text-white/80' : i < chapter ? 'text-white/25' : 'text-white/15'
                    }`}>
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </nav>

            {/* Status badge */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-mono text-white/25">Active development</span>
            </div>
          </div>

          {/* ── Right: Chapter panels ── */}
          <div className="relative flex-1 overflow-hidden">
            <SystemPanel     active={chapter === 0} />
            <PantheonPanel   active={chapter === 1} />
            <MemoryPanel     active={chapter === 2} />
            <BehavioralPanel active={chapter === 3} />
            <InterfacesPanel active={chapter === 4} />
          </div>
        </div>
      </div>
    </div>
  )
}
