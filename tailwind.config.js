/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal BOB (azules del logo)
        brand: {
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
        // Acento verde del logo
        accent: {
          100: 'var(--accent-100)',
          300: 'var(--accent-300)',
          500: 'var(--accent-500)',
          700: 'var(--accent-700)',
        },
        // Colores de apoyo
        cyan: {
          500: 'var(--cyan-500)',
        },
        // Escala de grises institucional
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          400: 'var(--neutral-400)',
          600: 'var(--neutral-600)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        // Tokens semánticos
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        borderHover: 'var(--border-hover)',
        // Colores de estado B2B
        status: {
          success: '#10b981',
          warning: 'var(--accent-500)',
          error: '#ef4444',
          info: 'var(--brand-500)',
        },
      },
      ringColor: {
        DEFAULT: 'var(--ring)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}