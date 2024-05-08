import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        },
        yellow: {
          100: '#fcd34d',
        },
      },
    },
  },
  plugins: [],
}

export default config
