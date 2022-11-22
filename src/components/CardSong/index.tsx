import {
  ButtonContainer,
  Img,
  Container,
  PlayButton,
  SongTittle,
  Text,
  TextContainer,
  Genre,
} from './styles'
import { FavButton } from '../FavButton'
import { useState } from 'react'
import { ReactComponent as PlayIcon } from '../../assets/images/play-button.svg'
import { Props } from './types'

export const CardSong = ({ song }: Props) => {
  const [isFav, setIsFav] = useState(false)

  function handleFav() {
    setIsFav(!isFav)
    console.log('isFav=', isFav)
  }

  return (
    <Container>
      <Img src={song.image} />
      <TextContainer>
        <SongTittle>{song.name}</SongTittle>
        <Text $variant='artist'>{song.author.name}</Text>
        <Text>{song.description}</Text>
        <ButtonContainer>
          <PlayButton>
            <PlayIcon />
          </PlayButton>
          <Text $variant='song-duration'>5 min</Text>
          <Genre>{song.genre}</Genre>
        </ButtonContainer>
      </TextContainer>
      <FavButton handleFav={handleFav} isFav={isFav}></FavButton>
    </Container>
  )
}
