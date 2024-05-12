// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
	  {
        path: '/About',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
	  {
        path: '/Services',
        name: 'Services',
        component: () => import('@/views/Services.vue'),
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/Test.vue'),
      },
	  {
        path: '/Blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue')
      },
	  {
        path: '/Blog/:ArticleName',
        component: () => import('@/views/Blog.vue'),
      },
	  {
        path: '/Contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
	  {
        path: '/Policy',
        name: 'PrivacyPolicy',
        component: () => import('@/views/PrivacyPolicy.vue'),
      }
    ],
  },
  {
	path: '/:pathMatch(.*)*',
	name: 'NotFound',
	component: () => import('@/views/404.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
	return { 
		top: 0
	 };
  },
})

export default router
