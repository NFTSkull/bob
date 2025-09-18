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
        // Negro industrial - fondos principales
        primary: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
          dark: '#000000',
        },
        // Amarillo seguridad - acentos y resaltados
        accent: {
          DEFAULT: '#FFD700',
          light: '#FFED4A',
          dark: '#F1C40F',
          muted: '#FFF8DC',
        },
        // Escala de grises institucional
        gray: {
          50: '#FAFAFA',    // Blanco suave
          100: '#F5F5F5',   // Gris muy claro
          200: '#EEEEEE',   // Gris claro - fondos secundarios
          300: '#E0E0E0',   // Gris claro medio
          400: '#BDBDBD',   // Gris medio
          500: '#9E9E9E',   // Gris neutro
          600: '#757575',   // Gris oscuro medio
          700: '#616161',   // Gris oscuro
          800: '#424242',   // Gris carbón
          850: '#2A2A2A',   // Gris carbón oscuro
          900: '#212121',   // Gris muy oscuro
          950: '#0F0F0F',   // Negro carbón
        },
        // Colores de texto optimizados
        text: {
          primary: '#FFFFFF',
          secondary: '#F5F5F5',
          muted: '#BDBDBD',
          dark: '#0A0A0A',
        },
        // Colores de estado industrial
        status: {
          success: '#4CAF50',
          warning: '#FFD700',
          error: '#F44336',
          info: '#2196F3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}