module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1B2431",
        secondary: "#016795",
        tertiary: "#1E488F",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        poppins: ["poppins"]
      }
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
