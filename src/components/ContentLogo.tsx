import styled from 'styled-components'

import { fadeSlideTop } from '../styles/animations'
import { theme } from '../styles/theme'
import { convertPixelToRem } from '../utils/helpers'

const ContentLogoUrl = '/src/images/triple2x.png'

interface ContentLogoProp {
  children: React.ReactNode
}

interface ContentLogoContainerProp {
  backgroundImageSrc: string
}

const ContentLogoContainer = styled.div<ContentLogoContainerProp>`
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
  background-image: url(${(props) => props.backgroundImageSrc});
  animation: ${fadeSlideTop} 700ms ease-in-out both;
`

function ContentLogo({ children }: ContentLogoProp) {
  return (
    <ContentLogoContainer backgroundImageSrc={ContentLogoUrl}>
      {children}
    </ContentLogoContainer>
  )
}

export default ContentLogo
