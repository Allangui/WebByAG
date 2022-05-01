import * as VueRouter from 'vue-router' 

import Home from '../pages/home.vue'
const About = () => import ('../pages/About.vue')
const Projects = () => import ('../pages/Projects.vue')

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/about',
            name:'about',
            component: About
        },
        {
            path:'/projects',
            name:'projects',
            component: Projects
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log('to : ', to)
        console.log('from : ', from)
        console.log('sevedPosition : ', savedPosition)
        if (to.hash) {
          return {
            el: to.hash,
            top:150,
            behavior: 'smooth',
          }
        }
      },
})
export default router