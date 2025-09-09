/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // You are using app directory structure
    "./pages/**/*.{js,ts,jsx,tsx}", // Optional if you have `pages` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Optional if you have components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
