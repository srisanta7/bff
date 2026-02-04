import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // IMPORTANT: required so Vercel serves dist correctly
  base: '/',

  plugins: [react()],

  server: {
    port: 3000,
    host: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
