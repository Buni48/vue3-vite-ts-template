import {ViteSSG} from 'vite-ssg';
import App from './App.vue';
// @ts-ignore
import routes from '~pages';

export const createApp = ViteSSG(App, {routes, base: import.meta.env.BASE_URL}, (ctx) => {
  const modules = Object.values(import.meta.glob('./modules/*.ts', {eager: true}));

  for (const mod of modules) {
    (mod as any).install?.(ctx);
  }
});
