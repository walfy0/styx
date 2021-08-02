// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from '@/store'

Vue.use(mavonEditor)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
ElementUI.TableColumn.props.showOverflowTooltip = {type: Boolean, default: true}

router.beforeEach(function (to, from, next) {
  var UserId = JSON.parse(window.localStorage.getItem('list')).user_id
  // console.log(UserId)
  if (to.meta.needLogin) {
    if (UserId !== 0) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
