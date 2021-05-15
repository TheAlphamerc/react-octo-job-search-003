module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:  '#5964e0',
        primaryLight: '#5964e0bf',
        cardColor: "#19202d",
        bcakground: "#121721"
      },
      textColor: {
        'headline': '#0F0F0F',
        'subtitle': '#6e8098',
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
