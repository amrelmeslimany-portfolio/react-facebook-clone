module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "576px",
        maxsm: { max: "639px" },
        maxlg: { max: "1024px" },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#4a69b0",
      },
      spacing: {
        90: "350px",
      },
      fontSize: {
        md: "17px",
      },
      borderRadius: {
        circle: "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
