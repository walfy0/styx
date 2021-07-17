import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Blog from '@/components/inner/Blog'
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
      component: Home
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
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/new_doc',
      name: 'new_doc',
      component: NewDoc
    }
  ]
})
