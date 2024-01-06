import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseUrl = mode === 'production' ? '/team-git-install-npm' : '/';

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['react-date-picker'],
    },
    base: baseUrl,
  };
});
