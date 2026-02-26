/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    enabled: process.env.NODE_ENV === 'production',
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0a1628',
          900: '#0f2744',
          800: '#153a5e',
          700: '#1b4d78',
          600: '#216092',
        },
        brass: {
          DEFAULT: '#c9a227',
          light: '#e6c04a',
          dark: '#9a7b1a',
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0a1628 0%, #153a5e 50%, #0f2744 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        'navy-glow': '0 0 40px -10px rgba(33, 96, 146, 0.4)',
        'brass-glow': '0 0 30px -5px rgba(201, 162, 39, 0.5)',
      },
    },
  },
  plugins: [],
};
