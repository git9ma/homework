import styled from 'styled-components'

import { theme } from '../styles/theme'
import { fadeSlideTop } from '../styles/animations'
import { convertPixelToRem } from '../utils/helpers'

import IncreasingNumber from './IncreasingNumber'

interface MetricItemProps {
  indicator: string
  infoText: string
  targetNumber: number
}

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

function MetricItem({ indicator, infoText, targetNumber }: MetricItemProps) {
  return (
    <MetricItemContainer>
      <strong>
        <span>
          <IncreasingNumber duration={2000} target={targetNumber} begin={0} />
        </span>
        {`${indicator}`}
      </strong>
      {`의 ${infoText}`}
    </MetricItemContainer>
  )
}

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
