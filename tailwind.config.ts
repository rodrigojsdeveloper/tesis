import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#ffffff',
          200: '#f9fafb',
          300: '#f1f1f1',
        },
        blue: {
          100: '#ecf4ff',
          200: '#273db3',
          300: '#271c47',
        },
        yellow: {
          100: '#fcd34d',
        },
        red: {
          100: '#b3261e',
        },
      },
      screens: {
        custom: '85.625rem',
      },
    },
  },
  plugins: [],
}

export default config
