import { ProgressBar, OptionsContainer, TimeText } from './styles'

export {}

export const PlayerOptions = () => {
  const currentTime = 0
  const duration = 10

  return (
    <OptionsContainer>
      <TimeText>{currentTime}</TimeText>
      <ProgressBar type='range' />

      <TimeText>{duration}</TimeText>
    </OptionsContainer>
  )
}
