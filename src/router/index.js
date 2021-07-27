import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Blog from '@/components/inner/Blog'
import Info from '@/components/inner/Info'
import Register from '@/components/Register'
import NewDoc from '@/components/inner/NewDoc'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home/',
      name: 'Home',
      component: Home,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/new_doc',
      name: 'new_doc',
      component: NewDoc,
      meta: {
        needLogin: true
      }
    }
  ]
})
