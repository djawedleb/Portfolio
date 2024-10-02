/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          100: '#EBF8FF', // light shade
          200: '#BEE3F8', // slightly darker
          300: '#90CDF4', // medium light blue
          400: '#63B3ED', // darker light blue
          500: '#4299E1', // regular blue
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

