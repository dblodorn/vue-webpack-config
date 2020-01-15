<template>
  <div id="app">
    <Header/>
    <transition
      :name="transitionName"
      mode="out-in"
      v-on:after-enter="routeSwitch"
      :duration="{ enter: 0, leave: 300 }"
    >
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Header'
const DEFAULT_TRANSITION = 'fade'

export default {
  components: {
    Header
  },
  data () {
    return {
      isHome: null,
      transitionName: 'fade'
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      if (transitionName === 'slide') {
        const toOrder = to.meta.order;
        const fromOrder = from.meta.order;
        transitionName = from.meta.order > to.meta.order ? 'slide-left' : 'slide-right';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  methods: {
    routeSwitch () {
      window.scrollTo(0, 0)
      this.clicks()
      if (this.$route.path === '/') {
        this.pageHistory('/')
        this.isHome = true
      } else {
        this.isHome = false
        this.pageHistory(this.$route.path)
      }
    },
    ...mapActions(
      {
        pageHistory: 'GET_PAGE_HISTORY',
        clicks: 'GET_PAGE_COUNT'
      }
    )
  }
}
</script>
