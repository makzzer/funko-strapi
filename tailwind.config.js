module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  variants: {
    extend: {
      opacity: ["responsive", "hover", "focus", "group-hover"],
    },
  },
};
