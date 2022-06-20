import { useEffect, useRef, useState } from 'react'

// cf) https://codepen.io/ingomc/pen/zXMeGx

interface IncreasingNumberProps {
  duration: number
  target: number
  begin: number
}

function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t * t * t
    : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

function IncreasingNumber({ duration, target, begin }: IncreasingNumberProps) {
  const [value, setValue] = useState(0)
  const start = useRef(0)

  const draw = (now: number) => {
    if (now >= start.current + duration) {
      setValue(Math.floor(target))
      return
    }
    const progress = (now - start.current) / duration
    const easeInOut = easeInOutCubic(progress)
    const value = begin + (target - begin) * easeInOut

    setValue(Math.floor(value))

    requestAnimationFrame(draw)
  }

  const startAnimation = (timestamp: number) => {
    start.current = timestamp

    draw(timestamp)
  }

  useEffect(() => {
    requestAnimationFrame(startAnimation)
  }, [])

  return <>{value}</>
}

export default IncreasingNumber
