/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jc7-red': '#D32F2F',
        'jc7-black': '#212121',
        'jc7-white': '#FFFFFF',
        'jc7-gray': '#F5F5F5',
        'jc7-blue': '#1976D2',
      },
    },
  },
  plugins: [],
}
