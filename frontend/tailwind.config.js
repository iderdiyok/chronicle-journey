/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'bottom-blue': '0 4px 8px rgba(59, 31, 198)',
      },
    },
  },
  plugins: [],
}
