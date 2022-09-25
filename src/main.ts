import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App);
const modules = Object.values(import.meta.globEager('./modules/*.ts'));

for (const mod of modules) {
  (mod as any).install?.(app);
}

app.mount('#app');
