import type { Config } from 'tailwindcss'

import { irisDark } from '@radix-ui/colors'


export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...irisDark
      },
      fontFamily: {
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [],
} satisfies Config

