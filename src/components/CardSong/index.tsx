// import Components

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

import { useLogic } from './logic'

// import types

import { Props } from './types'

// import reactVar

export const CardSong = ({ song }: Props) => {
  const { handleFav, handleGenre, isFav, handlePlayer } = useLogic({ song: song })

  return (
    <Container>
      <Img src={song.image} />
      <TextContainer>
        <SongTittle>{song.name}</SongTittle>
        <Text $variant='artist'>{song.author.name}</Text>
        <Text>{song.description}</Text>
        <ButtonContainer>
          <PlayButton onClick={handlePlayer}>
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
