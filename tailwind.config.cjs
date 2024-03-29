/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: { max: "339px" },
      sm460: { max: "460px" },
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
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
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Source Serif Pro", "serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
