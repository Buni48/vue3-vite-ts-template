import {fileURLToPath, URL} from 'url';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';

export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue({}),
    // unplugin-vue-components
    Components({dts: 'src/types/components.d.ts'}),
    // vite-plugin-pages
    Pages({dirs: 'src/views'}),
  ],
};
