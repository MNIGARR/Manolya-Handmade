/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel pink palette aligned with logo
        'manolya-purple': '#B85C7B',
        'manolya-purple-dark': '#9F4A69',
        'manolya-purple-soft': '#F8E6EE',
      },
    },
  },
  plugins: [],
}