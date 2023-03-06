/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    'bg-green-500',
    'bg-green-600',
    'bg-violet-500',
    'bg-violet-600',
    'bg-violet-400'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        head: ["Archivo", "sans-serif"],
      }
    },
  },
  plugins: [],
}
