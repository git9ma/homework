import styled, { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global-style'
import { convertPixelToRem } from './utils/helpers'
import ContentLogo from './components/ContentLogo'
import SectionContainer from './components/SectionContainer'
import AwardsContainer from './components/AwardsContainer'
import MetricsContainer from './components/MetricsContainer'

const ContentsContainer = styled.div`
  width: ${convertPixelToRem(1040)}rem;
  height: auto;
  margin: 0 auto;
  position: relative;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SectionContainer>
          <ContentsContainer>
            <ContentLogo>2021년 12월 기준</ContentLogo>
            <MetricsContainer />
            <AwardsContainer />
          </ContentsContainer>
        </SectionContainer>
      </ThemeProvider>
    </>
  )
}

export default App
