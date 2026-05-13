export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 border-t border-dim py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px] text-dim">
          © {year} Jarren Patao. Built with intention.
        </p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/jarrenpatao' },
            { label: 'Email',  href: 'mailto:jarrenpatao@gmail.com' },
            { label: '↑ Top',  href: '#hero' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[13px] text-dim hover:text-muted transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
