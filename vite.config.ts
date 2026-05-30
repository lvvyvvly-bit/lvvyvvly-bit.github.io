import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      'motion/react': path.resolve(__dirname, 'src/vendor/motion-react.ts'),
      'motion/react-original': path.resolve(
        __dirname,
        'node_modules/motion/dist/es/react.mjs',
      ),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
})
