import { injectGlobal } from 'vue-styled-components'

injectGlobal`
  .fade-enter {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
  }
  body {
    font-family: arial;
  }
`
