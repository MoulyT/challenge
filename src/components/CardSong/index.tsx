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
  const cacheFav = localStorage.getItem('fav' + JSON.stringify(song.id))

  const [isFav, setIsFav] = useState(
    typeof cacheFav === 'undefined' || cacheFav === null ? false : true,
  )

  function handleFav() {
    isFav
      ? (setIsFav(!isFav), localStorage.removeItem('fav' + JSON.stringify(song.id)))
      : (setIsFav(!isFav),
        localStorage.setItem('fav' + JSON.stringify(song.id), JSON.stringify(song.id)))
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
