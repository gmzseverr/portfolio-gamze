/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Define your custom colors
        blueGray: "#647c90",
        ivory: "#e2ded0",
        coolGray: "#4e4f50", // Cool Gray
        gray: "#746c70", // Gray
        salmon: "#fcb5ac", // Salmon

        light: {
          background: "#e2ded0",
          accent1: "#647c90",
          accent2: "#fcb5ac",
          text: "#4e4f50",
        },
        dark: {
          background: "#4e4f50",
          accent1: "#647c90",
          accent2: "#746c70",
          text: "#e2ded0",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Rubik font
        roboto: ["Roboto", "sans-serif"], // Roboto font
      },
    },
  },
  plugins: [],
};
