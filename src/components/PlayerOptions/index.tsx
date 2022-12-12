import { ProgressBar, OptionsContainer, TimeText, Button, Img } from './styles'
import { Props } from './types'
import VolumeIcon from '../../assets/images/volume.png'

export {}

export const PlayerOptions = ({ duration, currentTime, range, handleProgressBar }: Props) => {
  return (
    <OptionsContainer>
      <TimeText>{currentTime}</TimeText>
      <ProgressBar
        type='range'
        value={range}
        onChange={(e) => handleProgressBar(e.target.valueAsNumber)}
      />

      <TimeText>{duration}</TimeText>
      <Button>1x</Button>
      <Button>
        <Img src={VolumeIcon} alt='volume' />
      </Button>
    </OptionsContainer>
  )
}
