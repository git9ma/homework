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

export default MetricItem
