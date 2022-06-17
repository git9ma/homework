import { remConfigValue } from './setting.js'

export function convertPixelToRem(pixel: number) {
  return `${pixel / remConfigValue}`
}
