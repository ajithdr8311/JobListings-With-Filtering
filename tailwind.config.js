/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        "light-grayish-cyan-bg": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-filter": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
