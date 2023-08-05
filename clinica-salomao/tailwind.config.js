/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleza: ['Belleza'],
        garamond: ['Garamond'],
        mont: ['Montserrat'],
      },
    },
    colors: {
      'creme': '#FBE8CF',
      'creme-escuro': '#C4B3A4',
      'creme-claro': '#fff7ee',
      'vermelho-madeira': '#A66559',
      'vermelho-escuro': '#86483C',
      'siena': '#bf854f',
      'whats': '#009939',
      'whats-escuro': '#006E00',
      'branco': '#ffffff',
      'terra': '#D9C7B6',
      'laranja': '#dda673',
      'perguntaA': '#D38B7E',
      'perguntaB': '#A66559',
    },
    borderRadius: {
      '46': '80px',
      '6xl': '48px',
      '2xl': '24px',
    },

    boxShadow: {
      'dentro': 'inset 10px 15px 30px -15px',
    },

  },
  plugins: [],
};

