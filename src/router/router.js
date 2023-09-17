import Main from '@/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '@/pages/UserPage';
import About from '@/pages/About';
import PostIdPage from '@/pages/PostIdPage';
import PostPageWithStore from '@/pages/PostPageWithStore';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi'


const routes = [
  // статическая навигация
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: UserPage,
  },
  {
    path: '/about',
    component: About,
  },
  // маршрут динамической навигации
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  // store vuex
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
