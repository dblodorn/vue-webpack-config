import { injectGlobal } from 'vue-styled-components'

injectGlobal`
  /* SLIDE TRANSITION */
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active
    transition: transform 500ms ease-in;
    will-change: transform;
    overflow-x: hidden;
  }
  .slide-left-enter-active {
    transform: translateX(100vw);
  }
  .slide-left-leave-active {
    transform: translatex(-100vw);
  }
  .slide-right-enter-active {
    transform: translateX(-100vw);
  }
  .slide-right-leave-active {
    transform: translatex(100vw);
  }

  /* FADE TRANSITION */
  .fade-enter-active,
  .fade-leace-active {
    transition: opacity 500ms ease-in;
    will-change: opacity;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
  }
  body {
    font-family: arial;
  }
`
