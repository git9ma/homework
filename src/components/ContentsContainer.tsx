import styled from 'styled-components'

import { convertPixelToRem } from '../utils/helpers'

const ContentsContainer = styled.div`
  width: ${convertPixelToRem(1040)}rem;
  height: auto;
  margin: 0 auto;
  position: relative;
`

export default ContentsContainer
