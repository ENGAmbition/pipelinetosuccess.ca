/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        spruce: {
          light: "#C3D8DE",
          default: "#4E7B8C",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        jakarta: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};