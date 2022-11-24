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

//handleCacheFav search in the LocalStorage if the user already has some
// favorite songs. If she has, it return in the var cacheFav which are those songs
// If not, it initializes an array in order to save future songs in LocalStorage
const handleCacheFav = () => {
  let cacheFav: CacheFav = []

  localStorage.getItem('favorite') === null
    ? localStorage.setItem('favorite', JSON.stringify([]))
    : (cacheFav = JSON.parse(localStorage.getItem('favorite') as string))

  return cacheFav
}

// handleGenre its a simple function that transforms ROCK_METAL=>rock metal
const handleGenre: HandleGenre = (genre: SongTypes['genre']) => {
  const genreArray = genre.split('')

  for (let i = 0; i < genreArray.length; i++) {
    genreArray[i] === '_' && genreArray.splice(i, 1, ' ')
  }

  const genreString = genreArray.join('')
  const genreProcessed = genreString.toLowerCase()

  return genreProcessed
}

export const CardSong = ({ song }: Props) => {
  const cacheFav: CacheFav = handleCacheFav()
  const favIndex = cacheFav.findIndex((e) => e === song.id)
  const [isFav, setIsFav] = useState(favIndex >= 0 ? true : false) //The initial state correspond with the info saved in localStorage 'favorite'

  // If you push the fav button you set isFav to !isFav and push/remove the song from local Storage
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
          <Genre>{handleGenre(song.genre)}</Genre>
        </ButtonContainer>
      </TextContainer>
      <FavButton handleFav={handleFav} isFav={isFav}></FavButton>
    </Container>
  )
}
