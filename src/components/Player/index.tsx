import { Container } from './styles'
// components
import { PlayerInfo } from '../PlayerInfo'
import { PlayerButtons } from '../PlayerButtons'
import { PlayerOptions } from '../PlayerOptions'

// reactive vars
import myReactiveSongs from '../../graphql/variables/songs'
import myReactiveCurrentSong from '../../graphql/variables/currentSong'
import { useReactiveVar } from '@apollo/client'
import { useLogicPlayer } from './logic'

export const Player = () => {
  const songs = useReactiveVar(myReactiveSongs)
  const currentSong = useReactiveVar(myReactiveCurrentSong)

  const { handlePlay, nextSong, prevSong, audioPlayer, isPlaying } = useLogicPlayer(currentSong)

  return (
    <Container>
      <PlayerInfo
        name={songs[currentSong].name}
        author={songs[currentSong].author.name}
        imgURL={songs[currentSong].image}
      />
      <PlayerButtons
        currentSong={currentSong}
        audioURL={songs[currentSong].audio.url}
        prev={prevSong}
        play={handlePlay}
        next={nextSong}
        audioRef={audioPlayer}
        isPlaying={isPlaying}
      />
      <PlayerOptions />
    </Container>
  )
}
