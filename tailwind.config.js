/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      width:{
        '6/10':'60%',

      },
      fontFamily:{
        'sourGummy':['Sour Gummy','sans-serif'],
        'quicksand':['Quicksand','sans-serif'],
      }
    },
  },
  plugins: [],
}

