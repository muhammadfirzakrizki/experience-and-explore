import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "moment", "react-datepicker"],
        },
      },
    },
    chunkSizeWarningLimit: 600, // ubah limit jika ingin hilangkan warning
  },
  base: '/', // atau '/' untuk root domain, sesuaikan kalau pakai subpath
})
