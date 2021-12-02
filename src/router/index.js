import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import index from '../views/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/login',
      name:'login',
      component:login,
      meta: { 
        title:'喵星人统治地球'
       }
    },
    {
      path:'/',
      name:'index',
      component:index
    }
  ]
})