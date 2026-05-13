import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#07070f',
        surface:  '#0f0f1a',
        surface2: '#141428',
        purple: {
          DEFAULT: '#7c3aed',
          light:   '#a78bfa',
        },
        pink: {
          DEFAULT: '#ec4899',
        },
        cyan: {
          DEFAULT: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grad':        'linear-gradient(135deg, #7c3aed, #ec4899)',
        'grad-subtle': 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.15))',
        'glow-purple': 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(124,58,237,0.12) 0%, transparent 60%)',
        'glow-pink':   'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(236,72,153,0.08) 0%, transparent 60%)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'blink':     'blink 0.8s step-end infinite',
        'fade-up':   'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
