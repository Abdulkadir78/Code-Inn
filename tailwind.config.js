const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        primary: "#7ABE8F",
      },
      fontFamily: {
        sans: ["Poppins"],
        brand: ["Cookie", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
