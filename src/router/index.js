import * as VueRouter from 'vue-router' 

const Home = () => import ('../pages/Home.vue')
const About = () => import ('../pages/About.vue')
const Projects = () => import ('../pages/Projects.vue')
const Contact = () => import ('../pages/Contact.vue')

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path:'/',
            hash:'#home',
            name:'home',
            component: Home,
        },
        {
            path:'/',
            hash:'#about',
            name:'about',
            component: About,
        },
        {
            path:'/',
            hash:'#projects',
            name:'projects',
            component: Projects,
        },
        {
          path:'/',
          hash:'#contact',
          name:'contact',
          component: Contact,
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      console.log('to : ', to)
      console.log('from : ', from)
      console.log('savedPosition : ', savedPosition)
      console.log('isfromnav', to.params)
        if (to.hash && to.params.isFromNav=='true') {
          console.log('inside', to.params.isFromNav)
          if (to.hash =="#home"){
            return {
              el: to.hash,
              top:200,
              behavior: 'smooth',
            }
          } else {
            return {
              el: to.hash,
              top:130,
              behavior: 'smooth',
            }
          }
        }else if (savedPosition){
          return savedPosition
        }
      },
  })
export default router