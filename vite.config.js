import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          emailjs: ["emailjs-com"],
        },
      },
    },
    // Optimize bundle size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: false,
    // Minify CSS
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
  },
  // Preview configuration
  preview: {
    port: 4173,
    open: true,
  },
});
