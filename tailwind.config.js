/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alabaster: "#e8ede0",
        platinum: "#d1dbd4",
        ashgray: "#BAC9C0",
        graphite: "#242425",
        lightgray: "#ADADAE",
        //darkmode
        eerieblack: "#1F1F1F",
        jet: "#292929",
        onyx: "#3D3D3D",
        dogwood: "#AC8A86",
        cinerous: "#6D4E4A",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
