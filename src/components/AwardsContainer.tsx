import styled from 'styled-components'

import { fadeSlideTop } from '../styles/animations'
import { convertPixelToRem } from '../utils/helpers'

import AwardItem from './AwardItem'

const AppleBadgeUrl = '/src/images/badge-apple4x.png'
const GoogleBadgeUrl = '/src/images/play-store2x.png'

const StyledContainer = styled.div`
  white-space: nowrap;
  margin-top: ${convertPixelToRem(50)}rem;
  margin-right: ${convertPixelToRem(0)}rem;
  margin-bottom: ${convertPixelToRem(140)}rem;
  margin-left: ${convertPixelToRem(623)}rem;
  animation: ${fadeSlideTop} 700ms ease-in-out both;
  animation-delay: 200ms;
`
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
