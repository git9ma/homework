import styled from 'styled-components'

import { convertPixelToRem } from '../utils/helpers'

import MetricItem from './MetricItem'

const StyledContainer = styled.div`
  margin-left: ${convertPixelToRem(623)}rem;
  padding-top: ${convertPixelToRem(150)}rem;
`

function MetricsContainer() {
  return (
    <StyledContainer>
      <MetricItem indicator="만 명" infoText="사용자" targetNumber={350} />
      <MetricItem indicator="만 개" infoText="리뷰" targetNumber={21} />
      <MetricItem indicator="만 개" infoText="저장" targetNumber={650} />
    </StyledContainer>
  )
}

export default MetricsContainer
