import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global-style'

const Button = styled.button`
  color: ${theme.color.heavyGray};
  background-color: ${theme.color.white};
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </Button>
          </header>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </ThemeProvider>
    </>
  )
}

export default App
