/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        'zx7-tablet':"url('/home/tablet/image-speaker-zx7.jpg')",
        'zx7-mobile':"url('/home/mobile/image-speaker-zx7.jpg')",
        'zx7-desktop':"url('/home/desktop/image-speaker-zx7.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}