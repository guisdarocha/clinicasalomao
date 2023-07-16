/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleza: ['Belezza', 'regular']
      },
    },
    colors: {
      'creme': '#FBE8CF',
      'creme-escuro': '#C4B3A4',
      'vermelho-madeira': '#A66559',
      'siena': '#bf854f',
    },
    screens: {
      'mobile': {'max': '1080px'},
    },
    borderRadius: {
      '46': '80px',
    },

  },
  plugins: [],
}

