/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee:  ["'Bungee Spice'", 'cursive'],
        pacifico: ["'Pacifico'", 'cursive'],
        nothing: ["'Nothing You Could Do'", 'cursive']

       },
    },
  },
  plugins: [],
}
