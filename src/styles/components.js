import styled from 'vue-styled-components'
import * as _ from './mixins'

const StyledTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: red;
  font-family: verdana;
  ${_.media.desktop`
    font-size: 8rem;
  `}
`

export {
  StyledTitle
}
