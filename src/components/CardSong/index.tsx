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

import { useLogic } from './logic'
//handleCacheFav search in the LocalStorage if the user already has some
// favorite songs. If she has, it return in the var cacheFav which are those songs
// If not, it initializes an array in order to save future songs in LocalStorage

// handleGenre its a simple function that transforms ROCK_METAL=>rock metal

// import types
// ===================
import { Props } from './types'
import { useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'
import myReactiveFav from '../../graphql/variables/fav'

export const CardSong = ({ song }: Props) => {
  const { handleFav, handleGenre, isFav, setIsFav, handleCacheFav } = useLogic({ song: song })
  //The initial state correspond with the info saved in localStorage 'favorite'

  useEffect(() => {
    handleCacheFav()
    console.log('hola')
  }, [])

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
      <FavButton handleFav={handleFav} isFav={isFav >= 0} songId={song.id}></FavButton>
    </Container>
  )
}
