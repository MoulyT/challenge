import { useRef, useState } from 'react'
import myReactiveSongs from '../../graphql/variables/songs'
import myReactiveCurrentSong from '../../graphql/variables/currentSong'
import { CurrentSong } from './types'

export const useLogicPlayer = (currentSong: CurrentSong) => {
  // states
  const [isPlaying, setIsPlaying] = useState(true)

  //Refs
  const audioPlayer = useRef<HTMLAudioElement>(null) //ref <audio/> tag

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (audioPlayer.current !== null) {
      isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()
    }
  }

  const nextSong = () => {
    currentSong === myReactiveSongs().length - 1
      ? myReactiveCurrentSong(0)
      : myReactiveCurrentSong(myReactiveCurrentSong() + 1)
  }

  const prevSong = () => {
    currentSong === 0
      ? myReactiveCurrentSong(myReactiveSongs().length - 1)
      : myReactiveCurrentSong(myReactiveCurrentSong() - 1)
  }

  return { handlePlay, nextSong, prevSong, audioPlayer, isPlaying }
}
