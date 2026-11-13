import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match the GitHub repository name so the site works on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/my-app/',
});
