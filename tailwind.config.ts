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
        "primary-600": "#6C47FF",
        "primary-700": "#5639CC",
        "primary-50": "#F4F2FF",
        "success-700": "#16a34a",
        "success-50": "#ECFDF3",
        darkmode: {
          "primary": "#d657bc",
          "secondary": "#16a34a",
          "accent": "#4464af",
          "neutral": "#2a2d37",
          "base-100": "#2a2d37",
          "info": "#8599f4",
          "success": "#16a34a",
          "warning": "#fbbf24",
          "error": "#dc2626",
        }
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
