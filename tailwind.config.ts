import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        "box-shadow": "0px 8px 16px 0px rgba(75, 52, 37, 0.05);",
      },
      colors: {
        'primary': '#0F8BD0',
        'brown-80': '#4F3422',
        'black': '#0B0A0A' 
      }
    },
  },
  plugins: [],
}
export default config
