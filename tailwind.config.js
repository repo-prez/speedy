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
      xl: '1440px',
      xxl: '1640px'
    },
    extend: {

      // animations
      animation: {
        spin: 'spin 0.1s linear ',
        spin2: 'spin2 0.1s linear ',
      },

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


      fontFamily: {
        'sans': ['Barlow', 'sans-serif'],
        'serif': ['Barlow ', 'serif'],
        'mono': ['Barlow ', 'monospace'],
        'bolt': ['bolt', 'sans-serif'],
      },
      colors: {
        primary: '#005AD4',
        'primary-dark': '#0E378A',
        'primary-light': '#00B1FC',
        secondary: '#CC0076',
        'background-light': '#F4F4F4',
        highlight: '#42D9A1',
        text: '#0E378A',
        background: '#474747',
        degraded: '#5C0005'

      },


    }
  },
  plugins: [],
}