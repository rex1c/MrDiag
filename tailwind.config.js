/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-vazirmatn)'],
      },
      colors: {
        primary: {
          light: '#FFA94D', // Lighter orange from logo
          DEFAULT: '#F28705', // Orange from logo
          dark: '#D95D39', // Darker orange
        },
        secondary: {
          light: '#40C4FF', // Light blue
          DEFAULT: '#01579B', // Darker blue for titles
          dark: '#023047', // Darkest blue
        },
        background: {
          DEFAULT: '#023047', // Dark blue-green from logo background
        },
      },
    },
  },
  plugins: [],
}
