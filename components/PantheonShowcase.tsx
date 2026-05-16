'use client'

import { useEffect, useRef, useState } from 'react'

const CHAPTERS = [
  { key: 'overview',  label: 'Overview'  },
  { key: 'odin',      label: 'Odin'      },
  { key: 'sif',       label: 'Sif'       },
  { key: 'vidarr',    label: 'Víðarr'    },
  { key: 'brokkr',    label: 'Brokkr'    },
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

function ConstellationGraph() {
  return (
    <svg
      viewBox="0 0 320 140"
      width="320"
      height="140"
      aria-label="Pantheon agent constellation"
      className="opacity-55"
    >
      {/* Lines from Odin to each sub-agent */}
      <line x1="160" y1="70" x2="55"  y2="32"  stroke="#7c3aed" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="160" y1="70" x2="265" y2="32"  stroke="#06b6d4" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="160" y1="70" x2="55"  y2="108" stroke="#10b981" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="160" y1="70" x2="265" y2="108" stroke="#f59e0b" strokeWidth="0.75" strokeDasharray="4 3" />

      {/* Odin — center */}
      <circle cx="160" cy="70" r="22" fill="rgba(124,58,237,0.12)" stroke="#7c3aed" strokeWidth="1" />
      <text x="160" y="74" textAnchor="middle" fill="white" fontSize="9.5" fontFamily="monospace" fontWeight="bold">ODIN</text>

      {/* Sif — top-left */}
      <circle cx="42"  cy="28"  r="16" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="0.75" />
      <text x="42"  y="32"  textAnchor="middle" fill="#a78bfa" fontSize="7.5" fontFamily="monospace">Sif</text>

      {/* Víðarr — bottom-left */}
      <circle cx="42"  cy="112" r="16" fill="rgba(16,185,129,0.08)"  stroke="#10b981" strokeWidth="0.75" />
      <text x="42"  y="116" textAnchor="middle" fill="#6ee7b7" fontSize="7.5" fontFamily="monospace">Víðarr</text>

      {/* Brokkr — top-right */}
      <circle cx="278" cy="28"  r="16" fill="rgba(6,182,212,0.08)"   stroke="#06b6d4" strokeWidth="0.75" />
      <text x="278" y="32"  textAnchor="middle" fill="#67e8f9" fontSize="7.5" fontFamily="monospace">Brokkr</text>

      {/* Sindri — bottom-right */}
      <circle cx="278" cy="112" r="16" fill="rgba(245,158,11,0.08)"  stroke="#f59e0b" strokeWidth="0.75" />
      <text x="278" y="116" textAnchor="middle" fill="#fcd34d" fontSize="7.5" fontFamily="monospace">Sindri</text>
    </svg>
  )
}

/* ── Chapter panels ─────────────────────────────── */

function OverviewPanel({ active }: { active: boolean }) {
  return (
    <Panel active={active}>
      <ChapterTag>Overview</ChapterTag>
      <h4 className="text-3xl lg:text-[2.25rem] font-bold text-white leading-tight mb-5">
        One system.<br />
        <span className="text-white/35">Many gods.</span>
      </h4>
      <p className="text-[14px] text-white/45 leading-relaxed max-w-[52ch] mb-10">
        Pantheon is a personal AI operating system built around Norse mythology. Each agent is named after a god and solves one specific problem — they orbit Odin, the central orchestrator, who routes tasks, manages memory, and coordinates action across your life.
      </p>
      <ConstellationGraph />
    </Panel>
  )
}

function OdinPanel({ active }: { active: boolean }) {
  const pipeline = [
    { step: '01', name: 'Voice Input',        detail: 'Web Speech API → natural language'         },
    { step: '02', name: 'Orchestrator',        detail: 'claude-opus — plans strategy'              },
    { step: '03', name: 'Router',              detail: 'claude-haiku — classifies intent'          },
    { step: '04', name: 'Primary Agent',       detail: 'Executes: finance, research, action…'      },
    { step: '05', name: 'Response Composer',   detail: 'claude-sonnet — voice-formatted reply'     },
  ]

  return (
    <Panel active={active}>
      <ChapterTag>Odin · Central Orchestrator</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        Speak a command.<br />
        <span className="text-violet-400">Odin routes it.</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-7">
        A multi-agent AI OS. Voice flows through a five-stage pipeline with real-world context from Spotify, Google Calendar, Gmail, and Plaid — then outputs to web, iOS, and Discord simultaneously.
      </p>
      <div className="space-y-2.5 max-w-[44ch]">
        {pipeline.map(({ step, name, detail }) => (
          <div key={step} className="flex items-start gap-3.5">
            <div className="w-6 h-6 rounded-full border border-violet-500/30 bg-violet-500/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="font-mono text-[8px] text-violet-400/70">{step}</span>
            </div>
            <div className="text-[12px]">
              <span className="text-white/60 font-semibold">{name}</span>
              <span className="text-white/22 mx-2 text-[10px]">→</span>
              <span className="text-white/30">{detail}</span>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/jarrenpatao/Pantheon"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-white/25 hover:text-violet-400 transition-colors duration-200 w-fit"
      >
        <GitHubIcon />
        GitHub
      </a>
    </Panel>
  )
}

function SifPanel({ active }: { active: boolean }) {
  const steps = [
    { icon: '🥩', label: 'List what you have',         sub: 'Type ingredients, no format required'     },
    { icon: '⚡', label: 'Claude generates 3 options',  sub: 'Real meals, real ingredients, under 10s'  },
    { icon: '🍳', label: 'Pick one and cook',           sub: 'No guesswork, no waste'                   },
  ]

  return (
    <Panel active={active}>
      <ChapterTag>Sif · Meal Planner</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        What can you make<br />
        <span className="text-violet-400">right now?</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-8">
        Tell Sif what's in your kitchen. Get three real meal options in under ten seconds. No sign-up, no subscriptions, no recipe blogs — just Claude and whatever's on your shelf.
      </p>
      <div className="space-y-4 max-w-[44ch]">
        {steps.map(({ icon, label, sub }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg border border-violet-500/20 bg-violet-500/[0.06] flex items-center justify-center flex-shrink-0 text-base">
              {icon}
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white/60 mb-0.5">{label}</div>
              <div className="text-[11px] text-white/28 leading-relaxed">{sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {['React + Vite', 'Node / Express', 'Claude API', 'Railway'].map(t => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.06] text-white/25 bg-white/[0.02]">
            {t}
          </span>
        ))}
      </div>
    </Panel>
  )
}

function VidarrPanel({ active }: { active: boolean }) {
  const floors = [
    { num: '01', label: 'Eat something real',    color: 'text-emerald-400', border: 'border-emerald-500/25', bg: 'bg-emerald-500/[0.05]' },
    { num: '02', label: 'Basic hygiene',          color: 'text-cyan-400',    border: 'border-cyan-500/25',    bg: 'bg-cyan-500/[0.05]'    },
    { num: '03', label: 'Move your body',         color: 'text-violet-400',  border: 'border-violet-500/25',  bg: 'bg-violet-500/[0.05]'  },
  ]

  return (
    <Panel active={active}>
      <ChapterTag>Víðarr · Daily Floor Tracker</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        Not your best days.<br />
        <span className="text-emerald-400">Just the floor.</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-8">
        Living alone removes ambient structure. Víðarr is a minimal nightly check-in — one question, three floors. It doesn&apos;t judge the ceiling. It just remembers whether you held the baseline.
      </p>
      <div className="space-y-3 max-w-[40ch]">
        {floors.map(({ num, label, color, border, bg }) => (
          <div key={num} className={`flex items-center gap-4 rounded-xl border ${border} ${bg} px-4 py-3`}>
            <span className={`font-mono text-[10px] ${color} opacity-60`}>{num}</span>
            <span className={`text-[13px] font-semibold ${color}`}>{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {['React + Vite', 'Node / Express', 'Railway'].map(t => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.06] text-white/25 bg-white/[0.02]">
            {t}
          </span>
        ))}
      </div>
    </Panel>
  )
}

function BrokkrPanel({ active }: { active: boolean }) {
  const capabilities = [
    { title: 'Repo inspection',      desc: 'Summarize files and map structure without leaving the terminal.'  },
    { title: 'Implementation plans', desc: 'Draft architecture and task breakdowns before handing off to Claude.' },
    { title: 'Project memory',       desc: 'Persist context across sessions so nothing is re-explained.'        },
    { title: 'Claude handoffs',      desc: 'Prepare structured prompts for escalation to stronger models.'      },
  ]

  return (
    <Panel active={active}>
      <ChapterTag>Brokkr · Local Builder Workshop</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        The craftsman&apos;s<br />
        <span className="text-cyan-400">workshop.</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-7">
        Brokkr runs on-device via Ollama and small local models — no API costs, no cloud dependency. It&apos;s the planning and scaffolding layer where the rest of Pantheon gets built, documented, and handed off.
      </p>
      <div className="grid grid-cols-2 gap-2.5 max-w-[46ch]">
        {capabilities.map(({ title, desc }) => (
          <div key={title} className="rounded-lg border border-cyan-500/15 bg-cyan-500/[0.04] p-3.5">
            <div className="text-[12px] font-semibold text-cyan-400/70 mb-1">{title}</div>
            <div className="text-[11px] text-white/25 leading-snug">{desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {['Ollama', 'Local LLM', 'Node.js'].map(t => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.06] text-white/25 bg-white/[0.02]">
            {t}
          </span>
        ))}
      </div>
    </Panel>
  )
}

/* ── Main export ────────────────────────────────── */

export default function PantheonShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [chapter, setChapter] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onScroll = () => {
      const rect      = el.getBoundingClientRect()
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
              {/* Yggdrasil-inspired rune mark */}
              <div className="mb-8">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                  <circle cx="15" cy="15" r="13.5" stroke="#7c3aed" strokeWidth="0.75" />
                  <line x1="15" y1="1.5"  x2="15" y2="28.5" stroke="#7c3aed" strokeWidth="0.75" />
                  <line x1="1.5" y1="15"  x2="28.5" y2="15" stroke="#7c3aed" strokeWidth="0.75" />
                  <line x1="5"   y1="5"   x2="25"   y2="25" stroke="#7c3aed" strokeWidth="0.5" opacity="0.4" />
                  <line x1="25"  y1="5"   x2="5"    y2="25" stroke="#7c3aed" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="15" cy="15" r="3.5" stroke="#7c3aed" strokeWidth="0.75" fill="none" />
                  <circle cx="15" cy="15" r="1.25" fill="#7c3aed" />
                </svg>
              </div>

              <div className="font-mono text-[9px] tracking-[0.35em] text-violet-400/55 uppercase mb-2">
                Personal AI System
              </div>
              <div className="text-[2.4rem] lg:text-[2.75rem] font-black tracking-[-0.04em] leading-[0.88] text-white mb-5">
                PANTHEON
              </div>
              <p className="text-[12px] text-white/30 leading-relaxed max-w-[22ch]">
                A Norse-mythology agent system. Each god solves one problem. Odin coordinates them all.
              </p>
            </div>

            {/* Chapter nav */}
            <nav aria-label="Pantheon showcase sections" className="hidden md:block">
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
            <OverviewPanel active={chapter === 0} />
            <OdinPanel     active={chapter === 1} />
            <SifPanel      active={chapter === 2} />
            <VidarrPanel   active={chapter === 3} />
            <BrokkrPanel   active={chapter === 4} />
          </div>
        </div>
      </div>
    </div>
  )
}
