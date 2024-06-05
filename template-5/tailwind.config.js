/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      containers: {
        sm: "36rem",
        md: "42rem",
        lg: "48rem",
        xl: "56rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
  darkMode: "class",
};
