import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p
          className="font-extrabold leading-none grad-text mb-2"
          style={{ fontSize: 'clamp(80px, 20vw, 140px)' }}
        >
          404
        </p>
        <p className="font-mono text-sm text-cyan-DEFAULT tracking-widest mb-6">
          // page not found
        </p>
        <h1 className="text-2xl font-extrabold tracking-tight mb-3">Nothing here.</h1>
        <p className="text-base text-muted leading-relaxed max-w-sm mx-auto mb-10">
          Looks like this page doesn&apos;t exist — or maybe it shipped to production and got lost along the way.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 grad-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
