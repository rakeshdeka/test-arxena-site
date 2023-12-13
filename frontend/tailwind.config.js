/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ['Source Sans 3', 'sans-serif'], // 'CustomFont' should match the font name in your CSS
      },
    },
  },
  plugins: [],
}

