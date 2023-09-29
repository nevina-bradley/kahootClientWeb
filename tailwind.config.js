/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '10p':"9.3%",
      },
      backgroundColor:{
        'quizPink':"rgba(174, 115, 169, 0.46)",
        'purpleButton':"#AE73A9",
        'purpleBox': "#7A417B"
      },
      fontFamily:{
        'holtwood':"'Holtwood One SC', serif",
        'roboto':"'Roboto Slab', serif;"
      },
      colors:{
        'quizPurple':"rgba(69, 25, 63, 1)",
        'purpleBox': "#7A417B"
      }
    },
  },
  plugins: [],
}