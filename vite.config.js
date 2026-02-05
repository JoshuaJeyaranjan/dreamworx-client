import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  build: {
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          emailjs: ["emailjs-com"],
        },
      },
    },
    
    chunkSizeWarningLimit: 1000,
    
    sourcemap: false,
    
    cssCodeSplit: true,
    
    assetsInlineLimit: 4096,
  },
  
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  
  server: {
    port: 3000,
    open: true,
  },
  
  preview: {
    port: 4173,
    open: true,
  },
});
