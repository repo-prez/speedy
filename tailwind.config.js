/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '426px',
      // => @media (min-width: 425px) { ... }

      md: '769px',
      // => @media (min-width: 768px) { ... }

      lg: '1025px',
      // => @media (min-width: 1024px) { ... }

      xl: '1536px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}