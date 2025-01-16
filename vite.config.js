import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude specific dependencies
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Allows importing SCSS files without relative paths
        additionalData: `@import "src/styles/global.scss";`, // Adjust the path to your global SCSS file
      },
    },
  },
  build: {
    outDir: 'build', // Ensure build output matches the directory used by gh-pages
    chunkSizeWarningLimit: 3000, // Suppress warnings for large chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
