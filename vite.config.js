import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// En producción la web se publica en GitHub Pages bajo /clinica_dental/
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/clinica_dental/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}))
