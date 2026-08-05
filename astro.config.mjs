import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// IMPORTANT: update `site` and `base` before deploying to GitHub Pages.
// If your repo is github.com/yourname/yourname.github.io, set base: '/'.
// If your repo is github.com/yourname/portfolio, set base: '/portfolio'.
export default defineConfig({
  site: 'https://yourname.github.io',
  base: '/',
  integrations: [tailwind()],
});
