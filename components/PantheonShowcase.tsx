'use client'

import { useEffect, useRef, useState } from 'react'
import {
  GitHubIcon,
  OdinIcon,
  MuninnIcon,
  SifIcon,
  VidarrIcon,
  BrokkrIcon,
  SindriIcon,
  SifListIcon,
  SifGenerateIcon,
  SifCookIcon,
} from './Icons'

type ChapterIcon = (p: { size?: number; className?: string }) => React.ReactElement

const CHAPTERS: ReadonlyArray<{ key: string; label: string; Icon?: ChapterIcon }> = [
  { key: 'overview',  label: 'Overview'                     },
  { key: 'odin',      label: 'Odin',      Icon: OdinIcon    },
  { key: 'muninn',    label: 'Muninn',    Icon: MuninnIcon  },
  { key: 'sif',       label: 'Sif',       Icon: SifIcon     },
  { key: 'vidarr',    label: 'Víðarr',    Icon: VidarrIcon  },
  { key: 'brokkr',    label: 'Brokkr',    Icon: BrokkrIcon  },
]

function ChapterTag({ children, Icon }: { children: string; Icon?: ChapterIcon }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.35em] text-violet-400/60 uppercase mb-5">
      {Icon && <Icon size={12} className="text-violet-300/80" />}
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

/* ── Constellation ─────────────────────────────── */

interface NodeProps {
  cx: number
  cy: number
  r: number
  stroke: string
  fill: string
  tint: string
  label: string
  Icon: ChapterIcon
  iconSize?: number
  labelSide?: 'below' | 'right'
  bold?: boolean
}

/** A god node: ring, glyph inside, label outside. */
function ConstellationNode({ cx, cy, r, stroke, fill, tint, label, Icon, iconSize = 12, labelSide = 'below', bold }: NodeProps) {
  const half = iconSize / 2
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={bold ? 1 : 0.75} />
      <g transform={`translate(${cx - half} ${cy - half})`} style={{ color: tint }}>
        <Icon size={iconSize} />
      </g>
      {labelSide === 'below' ? (
        <text x={cx} y={cy + r + 9} textAnchor="middle" fill={tint} fontSize={bold ? 8 : 7} fontFamily="monospace" fontWeight={bold ? 'bold' : undefined} letterSpacing={bold ? 1.5 : undefined}>
          {label}
        </text>
      ) : (
        <text x={cx + r + 5} y={cy + 2.5} textAnchor="start" fill={tint} fontSize="6.5" fontFamily="monospace">
          {label}
        </text>
      )}
    </g>
  )
}

function ConstellationGraph() {
  return (
    <svg
      viewBox="0 0 320 156"
      width="320"
      height="156"
      aria-label="Pantheon agent constellation"
      className="opacity-60"
    >
      {/* Lines from Odin to each sub-agent */}
      <line x1="160" y1="72" x2="55"  y2="34"  stroke="#7c3aed" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="160" y1="72" x2="265" y2="34"  stroke="#06b6d4" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="160" y1="72" x2="55"  y2="110" stroke="#10b981" strokeWidth="0.75" strokeDasharray="4 3" />
      <line x1="160" y1="72" x2="265" y2="110" stroke="#f59e0b" strokeWidth="0.75" strokeDasharray="4 3" />
      {/* Muninn orbits close */}
      <line x1="160" y1="50" x2="160" y2="26" stroke="#818cf8" strokeWidth="0.75" strokeDasharray="3 2" />

      <ConstellationNode cx={160} cy={72}  r={22} stroke="#7c3aed" fill="rgba(124,58,237,0.12)" tint="#ffffff" label="ODIN"   Icon={OdinIcon}   iconSize={18} bold />
      <ConstellationNode cx={160} cy={14}  r={12} stroke="#818cf8" fill="rgba(99,102,241,0.10)" tint="#a5b4fc" label="Muninn" Icon={MuninnIcon} iconSize={11} labelSide="right" />
      <ConstellationNode cx={42}  cy={30}  r={16} stroke="#7c3aed" fill="rgba(124,58,237,0.08)" tint="#a78bfa" label="Sif"    Icon={SifIcon} />
      <ConstellationNode cx={42}  cy={114} r={16} stroke="#10b981" fill="rgba(16,185,129,0.08)" tint="#6ee7b7" label="Víðarr" Icon={VidarrIcon} />
      <ConstellationNode cx={278} cy={30}  r={16} stroke="#06b6d4" fill="rgba(6,182,212,0.08)"  tint="#67e8f9" label="Brokkr" Icon={BrokkrIcon} />
      <ConstellationNode cx={278} cy={114} r={16} stroke="#f59e0b" fill="rgba(245,158,11,0.08)" tint="#fcd34d" label="Sindri" Icon={SindriIcon} />
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
        Pantheon is a personal AI operating system built around Norse mythology. Each agent is named after a god and solves one specific problem — they orbit Odin, the central orchestrator, who routes tasks, manages memory, and coordinates action across your life. It runs self-hosted on a Mac Mini, reached from anywhere over Tailscale.
      </p>
      <ConstellationGraph />
    </Panel>
  )
}

