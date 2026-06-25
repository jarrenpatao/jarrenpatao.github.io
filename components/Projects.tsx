'use client'

import FadeIn from './FadeIn'
import PantheonShowcase from './PantheonShowcase'

function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ARIACard() {
  return (
    <div className="group flex flex-col bg-surface border border-dim rounded-2xl overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="h-32 flex items-center justify-center text-4xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 relative overflow-hidden">
        <span className="relative z-10 drop-shadow-lg">🤖</span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/70" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[13px] font-bold text-white tracking-tight">ARIA</h3>
          <span className="text-[9px] font-mono font-bold text-cyan-400 tracking-wider">● In Dev</span>
        </div>
        <p className="text-[12px] text-muted leading-relaxed flex-1 mb-4">
          Amplitude Resolution Intelligence Agent — a conversational multi-tool AI agent built in Superblocks
          that investigates support tickets across Zendesk, Datadog, Linear, and Confluence autonomously.
          Compresses 20–40 min of manual research to under 5 min.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['TypeScript', 'React', 'Node.js', 'Superblocks', 'Zendesk', 'Datadog'].map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-dim text-[var(--text-dim)] bg-white/[0.02]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ClaudeSkillsCard() {
  return (
    <div className="group flex flex-col bg-surface border border-dim rounded-2xl overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="h-32 flex items-center justify-center text-4xl bg-gradient-to-br from-violet-500/20 to-indigo-600/10 relative overflow-hidden">
        <span className="relative z-10 drop-shadow-lg">⚡</span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/70" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[13px] font-bold text-white tracking-tight">Claude Skills</h3>
          <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-wider">● Shipped</span>
        </div>
        <p className="text-[12px] text-muted leading-relaxed flex-1 mb-4">
          Three Claude Code skills published org-wide:{' '}
          <span className="font-mono text-white/70">amp-week0-setup</span> (dev env onboarding + troubleshooter),{' '}
          <span className="font-mono text-white/70">psp-account-context</span> (Slack/Zendesk/Granola → Confluence synthesis),
          and <span className="font-mono text-white/70">customer-entitlements</span> (Salesforce SOQL entitlement checker).
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['Claude API', 'MCP', 'Salesforce', 'Zendesk', 'Confluence'].map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-dim text-[var(--text-dim)] bg-white/[0.02]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SifCard() {
  return (
    <div className="group flex flex-col bg-surface border border-dim rounded-2xl overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="h-32 flex items-center justify-center text-4xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 relative overflow-hidden">
        <span className="relative z-10 drop-shadow-lg">🍳</span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/70" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[13px] font-bold text-white tracking-tight">Sif</h3>
          <span className="text-[9px] font-mono font-bold text-violet-400 tracking-wider">● Pantheon</span>
        </div>
        <p className="text-[12px] text-muted leading-relaxed flex-1 mb-4">
          Meal planner that asks what&apos;s in your kitchen and returns three real options in under ten seconds. Built for cooking alone with no inspiration.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['React', 'Node / Express', 'Claude API', 'Railway'].map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-dim text-[var(--text-dim)] bg-white/[0.02]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function VidarrCard() {
  return (
    <div className="group flex flex-col bg-surface border border-dim rounded-2xl overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="h-32 flex items-center justify-center text-4xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 relative overflow-hidden">
        <span className="relative z-10 drop-shadow-lg">🌿</span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/70" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[13px] font-bold text-white tracking-tight">Víðarr</h3>
          <span className="text-[9px] font-mono font-bold text-violet-400 tracking-wider">● Pantheon</span>
        </div>
        <p className="text-[12px] text-muted leading-relaxed flex-1 mb-4">
          A minimal nightly check-in tracker. Three floors: eat something real, basic hygiene, move your body. No streaks, no judgment — just the baseline.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['React', 'Node / Express', 'Railway'].map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-dim text-[var(--text-dim)] bg-white/[0.02]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function EpochConverterCard() {
  return (
    <div className="group flex flex-col bg-surface border border-dim rounded-2xl overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="h-32 flex items-center justify-center text-4xl bg-gradient-to-br from-amber-500/25 to-orange-500/10 relative overflow-hidden">
        <span className="relative z-10 drop-shadow-lg">🕐</span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/70" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[13px] font-bold text-white tracking-tight">Epoch Converter</h3>
          <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-wider">● Live</span>
        </div>
        <p className="text-[12px] text-muted leading-relaxed flex-1 mb-4">
          Chrome extension for instant UTC ↔ local time conversion. One click, no site required.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['Chrome Extension', 'JavaScript'].map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-dim text-[var(--text-dim)] bg-white/[0.02]">
              {t}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-dim">
          <a
            href="https://github.com/jarrenpatao/Epoch-Converter-Chrome"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-purple-light transition-colors duration-200 w-fit"
          >
            <GitHubIcon />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10">
      {/* Section header */}
      <div className="py-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-xs font-medium text-purple-light tracking-widest uppercase mb-3">
              Work
            </p>
            <h2 className="text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15]">
              What I&apos;m building.
            </h2>
          </FadeIn>
        </div>
      </div>

      {/* Pantheon — full-width scrollytelling */}
      <FadeIn>
        <PantheonShowcase />
      </FadeIn>

      {/* Tools strip */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase mb-8">
              Also Building
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <ARIACard />
              <ClaudeSkillsCard />
              <SifCard />
              <VidarrCard />
              <EpochConverterCard />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
