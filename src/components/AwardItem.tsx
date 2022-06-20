import styled from 'styled-components'

import { theme } from '../styles/theme'
import { convertPixelToRem } from '../utils/helpers'

interface AwardItemProps {
  children: React.ReactNode
  backgroundImageSrc: string
}

const AwardItemContainer = styled.div<AwardItemProps>`
  display: inline-block;
  font-family: sans-serif;
  background-position: left top;
  background-repeat: no-repeat;

  color: ${theme.color.mediumGray};

  font-weight: bold;
  background-size: ${convertPixelToRem(54)}rem ${convertPixelToRem(54)}rem;
  height: ${convertPixelToRem(54)}rem;
  padding-top: ${convertPixelToRem(5)}rem;
  padding-right: ${convertPixelToRem(0)}rem;
  padding-bottom: ${convertPixelToRem(5)}rem;
  padding-left: ${convertPixelToRem(62)}rem;
  font-size: ${convertPixelToRem(14)}rem;
  line-height: ${convertPixelToRem(22)}rem;
  margin-right: ${convertPixelToRem(39)}rem;

  background-image: url(${(props) => props.backgroundImageSrc});
`
function AwardItem({ children, backgroundImageSrc }: AwardItemProps) {
  return (
    <AwardItemContainer backgroundImageSrc={backgroundImageSrc}>
      {children}
    </AwardItemContainer>
  )
}

export default AwardItem
