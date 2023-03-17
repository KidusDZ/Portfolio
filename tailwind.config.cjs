/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      logo: ['Fredoka One', 'cursive'],
      header: ['Acme', 'sans-serif'],
      text: ['Kanit', 'sans-serif'],
    },
  },
  plugins: [],
};
