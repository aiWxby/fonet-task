/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF1F70",
        },
        secondary: {
          300: "#73738F",
          700: "#1D1D29",
          800: "#171721",
          900: "#14141d",
        },
      },
    },
  },
  plugins: [],
};
