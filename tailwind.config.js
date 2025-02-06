/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    // Add other colors you're using
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

