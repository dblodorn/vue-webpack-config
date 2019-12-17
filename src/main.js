import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/global-styles.js'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  created () {
    console.log('VUE CREATED')
    this.$store.dispatch('GET_API_A')
    this.$store.dispatch('GET_API_B')
    this.$store.dispatch('GET_TOUCH_STATE')
    this.$store.dispatch('GET_RESIZE_STATE')
    this.$store.dispatch('GET_SCROLL_STATE')
    this.$store.dispatch('GET_USER_AGENT')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
