import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// ts file import 시 생기는 error disabled
import { remConfigValue } from '../utils/helpers.ts'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: ${remConfigValue}px;
  }
  body {
    min-width: 1200px;
  }
`
