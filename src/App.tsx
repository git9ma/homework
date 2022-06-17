import styled, { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global-style'
import { convertPixelToRem } from './utils/helpers'
import ContentLogo from './components/ContentLogo'
import SectionContainer from './components/SectionContainer'
import AwardsContainer from './components/AwardsContainer'

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
            <AwardsContainer />
          </ContentsContainer>
        </SectionContainer>
      </ThemeProvider>
    </>
  )
}

export default App
