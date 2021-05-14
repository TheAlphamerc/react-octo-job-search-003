module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:  '#5964e0',
      },
      textColor: {
        'headline': '#0F0F0F',
        'subtitle': '#30302E',
        'caption': '#504D4D',
      },
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
