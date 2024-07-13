/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          "section": {
            1 : "#57D69F",
            2 : "#A5D657",
            3 : "#D68857",
            4 : "#D65757",
            5 : "#5D5D5D",
          }
        }
      }
    },
  },
  plugins: [],
}

