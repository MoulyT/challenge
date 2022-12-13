import { useEffect, useRef, useState } from 'react'

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
  Audio,
} from './styles'
import { FavButton } from '../FavButton'
import PlayIcon from '../../assets/images/play-button.png'

// import logic

import { useLogic } from './logic'

// import types

import { Props } from './types'

export const CardSong = ({ song }: Props) => {
  const audioPlayer = useRef<HTMLAudioElement>(null)

  const { handleFav, handleGenre, isFav, handlePlayer } = useLogic({ song: song })

  const [duration, setDuration] = useState(0)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  useEffect(() => {
    setLoading('Loading')
    try {
      let response = audioPlayer.current?.duration
      while (isNaN(response)) {
        response = 0
        setDuration(response)
      }
      setDuration(response)
      setLoading('Loaded')
    } catch (e) {
      setError(e)
    }
  }, [audioPlayer.current?.duration, duration, audioPlayer.current])

  return (
    <Container>
      <Audio ref={audioPlayer} src={song.audio.url} preload='metadata' />
      <Img src={song.image} />
      <TextContainer>
        <SongTittle>{song.name}</SongTittle>
        <Text $variant='artist'>{song.author.name}</Text>
        <Text>{song.description}</Text>
        <ButtonContainer>
          <PlayButton onClick={handlePlayer}>
            <PlayImg src={PlayIcon} />
          </PlayButton>
          <Text $variant='song-duration'>{duration}</Text>
          <Genre>{handleGenre(song.genre)}</Genre>
        </ButtonContainer>
      </TextContainer>
      <FavButton handleFav={handleFav} isFav={isFav >= 0} songId={song.id}></FavButton>
    </Container>
  )
}
