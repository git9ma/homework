import styled from 'styled-components'

import { theme } from '../styles/theme'
import { fadeSlideTop } from '../styles/animations'
import { convertPixelToRem } from '../utils/helpers'

const AppleBadgeUrl = '/src/images/badge-apple4x.png'
const GoogleBadgeUrl = '/src/images/play-store2x.png'

interface AwardItemProps {
  children: React.ReactNode
  backgroundImageSrc: string
}

const StyledContainer = styled.div`
  white-space: nowrap;
  margin-top: ${convertPixelToRem(50)}rem;
  margin-right: ${convertPixelToRem(0)}rem;
  margin-bottom: ${convertPixelToRem(140)}rem;
  margin-left: ${convertPixelToRem(623)}rem;
  animation: ${fadeSlideTop} 700ms ease-in-out both;
  animation-delay: 200ms;
`

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

function AwardsContainer() {
  return (
    <StyledContainer>
      <AwardItem backgroundImageSrc={GoogleBadgeUrl}>
        <div>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </div>
      </AwardItem>
      <AwardItem backgroundImageSrc={AppleBadgeUrl}>
        <div>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </div>
      </AwardItem>
    </StyledContainer>
  )
}

export default AwardsContainer
