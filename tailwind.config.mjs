/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: 'var(--theme-color)',
          red: 'var(--theme-red)',
          blue: 'var(--theme-blue)',
          gold: 'var(--theme-gold)',
          yellow: 'var(--theme-yellow)',
          purple: 'var(--theme-purple)',
          green: 'var(--theme-green)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}