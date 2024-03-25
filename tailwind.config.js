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
        grey: "#667085",
        btnColor: "#0000008f",
        btnColor2: "#FFFFFF4D",
        gradient: {
          color1: "#7EFF9B",
          color2: "#1E695A",
        },
      },
    },
  },
  fontSize: {
    h1: "4rem", // 64px
    h2: "3rem", // 48px
    h3: "2.5rem", // 40px
    h4: "1.5rem", // 24px
    h5: "1.375rem", // 22px
    h6: "0.875rem", // 14px
    "body-one": "1.5rem", // 24pxme
    "body-two": "1.375rem", // 22px
    "body-three": "1.125rem", // 18px
    "body-four": "1rem", // 16px
  },
  fontWeight: {},
  plugins: [flowbitePlugin],
};
