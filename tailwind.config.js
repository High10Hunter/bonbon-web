/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        30: '120px'
      },
      colors: {
        fin: '#55C590'
      },
      width: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem'
      },
      fontFamily: {
        display: ['Montserrat', 'serif']
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
