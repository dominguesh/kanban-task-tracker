import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all interfaces inside the container so host port maps work; host-side exposure
    // is limited to loopback via docker-compose.dev.yml (127.0.0.1:5173:5173).
    host: true,
    port: 5173,
  },
});
