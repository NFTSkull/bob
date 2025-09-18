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
        primary: {
          DEFAULT: '#0B0B0B',
          light: '#2B2B2B',
        },
        accent: {
          DEFAULT: '#FFC107',
          dark: '#E6A700',
        },
        secondary: {
          DEFAULT: '#E7E7E7',
          dark: '#C7C7C7',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E7E7E7',
          dark: '#0B0B0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}