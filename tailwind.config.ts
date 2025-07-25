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
      fontFamily:{
        inter:['var(--font-inter)'],
        manrope:['var(--font-manrope)'],
      }
    },
      screens: {
        xs: '480px',
        sm: '680px',
        md: '768px',
        hlg: '992px',
        lg:'1024px',
        xl: '1280px',
        xxl:'1600px'
      },
  },
  plugins: [],
}
export default config


