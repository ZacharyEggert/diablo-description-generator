const colors = require('tailwindcss/colors.js');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            gray: colors.trueGray,
            grey: colors.trueGray,
        }
    },
  },
  variants: {
    extend: {
        
    },
  },
  plugins: [],
}
