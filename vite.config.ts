import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/real-estate-dashboard/', // change to your repo name
  plugins: [react()],
});
