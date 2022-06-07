import { createRouter, createWebHashHistory } from 'vue-router';

import BlogPage from './views/BlogPage.vue';
import BlogPost from './views/BlogPost.vue';
import BlogPost2 from './views/BlogPost2.vue';
import BlogPost3 from './views/BlogPost3.vue';
import Contact from './views/Contact.vue';
import Home from './views/Home.vue';
import Pricing from './views/Pricing.vue';
import Team from './views/Team.vue';
import SignIn from './views/SignIn.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: BlogPage,
      path: '/blogpage',
    },
    {
      component: BlogPost,
      path: '/blogpost',
    },
    {
      component: SignIn,
      path: '/signin',
    },
    {
      component: BlogPost2,
      path: '/blogpost2',
    },
    {
      component: BlogPost3,
      path: '/blogpost3',
    },
    {
      component: Contact,
      path: '/contact',
    },
    {
      component: Home,
      path: '/',
    },
    {
      component: Pricing,
      path: '/pricing',
    },
    {
      component: Team,
      path: '/team',
    },
  ],
});
