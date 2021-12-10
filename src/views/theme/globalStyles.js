import { createGlobalStyle } from 'styled-components'
import { BG_COLOR, FONT } from '@theme/constants'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${FONT}, sans-serif;
    background: ${BG_COLOR};
  }
  .wrapper {
    max-width: 1475px;
    margin: 0 auto;
  }
`

export default GlobalStyle
