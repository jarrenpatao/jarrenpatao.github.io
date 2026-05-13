import FadeIn from './FadeIn'

const services = [
  {
    icon: '🚀',
    title: 'Web Apps & Sites',
    desc: 'Full-stack web applications and marketing sites — from landing pages to full SaaS products.',
    items: [
      'Landing pages & portfolios',
      'SaaS dashboards & admin panels',
      'E-commerce & booking systems',
      'REST APIs & backend services',
    ],
  },
  {
    icon: '🤖',
    title: 'AI Integrations',
    desc: 'Add AI capabilities to your product or workflow — chatbots, assistants, document analysis, and more.',
    items: [
      'Custom AI chatbots',
      'Document & data extraction',
      'Content generation pipelines',
      'LLM-powered features',
    ],
  },
  {
    icon: '⚡',
    title: 'Automation & Scripts',
    desc: 'Eliminate repetitive work with smart automations, bots, and custom scripts.',
    items: [
      'Workflow automation (Zapier / Make / n8n)',
      'Web scraping & data pipelines',
      'Scheduled reporting & alerts',
      'API integrations & webhooks',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-32 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-14">
          <p className="font-mono text-xs font-medium text-purple-light tracking-widest uppercase mb-3">
            What I build
          </p>
          <h2 className="text-4xl lg:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.15] mb-4">
            Fast, focused, shipped.
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-md">
            I take on focused projects where speed and quality both matter. Here&apos;s what I do best.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <div className="group h-full bg-surface border border-dim rounded-2xl p-8 relative overflow-hidden hover:border-[var(--border-glow)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
                {/* Top glow line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 grad-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 bg-grad-subtle border border-purple-DEFAULT/20">
                  {s.icon}
                </div>
                <h3 className="text-[17px] font-bold mb-2.5 tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted leading-[1.7] mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-dim">
                      <span className="text-purple-light text-[11px]">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
