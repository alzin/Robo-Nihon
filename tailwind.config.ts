module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // This enables dark mode
  theme: {
    extend: {
      borderWidth: {
        'thin': '0.01cm',
        'gradient': 'repeating-linear-gradient(45deg, #ff0000, #ff0000 25%, #00ff00 25%, #00ff00 50%, #0000ff 50%, #0000ff 75%, #ff00ff 75%, #ff00ff)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
