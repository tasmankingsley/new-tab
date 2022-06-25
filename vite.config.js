import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-tab/',
  plugins: [svelte()],
  build: {
    outDir: 'docs',
  },
});
