import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    manifest: true,
    assetsDir: '',
    outDir: 'dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ['jsx-dep']
  },
  plugins: [
    react(),
  ],
  server: {
    port: 1234,
  },
})
