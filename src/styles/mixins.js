import { css } from 'vue-styled-components'
import { breakpoints } from './theme'

// Media Queries
const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 501px) {
      ${css(...args)}
    }
  `,
  big_vert: (...args) => css`
    @media (max-width: 1650px, min-height: 1200px ) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.medium}px) {
      ${css(...args)}
    }
  `,
  big: (...args) => css`
    @media (min-width: ${breakpoints.big}px) {
      ${css(...args)}
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${css(...args)}
    }
  `,
  hover: (...args) => css`
    @media (hover: hover) {
      ${css(...args)}
    }
  `
}

export {
  media
}
