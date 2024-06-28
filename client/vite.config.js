import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/index'),
      '@pages': path.resolve(__dirname, './src/pages/index'),
      '@store': path.resolve(__dirname, './src/store/index'),
      '@icons': path.resolve(__dirname, './src/assets/icons/index'),
      '@helpers': path.resolve(__dirname, './src/helpers/index'),
      '@hooks': path.resolve(__dirname, './src/hooks/index'),
      '@constants': path.resolve(__dirname, './src/constants/index'),
      '@globalTypes': path.resolve(__dirname, './src/globalTypes'),
      '@services': path.resolve(__dirname, './src/services/index'),
      '@utils': path.resolve(__dirname, './src/utils/index'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/index'),
      '@modules': path.resolve(__dirname, './src/modules/index'),
    },
  },
});
