import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {path:'/login',component: () => import('@/views/login')},
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main'),
    children: [
      
      { path: '/categories/create', component: () => import('@/views/CategoryEdit') },
      { path: '/categories/list', component: () => import('@/views/CategoryList') },
      { path: '/categories/edit/:id', component: () => import('@/views/CategoryEdit'), props: true },
      { path: '/items/create', component: () => import('@/views/ItemEdit') },
      { path: '/items/list', component: () => import('@/views/ItemList') },
      { path: '/items/edit/:id', component: () => import('@/views/ItemEdit'), props: true },
      { path: '/heros/create', component: () => import('@/views/HeroEdit') },
      { path: '/heros/list', component: () => import('@/views/HeroList') },
      { path: '/heros/edit/:id', component: () => import('@/views/HeroEdit'), props: true },
      { path: '/articles/create', component: () => import('@/views/ArticleEdit') },
      { path: '/articles/list', component: () => import('@/views/ArticleList') },
      { path: '/articles/edit/:id', component: () => import('@/views/ArticleEdit'), props: true },
      { path: '/ads/create', component: () => import('@/views/AdEdit') },
      { path: '/ads/list', component: () => import('@/views/AdList') },
      { path: '/ads/edit/:id', component: () => import('@/views/AdEdit'), props: true },
      { path: '/admin_users/create', component: () => import('@/views/AdminUserEdit') },
      { path: '/admin_users/list', component: () => import('@/views/AdminUserList') },
      { path: '/admin_users/edit/:id', component: () => import('@/views/AdminUserEdit'), props: true },
     
    ]
  },
  {path:'/testtest',component:()=>import('@/test')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
