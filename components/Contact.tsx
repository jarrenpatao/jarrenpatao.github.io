import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 pb-40 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs font-medium text-purple-light tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl lg:text-[52px] font-extrabold tracking-[-0.025em] leading-[1.1] mb-5">
            Got a project<br />in mind?
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-md mx-auto mb-10">
            I&apos;m currently taking on new freelance projects. If you have an idea you want to
            build — let&apos;s talk. I&apos;ll get back to you within 24 hours.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:jarrenpatao@gmail.com"
              className="inline-flex items-center gap-2.5 grad-bg text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition-all duration-200"
            >
              <MailIcon />
              jarrenpatao@gmail.com
            </a>
            <a
              href="https://github.com/jarrenpatao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-xl border border-dim hover:border-white/20 hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-200"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M1 4l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
