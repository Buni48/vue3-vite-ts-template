import {createRouter, createWebHashHistory} from 'vue-router';
import Error404 from '../templates/Error404.vue';

export const install = (app: any) => {
  // Auto generates routes from vue files under ./views
  const views = import.meta.glob('../views/*.vue');

  const generatedRoutes = Object.keys(views).map((path: any) => {
    const name = path.match(/\.\/views(.*)\.vue$/)[1].toLowerCase();
    return {
      name: name,
      path: name === '/home' ? '/' : name,
      component: views[path], // () => import('./views/*.vue')
    };
  });

  const routes = [
    ...generatedRoutes,
    {name: 'error404', path: '/:pathMatch(.*)*', component: Error404},
  ];

  // create router instance and pass the `routes` option
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  app.use(router);
};
