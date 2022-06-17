import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global-style'
import ContentLogo from './components/ContentLogo'
import SectionContainer from './components/SectionContainer'
import AwardsContainer from './components/AwardsContainer'
import MetricsContainer from './components/MetricsContainer'
import ContentsContainer from './components/ContentsContainer'

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
