<template>
  <div id="app">
    <Header/>
    <transition
      :name="transitionName"
      mode="out-in"
      v-on:after-enter="routeSwitch"
      :duration="{ enter: 0, leave: 250 }"
    >
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Header'

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
