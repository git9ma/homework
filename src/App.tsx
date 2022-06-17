import styled, { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global-style'
import { convertPixelToRem } from './utils/helpers'
import ContentLogo from './components/ContentLogo'
import SectionContainer from './components/SectionContainer'

const AppleBadgeUrl = '/src/images/badge-apple4x.png'
const GoogleBadgeUrl = '/src/images/play-store2x.png'

const ContentsContainer = styled.div`
  width: ${convertPixelToRem(1040)}rem;
  height: auto;
  margin: 0 auto;
  position: relative;
`
const MetricsContainer = styled.div`
  margin-left: ${convertPixelToRem(623)}rem;
  padding-top: ${convertPixelToRem(150)}rem;
`

const MetricItemContainer = styled.div`
  color: ${theme.color.heavyGray};
  font-family: sans-serif;
  & strong {
    font-weight: bold;
  }
  font-size: 36px;
  font-size: ${convertPixelToRem(36)}rem;
  letter-spacing: -${convertPixelToRem(1)}rem;
  margin-bottom: ${convertPixelToRem(20)}rem;
`

const AwardsContainer = styled.div`
  white-space: nowrap;
  margin-top: ${convertPixelToRem(50)}rem;
  margin-right: ${convertPixelToRem(0)}rem;
  margin-bottom: ${convertPixelToRem(140)}rem;
  margin-left: ${convertPixelToRem(623)}rem;
`
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

function MetricItem() {
  return (
    <MetricItemContainer>
      <strong>
        <span>100</span>만 개
      </strong>
      의 여행 일정
    </MetricItemContainer>
  )
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SectionContainer>
          <ContentsContainer>
            <ContentLogo>2021년 12월 기준</ContentLogo>
            <MetricsContainer>
              <MetricItem />
              <MetricItem />
              <MetricItem />
            </MetricsContainer>
            <AwardsContainer>
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
            </AwardsContainer>
          </ContentsContainer>
        </SectionContainer>
      </ThemeProvider>
    </>
  )
}

export default App
