/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 425px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': ['Barlow', 'sans-serif'],
        'serif': ['Barlow ', 'serif'],
        'mono': ['Barlow ', 'monospace'],

      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite'
      },
      colors: {
        primary: '#052C8B',
        'primary-dark': '#041337',
        secondary: '#CC0076',
        highlight: '#42D9A1',
        'text-menu': '#0468B9',
        background: '#474747',
        degraded: '#5C0005'

      },

    }
  },
  plugins: [],
}