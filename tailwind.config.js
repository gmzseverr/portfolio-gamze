/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F7F7F7",
          text: "#000000",
          accent1: "#865DFF",
          accent2: "#E384FF",
          accent3: "#FFA3FD",
        },
        dark: {
          background: "#191825",
          text: "#FFFFFF",
          accent1: "#865DFF",
          accent2: "#E384FF",
          accent3: "#FFA3FD",
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
