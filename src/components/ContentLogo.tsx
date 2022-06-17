import styled from 'styled-components'

import { theme } from '../styles/theme'
import { convertPixelToRem } from '../utils/helpers'

const ContentLogo = styled.div`
  box-sizing: border-box;
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: ${theme.color.lightGray};
  position: absolute;
  top: ${convertPixelToRem(150)}rem;
  width: ${convertPixelToRem(400)}rem;
  height: ${convertPixelToRem(338)}rem;
  background-size: ${convertPixelToRem(400)}rem ${convertPixelToRem(338)}rem;
  padding-top: ${convertPixelToRem(280)}rem;
  font-size: ${convertPixelToRem(15)}rem;
`

export default ContentLogo
