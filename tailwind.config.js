/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Libre Baskerville", "sans-serif"],
        sec: ["Roboto", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          color: "#333",
          css: {
            h1: {
              color: theme("colors.brand.DEFAULT"),
            },
            h2: {
              color: theme("colors.brand.DEFAULT"),
            },
            h3: {
              color: theme("colors.brand.DEFAULT"),
            },
            p: {
              color: theme("colors.gray.700"),
            },
          },
        },
      }),
      colors: {
        text: {
          dark: "#001714",
          DEFAULT: "#ffff",
          light: "#EFF7F5",
        },
        brand: {
          dark: "#4F000B",
          DEFAULT: "#004F44",
          light: "#1A5D53",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
