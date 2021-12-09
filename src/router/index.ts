import { createRouter, createWebHistory, RouteRecordRaw, Router, RouterView } from 'vue-router'
import Layout from '../components/Layout.vue'
export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login3',
    component: () => import('../pages/auth/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    name: 'Login',
    component: Layout,
    meta: {
      title: '主页',
      icon: 'test',
    },
    redirect: '/user/login',
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/login',
    meta: {
      title: '用户',
      icon: 'test',
    },
    children: [
      {
        path: 'login',
        name: 'Login2',
        meta: {
          title: '用户',
          icon: 'test',
        },
        component: () => import('../pages/auth/Login.vue'), // 注意这里要带上 文件后缀.vue
      },
      {
        path: 'index',
        name: 'Login4',
        meta: {
          title: '用户2',
          icon: 'test',
        },
        component: () => import('../pages/user/index.vue'), // 注意这里要带上 文件后缀.vue
      },
    ],
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
