/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'customBlue': '#05386B',
        'customGreen': '#5CDB95',
      },
    },
  },
  plugins: [],
};
