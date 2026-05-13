import FadeIn from './FadeIn'

const stackRows = [
  {
    label: 'Web & Mobile',
    pills: ['React', 'Next.js', 'Vite', 'Swift', 'SwiftUI', 'TypeScript'],
  },
  {
    label: 'Backend',
    pills: ['Node.js', 'Express', 'Python', 'Flask', 'SwiftData'],
  },
  {
    label: 'AI & Agents',
    pills: ['Claude API', 'Ollama', 'Google TTS', 'Coqui VITS', 'Web Speech API'],
  },
  {
    label: 'Integrations',
    pills: ['Spotify API', 'Google Calendar', 'Plaid', 'ngrok', 'Vercel'],
  },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Text */}
          <FadeIn>
            <p className="font-mono text-xs font-medium text-purple-light tracking-widest uppercase mb-3">
              About me
            </p>
            <h2 className="text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15] mb-8">
              Vibe-coding,<br />seriously.
            </h2>
            <div className="space-y-4 text-[15px] text-muted leading-[1.85]">
              <p>
                I&apos;m <strong className="text-white font-semibold">Jarren Patao</strong> — a freelance engineer who builds
                across the stack: AI voice assistants, iOS games, personal dashboards, distributed agent
                systems, and custom tooling. If it can be built, I&apos;ll figure out how.
              </p>
              <p>
                My personal projects include <strong className="text-white font-semibold">Odin</strong> — a
                voice AI with its own agent pantheon — and <strong className="text-white font-semibold">Flask & Fury</strong>,
                a solo-built iOS roguelike. I work with whatever gets the job done: React, Swift,
                Python, Claude, Ollama, and real hardware integrations.
              </p>
              <p>
                Available for freelance projects where the goal is to actually ship something — web apps,
                AI integrations, automations, or anything that needs a builder who can figure it out.
              </p>
            </div>
          </FadeIn>

          {/* Stack */}
          <FadeIn delay={150}>
            <div className="space-y-5">
              {stackRows.map(row => (
                <div key={row.label}>
                  <p className="text-[11px] font-semibold text-dim uppercase tracking-[0.1em] mb-2">
                    {row.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {row.pills.map(p => (
                      <span
                        key={p}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg border border-dim text-muted bg-surface hover:border-[var(--border-glow)] hover:text-purple-light transition-colors duration-200 cursor-default"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
