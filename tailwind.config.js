/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colorful: "#ff8000",
        lightBeige: "#EEEDE7",
        offWhite: "#FEFEFE",
        darkColor: " #001f3d",
        cyan: "#2ff3e0",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        cutiveMono: ['"Cutive Mono"', "monospace"],
        anton: ['"Anton"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
