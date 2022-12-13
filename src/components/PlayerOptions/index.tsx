import { ProgressBar, OptionsContainer, TimeText, Button, Img, VolumeInput } from './styles'
import { Props } from './types'
import VolumeIcon from '../../assets/images/volume.png'

export {}

export const PlayerOptions = ({
  duration,
  currentTime,
  range,
  handleProgressBar,
  speed,
  handleSpeed,
  isHovered,
  handleHover,
  handleVolume,
  defaultValue,
}: Props) => {
  return (
    <OptionsContainer>
      <TimeText>{currentTime}</TimeText>
      <ProgressBar
        type='range'
        value={range}
        onChange={(e) => handleProgressBar(e.target.valueAsNumber)}
      />

      <TimeText>{duration}</TimeText>
      <Button onClick={handleSpeed}>{speed}x</Button>

      <Button onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Img src={VolumeIcon} alt='volume' />
        {isHovered && (
          <VolumeInput
            type='range'
            onChange={(e) => handleVolume(e.target.valueAsNumber)}
            defaultValue={defaultValue}
          />
        )}
      </Button>
    </OptionsContainer>
  )
}
