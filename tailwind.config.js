// /** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx"
  ],
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1439px' },
      // => @media (max-width: 1439px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '575px' },
      // => @media (max-width: 575px) { ... }
      
      'xs': { 'max': '474px' },
      // => @media (max-width: 474px) { ... }

      'ss': { 'max': '374px' },
      // => @media (max-width: 374px) { ... }
    }
  },
  plugins: [],
}
