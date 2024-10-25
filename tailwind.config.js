/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          background: "#f8f3ea", // Light beige background
          text: "#0b1957", // Dark blue text
          accent: "#5784e6",
          lightAccent: "#d1e8ff", // Light blue accent
        },
        // Dark mode colors
        dark: {
          background: "#0b1957", // Dark blue background
          text: "#f8f3ea", // Light beige text
          accent: "#d1e8ff", // Light blue accent
          darkAccent: "#578436", // Green accent
        },
        // Other colors
        colorful: "#ff8000",
        lightBeige: "#EEEDE7",
        offWhite: "#FEFEFE",
        darkColor: "#001f3d",
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
