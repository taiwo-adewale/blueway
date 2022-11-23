/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: { max: "350px" },
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "2000px",
    },
    extend: {
      colors: {
        primary: "#FF4C60",
        btnPrimary: "#4B4870",
        heading: "#454360",
        textColor: "#596172",
      },
      backgroundColor: {
        mainBg: "#F9F9FE",
      },
    },
    fontFamily: {
      // base: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
