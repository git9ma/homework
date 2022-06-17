import styled from 'styled-components'

import { theme } from '../styles/theme'
import { fadeSlideTop } from '../styles/animations'
import { convertPixelToRem } from '../utils/helpers'

const StyledContainer = styled.div`
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
  animation: ${fadeSlideTop} 700ms ease-in-out both;
  animation-delay: 100ms;
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

function MetricsContainer() {
  return (
    <StyledContainer>
      <MetricItem />
      <MetricItem />
      <MetricItem />
    </StyledContainer>
  )
}

export default MetricsContainer
