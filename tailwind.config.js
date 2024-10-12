/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        30: '120px'
      },
      colors: {
        fin: '#B1EB70'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
