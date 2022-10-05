import {createRouter, createWebHashHistory} from 'vue-router';
import Error404 from '../views/Error404.vue';
import Home from '../views/Home.vue';

export const install = (app: any) => {
  const pages = ['imprint'];
  const capitalize = ([first, ...rest] : string) => first.toUpperCase() + rest.join('');

  // define some routes
  const routes = [
    {name: 'home', path: '/', component: Home},
    ...pages.map((page) => ({
      name: page,
      path: `/${page}`,
      component: () =>
        import(`../views/${capitalize(page as any)}.vue`).catch(() => Error404),
    })),
    {name: 'error404', path: '/:pathMatch(.*)*', component: Error404},
  ];

  // create router instance and pass the `routes` option
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  app.use(router);
};
