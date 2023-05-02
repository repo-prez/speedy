/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '425px',
      // => @media (min-width: 425px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1536px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear infinite'
      },
      colors: {
        primary: '#1E3FAE',
        'primary-dark': '#172554',
        secondary: '#EA3392',
        background: '#474747',
        degraded: '#5C0005'

      }
    }
  },
  plugins: [],
}