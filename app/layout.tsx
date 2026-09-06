import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jarren Patao — Freelance Vibe-Coding Engineer',
  description:
    'Jarren Patao is a freelance engineer who builds web apps, AI integrations, automations, and scripts — fast. Available for hire.',
  keywords: [
    'freelance developer',
    'vibe coding',
    'AI engineer',
    'web apps',
    'automation',
    'Next.js developer',
    'React developer',
    'hire developer',
    'jarren patao',
  ],
  authors: [{ name: 'Jarren Patao', url: 'https://jarrenpatao.github.io' }],
  creator: 'Jarren Patao',
  metadataBase: new URL('https://jarrenpatao.github.io'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://jarrenpatao.github.io',
    title: 'Jarren Patao — Freelance Vibe-Coding Engineer',
    description:
      'I build web apps, AI integrations, automations, and scripts — fast. Available for freelance projects.',
    siteName: 'Jarren Patao',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jarren Patao — Freelance Vibe-Coding Engineer',
    description: 'I build web apps, AI integrations, automations, and scripts — fast.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jarren Patao',
  url: 'https://jarrenpatao.github.io',
  jobTitle: 'Freelance Vibe-Coding Engineer',
  description:
    'Freelance developer specializing in web apps, AI integrations, automation scripts, and rapid prototyping.',
  sameAs: ['https://github.com/jarrenpatao'],
  knowsAbout: ['Web Development', 'AI Tools', 'Automation', 'JavaScript', 'Python', 'React', 'Node.js', 'Next.js'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
