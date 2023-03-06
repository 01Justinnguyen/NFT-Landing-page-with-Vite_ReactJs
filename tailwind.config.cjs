/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font1: ['Inter', 'sans-serif'],
        font2: ['Jura', 'sans-serif'],
      },
      colors: {
        bgColor: '#191E35',
        primaryColor: '#332FD0',
        secondaryColor: '#F52AF5',
        thirdColor: '#15BFFD',
        redColor: '#FF0000',
        greenColor: '#00FF57',
        blurColor: '#2A3E84',
      },
      backgroundImage: {
        primaryGradient: 'linear-gradient(93.07deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%);',
      },
    },
  },
  plugins: [],
};
