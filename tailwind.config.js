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
        '9/10':'90%',

      },
      fontFamily:{
        'sourGummy':['Sour Gummy','sans-serif'],
        'quicksand':['Quicksand','sans-serif'],
      }
    },
    screens:{
      'xs': '320px',
      'sm': '540px', 
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [],
}

