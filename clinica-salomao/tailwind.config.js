/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleza: ['Belezza'],
        garamond: ['Garamond']
      },
    },
    colors: {
      'creme': '#FBE8CF',
      'creme-escuro': '#C4B3A4',
      'vermelho-madeira': '#A66559',
      'siena': '#bf854f',
      'whats': '#009939',
      'whats-escuro': '#006E00',
      'branco': '#ffffff',
      'terra': '#D9C7B6',
      'laranja': '#dda673',
    },
    borderRadius: {
      '46': '80px',
    },

  },
  plugins: [],
}

