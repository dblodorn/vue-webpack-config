import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "HOME" */ './views/Home.vue'),
      meta: {
        order: 1,
        transitionName: 'slide'
      }
    },
    {
      path: '/page',
      name: 'page',
      component: () => import(/* webpackChunkName: "PAGE" */ './views/Page.vue'),
      meta: {
        order: 2,
        transitionName: 'slide'
      }
    }
  ]
})
