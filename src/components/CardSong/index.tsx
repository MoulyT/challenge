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

import { CacheFav, Props, SongTypes, HandleGenre } from './types'

const handleCacheFav = () => {
  let cacheFav: CacheFav = []
  JSON.parse(localStorage.getItem('favorite')) === null
    ? localStorage.setItem('favorite', JSON.stringify([]))
    : (cacheFav = JSON.parse(localStorage.getItem('favorite')))

  return cacheFav
}

const handleGenre: HandleGenre= (genre: SongTypes["genre"])=>{
  genre.toLowerCase
}

export const CardSong = ({ song }: Props) => {
  const cacheFav: CacheFav = handleCacheFav()
  const favIndex = cacheFav.findIndex((e) => e === song.id)
  const [isFav, setIsFav] = useState(favIndex >= 0 ? true : false)

  function handleFav() {
    const cacheFav: CacheFav = handleCacheFav()
    const favIndex = cacheFav.findIndex((e) => e === song.id)
    isFav
      ? (setIsFav(!isFav),
        cacheFav.splice(favIndex, 1),
        localStorage.setItem('favorite', JSON.stringify(cacheFav)))
      : (setIsFav(!isFav),
        cacheFav.push(song.id),
        localStorage.setItem('favorite', JSON.stringify(cacheFav)))
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
