import { useRef, useState } from 'react'
import myReactiveSongs from '../../graphql/variables/songs'
import myReactiveCurrentSong from '../../graphql/variables/currentSong'
import { CurrentSong, Range, Seconds } from './types'

export const useLogicPlayer = (currentSong: CurrentSong) => {
  // states
  const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  //Refs
  const audioPlayer = useRef<HTMLAudioElement>(null) //ref <audio/> tag

  const handlePlay = () => {
    setDuration(audioPlayer?.current?.duration as number)
    setIsPlaying(!isPlaying)
    if (audioPlayer.current !== null) {
      isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()
    }
  }

  const nextSong = () => {
    setDuration(audioPlayer?.current?.duration as number)
    !isPlaying && setIsPlaying(!isPlaying)
    currentSong === myReactiveSongs().length - 1
      ? myReactiveCurrentSong(0)
      : myReactiveCurrentSong(myReactiveCurrentSong() + 1)
  }

  const prevSong = () => {
    setDuration(audioPlayer?.current?.duration as number)
    !isPlaying && setIsPlaying(!isPlaying)
    currentSong === 0
      ? myReactiveCurrentSong(myReactiveSongs().length - 1)
      : myReactiveCurrentSong(myReactiveCurrentSong() - 1)
  }

  // time has to be formatted.Example: 0->00:00, 126->02:06

  const formatTime = (secs: Seconds) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }
  const durationFormatted = formatTime(duration)
  const currentTimeFormatted = formatTime(currentTime)

  // const unFormatTime = (time: Time) => {
  //   const min = parseInt(time.slice(0, 2))
  //   const seg = parseInt(time.slice(3))
  //   const seconds = min * 60 + seg
  //   return seconds
  // }

  // The progress bar needs % of progress
  const range = Math.floor((currentTime * 100) / duration)

  const handleCurrentTime = () => {
    setCurrentTime(audioPlayer.current?.currentTime as number)
  }

  const handleProgressBar = (range: Range) => {
    const seconds = (range * duration) / (currentTime * 100)
    setCurrentTime(seconds)
  }

  return {
    handlePlay,
    nextSong,
    prevSong,
    audioPlayer,
    isPlaying,
    duration,
    durationFormatted,
    currentTimeFormatted,
    range,
    handleCurrentTime,
    setCurrentTime,
    handleProgressBar,
  }
}
