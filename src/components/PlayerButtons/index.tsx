import { ButtonsContainer, PlayerButton, ImgButton, Audio } from './styles'

import PauseLogo from '../../assets/images/pause.png'
import PlayLogo from '../../assets/images/play-button-player.png'
import NextLogo from '../../assets/images/next-song.png'
import PrevLogo from '../../assets/images/prev-song.png'

import { Props } from './types'

export const PlayerButtons = ({ audioURL, prev, next, play, audioRef, isPlaying }: Props) => {
  return (
    <ButtonsContainer>
      <PlayerButton onClick={prev}>
        <ImgButton src={PrevLogo} alt='Previous song' />
      </PlayerButton>
      <Audio ref={audioRef} src={audioURL} preload='metadata' autoPlay={true} />
      <PlayerButton onClick={play}>
        {isPlaying ? (
          <ImgButton src={PauseLogo} alt='Pause' />
        ) : (
          <ImgButton src={PlayLogo} alt='Play' />
        )}
      </PlayerButton>

      <PlayerButton onClick={next}>
        <ImgButton src={NextLogo} alt='Next song' />
      </PlayerButton>
    </ButtonsContainer>
  )
}
