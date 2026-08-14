/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0071e3',
        ink: '#1d1d1f',
        canvas: '#fbfbfd',
        surface: '#f5f5f7',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}