/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        cv1: "#00959c",
        "CV1-soft": "#e6f4f5",
        cv3: {
          bg1: "#F5F5F5",
          black: {
            800: "#555555",
            900: "#262626",
          },
        },
      },
    },
  },
  plugins: [],
};
