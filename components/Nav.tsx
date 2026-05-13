'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-dim' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-mono text-sm font-medium text-purple-light tracking-wide">
            jarren<span className="text-pink-DEFAULT">.</span>dev
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="grad-bg text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[var(--text-muted)] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[var(--text-muted)] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[var(--text-muted)] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-dim bg-surface/95 backdrop-blur-xl px-6 py-2">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="block py-3 text-sm font-medium text-muted hover:text-white border-b border-dim transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="block py-3 text-sm font-semibold text-purple-light hover:text-white transition-colors"
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  )
}
