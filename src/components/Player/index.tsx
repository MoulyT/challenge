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

  const {
    handlePlay,
    nextSong,
    prevSong,
    audioPlayer,
    isPlaying,
    durationFormatted,
    currentTimeFormatted,
    range,
    handleCurrentTime,
    handleProgressBar,
    speed,
    handleSpeed,
  } = useLogicPlayer(currentSong)

  return (
    <>
      {songs === undefined ? null : (
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
            handleCurrentTime={handleCurrentTime}
            currentTime={currentTimeFormatted}
          />
          <PlayerOptions
            duration={durationFormatted}
            currentTime={currentTimeFormatted}
            range={range}
            handleProgressBar={handleProgressBar}
            speed={speed}
            handleSpeed={handleSpeed}
          />
        </Container>
      )}
    </>
  )
}
