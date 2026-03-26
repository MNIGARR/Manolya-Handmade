/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define the primary purple color from the design
        'manolya-purple': '#8A2BE2', 
      },
    },
  },
  plugins: [],
}