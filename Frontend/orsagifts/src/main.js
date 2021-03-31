import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lingallery from 'lingallery';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  Lingallery,
  render: function (h) { return h(App) }
}).$mount('#app')
