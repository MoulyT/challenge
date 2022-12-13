type Range = number

export type Props = {
  duration: string
  currentTime: string
  range: number
  handleProgressBar: (range: Range) => void
  speed: number
  handleSpeed: () => void
  isHovered: boolean
  handleHover: () => void
  handleVolume: (arg: number) => void
  defaultValue: number
}
