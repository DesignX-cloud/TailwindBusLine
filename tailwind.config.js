// /** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
          "./src/**/*.html", 
          "./src/**/*.vue", 
          "./src/**/*.jsx"
         ],
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  plugins: [],
}
