/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oleo: ["Oleo Script", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

