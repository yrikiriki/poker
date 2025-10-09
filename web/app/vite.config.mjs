import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://api:8080',
        changeOrigin: true,
        rewrite: p => p,
        configure (proxy) {
          proxy.on('proxyReq', (_proxyReq, req) => console.log('[proxyReq]', req.method, req.url))
          proxy.on('proxyRes', (proxyRes, req) => console.log('[proxyRes]', proxyRes.statusCode, req.method, req.url))
        }
      }
    }
  }
})