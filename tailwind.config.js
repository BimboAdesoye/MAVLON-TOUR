/** @type {import('tailwindcss').Config} */

import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.875rem",
    },
    extend: {
      colors: {
        darkgreen: "#1A3D36",
        mediumgreen: "#7EFF9B",
        lightgreen: "#E2FDDC",
        white: "#FFFFFF",
        whiteAccent: "#FFFFFF99",
        grey: "#667085",
        ash: "#898989",
        btnColor: "#0000008f",
        btnColor2: "#FFFFFF4D",
        borderColor: "#DBDBDB",
        borderColor2: "#FFFFFF70",
        backgroundColor:
          "linear-gradient(359.21deg, #1E695A 38.12%, #7EFF9B 163.97%)",
        gradient: {
          color1: "#7EFF9B",
          color2: "#1E695A",
        },
      },
    },
    fontSize: {
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "1xl": "1.375rem", // 22px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "3.5xl": "2rem", // 32px
      "4xl": "2.25rem", // 36px
      "4.5xl": "2.5rem", // 40px
      "5xl": "2.625rem", // 42px
      "5.5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  plugins: [flowbitePlugin],
};
