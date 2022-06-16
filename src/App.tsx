import { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  color: yellow;
  background-color: blue;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
      </header>
    </div>
  )
}

export default App
