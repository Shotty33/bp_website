/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5DC',
        'hunter-green': {
          DEFAULT: '#355E3B',
          50: '#e8f0ea',
          100: '#d1e1d5',
          200: '#a3c3ab',
          300: '#75a581',
          400: '#478757',
          500: '#355E3B',
          600: '#2a4b2f',
          700: '#203823',
          800: '#152518',
          900: '#0b130c',
        },
      },
    },
  },
  plugins: [],
}
