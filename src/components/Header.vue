<template>
  <HeaderWrapper :class="{'slideInDown animated show' : siteLoaded}">
    <nav> 
      <router-link to="/">Home</router-link>
      <router-link to="/page">Page</router-link>
    </nav>
  </HeaderWrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'

const HeaderWrapper = styled.main`
  width: 100%;
  padding: 2rem;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: cener;
  background-color: white;
  z-index: 100;
  visibility: hidden;
  &.show {
    visibility: visible;
  }
  nav {
    width: 100%;
    text-align: center;
    font-size: 3rem;
  }
`

export default {
  components: {
    HeaderWrapper
  },
  computed: mapState([
    'siteLoaded'
  ])
}
</script>