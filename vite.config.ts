import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  plugins: [
    vue({}),
    Components({}),
  ],
};
