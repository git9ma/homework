export const remConfigValue = 15

export function convertPixelToRem(pixel: number) {
  return `${pixel / remConfigValue}`
}
