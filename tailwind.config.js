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
    extend: {
      inset: {
        '1/6': '15%',
      }
    },
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
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      x: '1em',
    }
  },
  plugins: [],
}