function OdinPanel({ active }: { active: boolean }) {
  const pipeline = [
    { step: '01', name: 'Voice In',        detail: 'Web Speech API · native iOS speech · “Hey Siri, talk to Odin”' },
    { step: '02', name: 'Router',          detail: 'classifies the turn by tier and picks a target'                 },
    { step: '03', name: 'Muninn',          detail: 'pulls only the memory this turn needs'                          },
    { step: '04', name: 'Local Inference', detail: 'qwen2.5 on Ollama · stable prompt prefix · first word in ~0.5 s' },
    { step: '05', name: 'Tools & Agents',  detail: 'Calendar, Gmail, Brave Search, Sonos · Brokkr builds, Sindri researches' },
    { step: '06', name: 'Voice Out',       detail: 'OpenAI TTS under a hard $5/mo cap → Kokoro local fallback'      },
  ]

  const latest = [
    'JARVIS HUD',
    'Native iOS app',
    'Siri App Intent',
    'Kokoro local TTS',
    'Spend ledger',
    'Sonos duck & resume',
    'PWA shell',
  ]

  return (
    <Panel active={active}>
      <ChapterTag Icon={OdinIcon}>Odin · Central Orchestrator</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        Speak a command.<br />
        <span className="text-violet-400">Odin routes it.</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[52ch] mb-6">
        A voice-first, self-hosted AI OS. Chat inference runs locally on Ollama at zero API spend, with Claude held as an escalation path. Every turn is routed by tier, grounded in memory, and spoken back through a budget-capped voice pipeline to the web HUD, the native iOS app, Sonos, and Discord.
      </p>
      <div className="space-y-2 max-w-[54ch]">
        {pipeline.map(({ step, name, detail }) => (
          <div key={step} className="flex items-start gap-3.5">
            <div className="w-6 h-6 rounded-full border border-violet-500/30 bg-violet-500/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="font-mono text-[8px] text-violet-400/70">{step}</span>
            </div>
            <div className="text-[12px] leading-snug">
              <span className="text-white/60 font-semibold">{name}</span>
              <span className="text-white/22 mx-2 text-[10px]">→</span>
              <span className="text-white/30">{detail}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 max-w-[54ch]">
        <div className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase mb-2">Shipped this quarter</div>
        <div className="flex flex-wrap gap-2">
          {latest.map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-violet-500/15 text-violet-200/50 bg-violet-500/[0.04]">
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href="https://github.com/jarrenpatao"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-white/25 hover:text-violet-400 transition-colors duration-200 w-fit"
      >
        <GitHubIcon />
        GitHub
      </a>
    </Panel>
  )
}

function MuninnPanel({ active }: { active: boolean }) {
  const layers = [
    {
      num: '0',
      name: 'Essence',
      detail: 'Always-on ~100-token identity string — zero LLM calls, injected into every prompt.',
      color: 'text-indigo-300',
      border: 'border-indigo-500/25',
      bg: 'bg-indigo-500/[0.05]',
    },
    {
      num: '1',
      name: 'Category Retrieval',
      detail: 'Vector similarity over category embeddings — surfaces relevant domains, no LLM needed.',
      color: 'text-violet-300',
      border: 'border-violet-500/25',
      bg: 'bg-violet-500/[0.05]',
    },
    {
      num: '2',
      name: 'Atomic Facts',
      detail: 'Top-k semantic search over 156 individual facts. Only fires when Layer 1 triggers.',
      color: 'text-purple-300',
      border: 'border-purple-500/25',
      bg: 'bg-purple-500/[0.05]',
    },
  ]

  return (
    <Panel active={active}>
      <ChapterTag Icon={MuninnIcon}>Muninn · Memory Layer</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        What Odin<br />
        <span className="text-indigo-400">remembers.</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-6">
        A three-layer vector memory system. Each request pulls only the context it needs — from a 100-token essence to atomic facts retrieved by cosine similarity. Embeddings are compressed 4× with TurboQuant (Google Research, ICLR&nbsp;2026) and cached for sub-millisecond repeat queries. Retrieval now feeds every live chat turn, and every turn is archived back into the store.
      </p>
      <div className="space-y-2.5 max-w-[46ch]">
        {layers.map(({ num, name, detail, color, border, bg }) => (
          <div key={num} className={`flex items-start gap-3.5 rounded-xl border ${border} ${bg} px-3.5 py-3`}>
            <div className="w-5 h-5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="font-mono text-[8px] text-indigo-400/70">{num}</span>
            </div>
            <div className="text-[11.5px]">
              <span className={`font-semibold ${color}`}>{name}</span>
              <span className="text-white/22 mx-1.5 text-[10px]">—</span>
              <span className="text-white/28">{detail}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {['SQLite + sqlite-vec', 'Ollama', 'TurboQuant', 'LRU Cache'].map(t => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.06] text-white/25 bg-white/[0.02]">
            {t}
          </span>
        ))}
      </div>
    </Panel>
  )
}

function SifPanel({ active }: { active: boolean }) {
  const steps = [
    { Icon: SifListIcon,     label: 'List what you have',         sub: 'Type ingredients, no format required'     },
    { Icon: SifGenerateIcon, label: 'Claude generates 3 options',  sub: 'Real meals, real ingredients, under 10s'  },
    { Icon: SifCookIcon,     label: 'Pick one and cook',           sub: 'No guesswork, no waste'                   },
  ]

  return (
    <Panel active={active}>
      <ChapterTag Icon={SifIcon}>Sif · Meal Planner</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        What can you make<br />
        <span className="text-violet-400">right now?</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-8">
        Tell Sif what&apos;s in your kitchen. Get three real meal options in under ten seconds. No sign-up, no subscriptions, no recipe blogs — just Claude and whatever&apos;s on your shelf.
      </p>
      <div className="space-y-4 max-w-[44ch]">
        {steps.map(({ Icon, label, sub }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg border border-violet-500/20 bg-violet-500/[0.06] flex items-center justify-center flex-shrink-0 text-violet-400">
              <Icon size={18} />
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
      <ChapterTag Icon={VidarrIcon}>Víðarr · Daily Floor Tracker</ChapterTag>
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
    { Icon: BrokkrIcon, title: 'Build jobs',   desc: 'Brokkr runs a real tool loop — edits files, runs commands, reports back.',            tint: 'text-cyan-400/80'  },
    { Icon: SindriIcon, title: 'Research',     desc: 'Sindri gathers sources and drafts findings before Odin answers.',                     tint: 'text-amber-300/80' },
    { Icon: BrokkrIcon, title: 'Budget gate',  desc: 'Build jobs escalate to the Claude API only under a hard nightly cap in the spend ledger.', tint: 'text-cyan-400/80' },
    { Icon: BrokkrIcon, title: 'Handoffs',     desc: 'Structured prompts and project memory so nothing is re-explained across sessions.',   tint: 'text-cyan-400/80' },
  ]

  return (
    <Panel active={active}>
      <ChapterTag Icon={BrokkrIcon}>Brokkr & Sindri · Build & Research Agents</ChapterTag>
      <h4 className="text-3xl font-bold text-white leading-tight mb-2">
        The craftsman&apos;s<br />
        <span className="text-cyan-400">workshop.</span>
      </h4>
      <p className="text-[13px] text-white/35 leading-relaxed max-w-[50ch] mb-7">
        Brokkr is Odin&apos;s build agent; Sindri is its research counterpart. Both run on local models via Ollama by default — no cloud dependency, no surprise bills. Next up: a durable milestone queue and a Tailscale executor so Odin can drive an unattended overnight build on a second machine and only wake you for roadmap decisions.
      </p>
      <div className="grid grid-cols-2 gap-2.5 max-w-[48ch]">
        {capabilities.map(({ Icon, title, desc, tint }) => (
          <div key={title} className="rounded-lg border border-cyan-500/15 bg-cyan-500/[0.04] p-3.5">
            <div className={`flex items-center gap-1.5 text-[12px] font-semibold mb-1 ${tint}`}>
              <Icon size={12} />
              {title}
            </div>
            <div className="text-[11px] text-white/25 leading-snug">{desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {['Ollama', 'Claude API', 'Spend Ledger', 'Node.js'].map(t => (
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
              {/* Allfather's Eye — the Odin mark */}
              <div className="mb-8 w-10 h-10 rounded-xl border border-violet-500/30 bg-violet-500/[0.08] flex items-center justify-center text-white">
                <OdinIcon size={22} title="Odin" />
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
                    <span className={`flex items-center gap-2 text-[11px] font-mono tracking-wide transition-colors duration-300 ${
                      i === chapter ? 'text-white/80' : i < chapter ? 'text-white/25' : 'text-white/15'
                    }`}>
                      {c.Icon ? <c.Icon size={11} /> : <span className="inline-block w-[11px]" />}
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
            <MuninnPanel   active={chapter === 2} />
            <SifPanel      active={chapter === 3} />
            <VidarrPanel   active={chapter === 4} />
            <BrokkrPanel   active={chapter === 5} />
          </div>
        </div>
      </div>
    </div>
  )
}
