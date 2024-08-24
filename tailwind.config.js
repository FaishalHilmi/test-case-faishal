/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        custom: "0.25%",
      },
      colors: {
        // customGray: "#B0B4C5",
        customBlue: "#3366FF",
        customGray: "#ECF2FA",
        customYellow: "#FFB020",
        customRed: "#D14343",
        customGreen: "#4FBEAB",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [],
};
