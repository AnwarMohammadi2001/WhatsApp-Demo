/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"], // Make sure to enable rounded variant for scrollbar
  },
};
