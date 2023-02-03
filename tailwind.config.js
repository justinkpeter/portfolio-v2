/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Roboto', 'sans-serif'],
        'galin': ['Galin'],
        'roboto': ['Roboto'],
        'bebas': ['Bebas Neue'],
        'din': ['DIN Condensed'],
        'avenir': ['Avenir'],
        'montserrat': ['Montserrat'],
        'neue': ['Neue Montreal', 'sans-serif'],
        'default': ['Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Bebas Neue', 'sans-serif', 'apple-system', 'BlinkMacSystemFont'],
      },
      fontSize:{
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
        '14xl': '13rem',
      },
      gridTemplateColumns: {
        '23': 'repeat(23, 10vh)',
        'header' : '1fr repeat(12,minmax(min-content,10rem)) 1fr',
        'section' : '1fr repeat(12,minmax(min-content,10rem)) 1fr'
      },
      gridTemplateRows:{
        '10': 'repeat(10, 10vh)',
      }
    },
  },
  plugins: [require("daisyui"),
      plugin(function({ addBase, addUtilities, theme }) {
        addUtilities({
          '.write-tb-rl':{
            writingMode: 'tb-rl',
          }
        })
      })
    ],
}
