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
        // Paleta corporativa Bob Coperation
        // Azul principal: #2E6CE6
        'bob-blue': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8191ff',
          500: '#2E6CE6', // Azul principal
          600: '#1e5bd6',
          700: '#1a4bb8',
          800: '#1a3f96',
          900: '#1b3678',
        },
        // Verde acento: #A3D63F
        'bob-green': {
          50: '#f7fdf2',
          100: '#edf9e0',
          200: '#d9f2c2',
          300: '#bae89a',
          400: '#A3D63F', // Verde acento
          500: '#8bc334',
          600: '#6da028',
          700: '#527d23',
          800: '#446520',
          900: '#3a531e',
        },
        // Gris neutro: #707070
        'bob-gray': {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#707070', // Gris neutro
          600: '#5a5a5a',
          700: '#4a4a4a',
          800: '#3c3c3c',
          900: '#2e2e2e',
        },
        // Blanco puro: #FFFFFF
        white: '#FFFFFF',
        // Tokens semánticos Bob Coperation
        primary: 'var(--bob-blue-primary)',
        'primary-hover': 'var(--bob-blue-hover)',
        'primary-contrast': 'var(--white)',
        accent: 'var(--bob-green-accent)',
        'accent-hover': 'var(--bob-green-hover)',
        neutral: 'var(--bob-gray-neutral)',
        'neutral-hover': 'var(--bob-gray-hover)',
        // Tokens semánticos legacy (mantener compatibilidad)
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        borderHover: 'var(--border-hover)',
        // Colores de estado
        status: {
          success: 'var(--bob-green-accent)',
          warning: 'var(--bob-green-accent)',
          error: '#ef4444',
          info: 'var(--bob-blue-primary)',
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