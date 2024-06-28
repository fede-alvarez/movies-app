/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#577B8D",
        secondary: "#344C64",
        accent: "#57A6A1",
        background: "#240750",
      },

      animation: {
        "fade-in-up": "fade-in-up 0.3s ease-in-out",
        "scale-it": "scale-it 0.4s ease-in-out",
      },

      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-it": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
