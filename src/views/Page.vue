<template>
  <PageWrapper
    :bgColor="'yellow'"
    :pageTitle="'ANOTHER PAGE'"
  >
    <StyledTitle>Page</StyledTitle>
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