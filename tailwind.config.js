/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      alabaster: "#e8ede0",
      platinum: "#d1dbd4",
      ashgray: "#BAC9C0",
      graphite: "#242425",
      lightgray: "#6F6F71",
      //darkmode
      eerieblack: "#1F1F1F",
      jet: "#292929",
      onyx: "#3D3D3D",
      dogwood: "#D3C1BF",
    },
  },
  plugins: [],
  darkMode: "class",
};
