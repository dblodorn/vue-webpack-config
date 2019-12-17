<template>
  <PageWrapper
    :bgColor="'orange'"
    :pageTitle="'HOME PAGE'"
  >
    <StyledTitle>{{title}} Home</StyledTitle>
  </PageWrapper>
</template>

<script>
import PageWrapper from '@/components/PageWrapper'
import { StyledTitle } from '@/styles/components'

export default {
  components: {
    StyledTitle,
    PageWrapper
  },
  data () {
    return {
      title: process.env.APP_TITLE
    }
  }
}
</script>