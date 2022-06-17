import { keyframes } from 'styled-components'

import { convertPixelToRem } from '../utils/helpers'

export const fadeSlideTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-${convertPixelToRem(15)}rem);
  }
`
