// import Components
// =================
import {
  ButtonContainer,
  Img,
  Container,
  PlayButton,
  PlayImg,
  SongTittle,
  Text,
  TextContainer,
  Genre,
} from './styles'
import { FavButton } from '../FavButton'
import PlayIcon from '../../assets/images/play-button.png'

// import logic
// ==================================

import { handleCacheFav, handleFav, handleGenre } from './logic'
//handleCacheFav search in the LocalStorage if the user already has some
// favorite songs. If she has, it return in the var cacheFav which are those songs
// If not, it initializes an array in order to save future songs in LocalStorage

// handleGenre its a simple function that transforms ROCK_METAL=>rock metal

import { useState } from 'react'

// import types
// ===================
import { CacheFav, Props } from './types'

export const CardSong = ({ song }: Props) => {
  const cacheFav: CacheFav = handleCacheFav()
  const favIndex = cacheFav.findIndex((e) => e === song.id)
  const [isFav, setIsFav] = useState(favIndex >= 0 ? true : false) //The initial state correspond with the info saved in localStorage 'favorite'

  return (
    <Container>
      <Img src={song.image} />
      <TextContainer>
        <SongTittle>{song.name}</SongTittle>
        <Text $variant='artist'>{song.author.name}</Text>
        <Text>{song.description}</Text>
        <ButtonContainer>
          <PlayButton>
            <PlayImg src={PlayIcon} />
          </PlayButton>
          <Text $variant='song-duration'>5 min</Text>
          <Genre>{handleGenre(song.genre)}</Genre>
        </ButtonContainer>
      </TextContainer>
      <FavButton
        handleFav={handleFav}
        isFav={isFav}
        songId={song.id}
        setIsFav={setIsFav}
      ></FavButton>
    </Container>
  )
}
