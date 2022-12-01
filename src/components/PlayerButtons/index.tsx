import { ButtonsContainer, PlayerButton, ImgButton } from './styles'

import PauseLogo from '../../assets/images/pause.png'
import NextLogo from '../../assets/images/next-song.png'
import PrevLogo from '../../assets/images/prev-song.png'

export const PlayerButtons = () => {
  return (
    <ButtonsContainer>
      <PlayerButton>
        <ImgButton src={PrevLogo} alt='Previous song' />
      </PlayerButton>

      <PlayerButton>
        <ImgButton src={PauseLogo} alt='Play' />
      </PlayerButton>

      <PlayerButton>
        <ImgButton src={NextLogo} alt='Next song' />
      </PlayerButton>
    </ButtonsContainer>
  )
}
