/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: 'hsl(246, 80%, 60%)',
      work: 'hsl(15, 100%, 70%)',
      play: 'hsl(195, 74%, 62%)',
      study: 'hsl(348, 100%, 68%)',
      exercise: 'hsl(145, 58%, 55%)',
      social: 'hsl(264, 64%, 52%)',
      selfCare: 'hsl(43, 84%, 65%)',
      darkBlue: 'hsl(226, 43%, 10%)',
      desBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',
      white: '#fff',
      veryBlue: 'hsl(235, 46%, 20%)',
      profile: '#5746EA'
    },
    fontFamily: {
      rubik: ['Rubik']
    },
  },
  plugins: [],
}
