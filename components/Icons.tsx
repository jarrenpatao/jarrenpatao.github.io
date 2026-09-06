/**
 * jarren.dev icon set (Solid Glyph).
 *
 * Every glyph is a 24×24 `fill="currentColor"` SVG — set the colour on the
 * wrapper (or pass a `className` with a text colour) to tint it. Source
 * files live in /public/icons for reference; these components are the
 * inline versions used across the site.
 */

interface IconProps {
  size?: number
  className?: string
  title?: string
}

function Glyph({ size = 24, className, title, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}

/* ── Services ─────────────────────────────────── */

export function ServiceWebIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <rect x="3" y="4" width="18" height="16" rx="3" opacity=".3" />
      <path d="M3 7a3 3 0 013-3h12a3 3 0 013 3v2H3z" />
      <path d="M10 12.5l7 2.8-3 1.2 1.7 3-1.2.7-1.7-3-2.3 2.3z" />
    </Glyph>
  )
}

export function ServiceAIIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M11 2h2v4h-2zM11 18h2v4h-2zM2 11h4v2H2zM18 11h4v2h-4zM6.5 2h2v3h-2zM15.5 2h2v3h-2zM6.5 19h2v3h-2zM15.5 19h2v3h-2z" opacity=".45" />
      <path fillRule="evenodd" d="M9 6h6a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9a3 3 0 013-3zm3 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </Glyph>
  )
}

export function ServiceAutomationIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M13.5 2L4 14h7.5l-1.5 8L20 10h-7.5z" />
      <path d="M13.5 2L4 14h7.5z" opacity=".55" />
    </Glyph>
  )
}

/* ── Sif steps ────────────────────────────────── */

export function SifListIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <rect x="8" y="4.5" width="14" height="3" rx="1.5" />
      <rect x="8" y="10.5" width="14" height="3" rx="1.5" />
      <rect x="8" y="16.5" width="14" height="3" rx="1.5" />
      <circle cx="4" cy="6" r="2" opacity=".5" />
      <circle cx="4" cy="12" r="2" opacity=".5" />
      <circle cx="4" cy="18" r="2" opacity=".5" />
    </Glyph>
  )
}

export function SifGenerateIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
      <circle cx="19.5" cy="4.5" r="2" opacity=".5" />
    </Glyph>
  )
}

export function SifCookIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path fillRule="evenodd" d="M10 7a7 7 0 100 14 7 7 0 000-14zm0 3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
      <circle cx="10" cy="14" r="3.5" opacity=".4" />
      <path d="M16.5 12.5l5.5-2.2v2.4l-5.5 1.3z" opacity=".6" />
    </Glyph>
  )
}

/* ── Project cards ────────────────────────────── */

export function ProjectAriaIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M12 2l8.7 5v10L12 22l-8.7-5V7z" opacity=".3" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="4.5" r="1.5" />
      <circle cx="5.5" cy="15.75" r="1.5" />
      <circle cx="18.5" cy="15.75" r="1.5" />
    </Glyph>
  )
}

export function ProjectClaudeSkillsIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M12 2l10 5.5-10 5.5L2 7.5z" />
      <path d="M2 11.5l10 5.5 10-5.5v3L12 20 2 14.5z" opacity=".45" />
    </Glyph>
  )
}

export function ProjectEpochIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <circle cx="12" cy="12" r="10" opacity=".3" />
      <path d="M11 5.5h2v6.4l3.8 2.2-1 1.7L11 13z" />
      <circle cx="12" cy="12" r="1.5" />
    </Glyph>
  )
}

/* ── Pantheon god marks ───────────────────────── */

export function OdinIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" opacity=".3" />
      <path fillRule="evenodd" d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 2.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </Glyph>
  )
}

export function MuninnIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M2 15c4.5 0 8-3 10-9 2 6 5.5 9 10 9-4 .5-7.5-.5-10-3.5C9.5 14.5 6 15.5 2 15z" />
      <path d="M4 19c3.5 0 6-1.5 8-4 2 2.5 4.5 4 8 4-3 .5-6 0-8-2-2 2-5 2.5-8 2z" opacity=".45" />
    </Glyph>
  )
}

export function SifIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <rect x="11.25" y="2" width="1.5" height="20" rx=".75" opacity=".6" />
      <path d="M12 12c-4 0-6-3-6-6 4 0 6 3 6 6zM12 12c4 0 6-3 6-6-4 0-6 3-6 6zM12 18c-4 0-6-3-6-6 4 0 6 3 6 6zM12 18c4 0 6-3 6-6-4 0-6 3-6 6z" />
    </Glyph>
  )
}

export function VidarrIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <rect x="3" y="17" width="18" height="3.5" rx="1.75" />
      <rect x="5" y="10.5" width="14" height="3" rx="1.5" opacity=".5" />
      <rect x="7" y="4" width="10" height="3" rx="1.5" opacity=".25" />
    </Glyph>
  )
}

export function BrokkrIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M14.5 2l7.5 7.5-4.5 4.5L10 6.5z" />
      <path d="M11.5 8l4.5 4.5-9 9a2 2 0 01-4.5-4.5z" opacity=".5" />
    </Glyph>
  )
}

export function SindriIcon(p: IconProps) {
  return (
    <Glyph {...p}>
      <path fillRule="evenodd" d="M12 22c-4.5 0-7.5-3-7.5-7 0-3 2-5.5 3.5-8.5 1 2 2 3 3 3 0-3 1.5-5.5 3.5-7.5 1 4.5 5 6.5 5 13 0 4-3 7-7.5 7zm0-1.5c-1.9 0-3.5-1.5-3.5-3.5 0-1.5 1-2.5 2-4 .5 1 1 1.5 1.5 1.5 0-1.5.5-2.5 1.5-3.5.5 2 2 3 2 6 0 2-1.5 3.5-3.5 3.5z" />
      <path d="M12 20.5c-1.9 0-3.5-1.5-3.5-3.5 0-1.5 1-2.5 2-4 .5 1 1 1.5 1.5 1.5 0-1.5.5-2.5 1.5-3.5.5 2 2 3 2 6 0 2-1.5 3.5-3.5 3.5z" opacity=".35" />
    </Glyph>
  )
}

/* ── Shared ───────────────────────────────────── */

export function GitHubIcon({ size = 13, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
