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
        display: ['var(--font-montserrat)', 'system-ui'],
        secondary: ['var(--font-raleway)', 'system-ui'],
        sans: ['var(--font-inter)', 'system-ui'],
      },
      colors: {
        neon: {
          blue: 'rgb(var(--neon-blue) / <alpha-value>)',
          purple: 'rgb(var(--neon-purple) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
} 