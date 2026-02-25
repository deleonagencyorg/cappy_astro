import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Configuración explícita de Tailwind
      config: { path: './tailwind.config.js' },
      // Asegurarse de que Tailwind se aplique a todos los archivos
      applyBaseStyles: true,
    }),
  ],
  // Optimizaciones de build y performance
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },
  // Compresión y output
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
          },
        },
      },
    },
    ssr: {
      external: ['sharp'],
    },
  },
});