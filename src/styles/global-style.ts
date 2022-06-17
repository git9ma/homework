import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

import { remConfigValue } from '../utils/setting.js'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: ${remConfigValue}px;
  }
  body {
    min-width: 1200px;
  }
`
