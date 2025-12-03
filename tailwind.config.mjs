/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        toma: {
          orange: '#FF6B00',
          yellow: '#FFD600',
          green: {
            DEFAULT: '#00A651',
            light: '#2d6b4a',
            dark: '#1a3d2e',
            darker: '#0f2a1e',
          },
          blue: '#0066CC',
        },
      },
      fontFamily: {
        sans: ['Signika', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

