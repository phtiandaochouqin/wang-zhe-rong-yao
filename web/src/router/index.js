import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('@/views/layout'),
    redirect:'/main',
    children:[
      {
        path: '/main',
        component: ()=>import('@/views/Main')
      },
      {
        path:'/actives/:id',
        component: ()=>import('@/views/Active'),
        props:true
      }
    ]
  },
  {
    path:'/heroes/:id',
    component: ()=>import('@/views/Hero'),
    props:true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
