<template>
  <AppWrapper
    :height="resizeState.height"
    :bgColor="bgColor"
  >
    <Loading v-if="!siteLoaded"/>
    <transition
      :name="'fade'"
      mode="out-in"
      :duration="{ enter: 250, leave: 250 }"
    >
      <main v-if="siteLoaded">
        <slot></slot>
      </main>
    </transition>
  </AppWrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
import { breakpoints } from '@/styles/theme'
import Loading from '@/views/Loading'

const props = {
  height: Number,
  bgColor: String
}

const AppWrapper = styled('main', props)`
  width: 100%;
  display: block;
  min-height: ${props => props.height}px;
  background-color: ${props => props.bgColor || colors.white};
  main {
    width: 100%;
    transition: opacity 350ms ease-in-out;
    padding: 6rem 3rem;
    will-change: opacity;
     &.fade-enter {
      opacity: 0;
    }
    &.fade-leave-active {
      opacity: 0;
    }
  }
`

export default {
  components: {
    AppWrapper,
    Loading
  },
  props: [
    'MainClass',
    'pageTitle',
    'pageDescription',
    'pageImage',
    'bgColor',
    'notFound'
  ],
  data () {
    return {
      tablet: breakpoints.tablet
    }
  },
  metaInfo () {
    const image = () =>
      this.pageImage ? this.pageImage : `${process.env.APP_URL}imgs/twitter-card.jpg`

    const title = () =>
      this.pageTitle ? `${this.pageTitle} | ${process.env.APP_TITLE}` : process.env.APP_TITLE

    const description = () =>
      this.pageDescription ? this.pageDescription : process.env.APP_DESCRIPTION

    const metaTags = [
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type'
      },
      {
        property: 'og:title',
        content: title(),
        template: title(),
        vmid: 'og:title'
      }
    ]

    if (this.notFound) {
      metaTags.push({
        property: 'prerender-status-code',
        content: 404,
        vmid: 'prerender-status-code'
      })
    } else {
      metaTags.push({
        name: 'description',
        content: description(),
        vmid: 'description'
      },
      {
        property: 'og:description',
        content: description(),
        vmid: 'og:description'
      })
      metaTags.push({
        name: 'twitter:card',
        content: 'summary_large_image',
        vmid: 'twitter:card'
      })
      metaTags.push({
        name: 'og:card',
        content: 'summary_large_image',
        vmid: 'og:card'
      })
      metaTags.push({
        name: 'twitter:image',
        content: image(),
        vmid: 'twitter:image'
      })
      metaTags.push({
        property: 'og:image',
        content: image(),
        vmid: 'og:image'
      })
    }

    return {
      title: title(),
      meta: metaTags
    }
  },
  computed: mapState([
    'siteLoaded',
    'apiData',
    'resizeState'
  ])
}
</script>
