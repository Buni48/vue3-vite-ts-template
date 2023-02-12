import {createRouter, createWebHistory} from 'vue-router';
// @ts-ignore
import routes from '~pages';

export const install = (app: any) => {
  // create router instance and pass the automatically generated routes
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  app.use(router);
};
