import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import './filters'

import 'babel-polyfill'
import '@mdi/font/css/materialdesignicons.min.css'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import './assets/style/index.less'

import MyLoading from '@/views/components/public/Loading.vue'
import MyMessage from '@/views/components/public/Message.vue'
import MyComfirm from '@/views/components/public/Comfirm.vue'

Vue.component('MyLoading', MyLoading)
Vue.component('MyMessage', MyMessage)
Vue.component('MyComfirm', MyComfirm)


Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})