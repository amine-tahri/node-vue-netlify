import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
  },
  server: {
    // Proxy en développement local (port 8888 = netlify dev)
    proxy: {
      '/api': 'http://localhost:8888',
    },
  },
});
