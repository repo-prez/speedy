/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1640px'
    },
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        spin2: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        spin: 'spin 0.1s linear ',
        spin2: 'spin2 0.1s linear ',
      },
      fontFamily: {
        'sans': ['Barlow', 'sans-serif'],
        'serif': ['Barlow ', 'serif'],
        'mono': ['Barlow ', 'monospace'],
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