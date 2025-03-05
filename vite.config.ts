import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // Dokploy: https://docs.dokploy.com/docs/core/troubleshooting#common-solution-for-modern-javascript-frameworks
  preview: {
    port: 4173,
    host: true, // This enables listening on all network interfaces
  },
  server: {
    // Also add this for development server
    host: true, // This enables listening on all network interfaces
    port: 4173,
  },
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),

    tsconfigPaths(),
  ],
})
