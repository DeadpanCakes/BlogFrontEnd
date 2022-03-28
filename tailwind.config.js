module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: { 
        "light": "0 0 5px #8789C0",
        "darkxl":  "0 0 10px rgba(194, 202, 232, 1)"
      },
      colors: {
        "darkBG": "#111D4A",
        "highlight": "#45F0DF",
        "darkFont" : "#C2CAE8"
      },
    },
  },
  plugins: [],
}
