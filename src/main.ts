import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App);
const modules = Object.values(import.meta.glob('./modules/*.ts', {eager: true}));

for (const mod of modules) {
  (mod as any).install?.(app);
}

app.mount('#app');
