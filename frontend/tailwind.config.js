/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        min60em: "62em", // Equivalent to 62em
        min80em: "80em",
        min48em: "48em",
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', "sans-serif"],
      },
      colors: {
        primary_red: "#E91C23",
        primary_light: "rgb(249, 249, 249)",
        primary_grey: "rgb(199, 199, 199)",
        secondary_grey: "rgb(129, 129, 129)",
      },
      keyframes: {
        "slide-in-top": {
          "0%": {
            transform: "translateY(-1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-in-top":
          "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};
