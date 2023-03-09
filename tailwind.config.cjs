/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font1: ['Inter', 'sans-serif'],
        font2: ['Jura', 'sans-serif'],
        font3: ['Kite One', 'sans-serif'],
        font4: ['Poppins', 'sans-serif'],
      },
      colors: {
        bgColor: '#191E35',
        primaryColor: '#332FD0',
        secondaryColor: '#F52AF5',
        thirdColor: '#15BFFD',
        redColor: '#FF0000',
        greenColor: '#00FF57',
        blurColor: '#2A3E84',
        stepColor: '#261437',
        lineColor: 'linear-gradient(90deg, #FFFFFF -0.34%, rgba(255, 255, 255, 0.981385) 32.91%, rgba(255, 255, 255, 0.286954) 102.21%, rgba(255, 255, 255, 0.25) 102.38%)',
      },
      backgroundImage: {
        primaryGradient: 'linear-gradient(93.07deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%);',
        lineGradient: 'linear-gradient(90deg, #FFFFFF -0.34%, rgba(255, 255, 255, 0.981385) 32.91%, rgba(255, 255, 255, 0.286954) 102.21%, rgba(255, 255, 255, 0.25) 102.38%)',
        stepGradient: 'linear-gradient(90.59deg, #782EFD -11.93%, #A61FFB 45.46%, #DE0CF8 108.1%);',
      },
    },
  },
  plugins: [],
};
