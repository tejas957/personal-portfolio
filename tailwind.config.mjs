/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12141C',
        panel: '#191C27',
        line: '#2A2E3D',
        paper: '#EDEDF2',
        muted: '#9195A6',
        amber: '#c77df2',
        teal: '#eac9f9ff',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
