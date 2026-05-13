'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

type FilterTag = 'all' | 'web' | 'ai' | 'auto' | 'mobile'

interface Project {
  emoji: string
  gradient: string
  title: string
  desc: string
  tags: Array<'web' | 'ai' | 'auto' | 'mobile' | 'tool'>
  stack: string[]
  status: 'live' | 'wip' | 'placeholder'
  githubSlug?: string
}

const projects: Project[] = [
  {
    emoji: '⚡',
    gradient: 'from-violet-600/40 to-cyan-500/20',
    title: 'Odin',
    desc: 'Personal AI voice assistant with a Norse-mythology agent pantheon. Speak a command — Odin routes it to Brokkr (Claude build agent) or Sindri (Ollama research agent). Integrates Spotify, Google Calendar, and Plaid for real-time finance data.',
    tags: ['ai', 'web', 'auto'],
    stack: ['Node.js', 'React', 'Claude API', 'Google TTS', 'Vercel'],
    status: 'wip',
    githubSlug: 'Odin',
  },
  {
    emoji: '🧪',
    gradient: 'from-emerald-500/35 to-violet-600/20',
    title: 'Flask & Fury',
    desc: 'iOS roguelike where you brew potions to fight enemies. Full run loop: archetype select → zone map → combat → rest/shop. Persistent Codex and account progression via SwiftData. 8 status effects, 5 hand-crafted story events, Malachar boss arc.',
    tags: ['mobile'],
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'Xcode'],
    status: 'wip',
    githubSlug: 'Magelike',
  },
  {
    emoji: '🛸',
    gradient: 'from-pink-500/35 to-purple-700/25',
    title: 'LABiOS HUD',
    desc: 'Futuristic personal dashboard built around SageOrb — an animated AI companion that pulses with your voice. Floating module atoms for health, finance, calendar, and system stats. Supports video upload + Claude vision analysis from the command bar.',
    tags: ['web', 'ai'],
    stack: ['React', 'Vite', 'Express', 'Claude API', 'Plaid', 'WebGL'],
    status: 'wip',
    githubSlug: 'LABiOS',
  },
  {
    emoji: '🗣️',
    gradient: 'from-cyan-500/35 to-blue-600/20',
    title: 'Local TTS Pipeline',
    desc: 'Train and serve a custom voice model locally using Coqui VITS fine-tuning. A Flask inference server runs first; if it\'s down, falls back to Lemonfox automatically. Full guide covers recording, Whisper transcription, training on Apple Silicon, and launchd setup.',
    tags: ['ai', 'auto'],
    stack: ['Python', 'Coqui TTS', 'Flask', 'VITS', 'ffmpeg'],
    status: 'wip',
  },
  {
    emoji: '🤖',
    gradient: 'from-orange-500/35 to-pink-500/20',
    title: 'Sage Builder Agent Lite',
    desc: 'Distributed local AI agent system where routine tasks run on Ollama (qwen2.5-coder) for free and hard problems escalate to Claude. A handoff writer agent packages local context into clean prompts so nothing is lost across tiers. SQLite storage, zero Docker.',
    tags: ['ai', 'auto'],
    stack: ['Python', 'Ollama', 'Claude API', 'SQLite', 'qwen2.5'],
    status: 'wip',
  },
  {
    emoji: '🌐',
    gradient: 'from-blue-500/35 to-cyan-400/20',
    title: 'Data Nucleus',
    desc: '3D animated network visualization of Odin\'s systems — 21 nodes across 3 orbital shells, connected by bezier curves with flowing data particles. Each node breathes with independent multi-frequency drift. Built on HTML5 Canvas with no library dependencies.',
    tags: ['web', 'tool'],
    stack: ['TypeScript', 'HTML5 Canvas', 'CSS', 'WebAnimation'],
    status: 'wip',
  },
]

const tagLabel: Record<string, string> = {
  ai:     'AI',
  web:    'Web',
  auto:   'Automation',
  tool:   'Tool',
  mobile: 'iOS',
}

const tagClass: Record<string, string> = {
  ai:     'bg-purple-DEFAULT/15 text-purple-light',
  web:    'bg-cyan-DEFAULT/15 text-cyan-DEFAULT',
  auto:   'bg-emerald-500/15 text-emerald-400',
  tool:   'bg-pink-DEFAULT/15 text-pink-DEFAULT',
  mobile: 'bg-blue-500/15 text-blue-400',
}

const statusLabel: Record<string, string> = {
  live:        '● Live',
  wip:         '◐ In progress',
  placeholder: '○ Placeholder',
}

const statusClass: Record<string, string> = {
  live:        'text-emerald-400',
  wip:         'text-cyan-DEFAULT',
  placeholder: 'text-[var(--text-dim)]',
}

const filters: { label: string; value: FilterTag }[] = [
  { label: 'All',        value: 'all' },
  { label: 'Web',        value: 'web' },
  { label: 'AI',         value: 'ai' },
  { label: 'Automation', value: 'auto' },
  { label: 'iOS',        value: 'mobile' },
]

export default function Projects() {
  const [active, setActive] = useState<FilterTag>('all')

  const visible = projects.filter(p =>
    active === 'all' || p.tags.includes(active as 'web' | 'ai' | 'auto' | 'mobile')
  )

  return (
    <section id="projects" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <FadeIn>
            <p className="font-mono text-xs font-medium text-purple-light tracking-widest uppercase mb-3">
              Work
            </p>
            <h2 className="text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15]">
              Things I&apos;ve shipped.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    active === f.value
                      ? 'grad-bg text-white border-transparent'
                      : 'border-dim text-muted hover:border-white/20 hover:text-white bg-transparent'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <div className="group flex flex-col h-full bg-surface border border-dim rounded-2xl overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300">

                {/* Thumb */}
                <div className={`h-40 flex items-center justify-center text-5xl relative overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <span className="relative z-10 drop-shadow-lg">{p.emoji}</span>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/80" />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map(t => (
                      <span key={t} className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${tagClass[t]}`}>
                        {tagLabel[t]}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-[13px] text-muted leading-[1.65] flex-1 mb-4">{p.desc}</p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map(s => (
                      <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded border border-dim text-[var(--text-dim)] bg-white/[0.02]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-dim">
                    <div className="flex gap-3">
                      {p.githubSlug && (
                        <a
                          href={`https://github.com/jarrenpatao/${p.githubSlug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-purple-light transition-colors duration-200"
                        >
                          <GitHubIcon />
                          Code
                        </a>
                      )}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${statusClass[p.status]}`}>
                      {statusLabel[p.status]}
                    </span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
