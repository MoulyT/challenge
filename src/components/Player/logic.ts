import { useRef, useState, useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'

// import reactive vars
import myReactiveSongs from '../../graphql/variables/songs'
import myReactiveCurrentSong from '../../graphql/variables/currentSong'
import myReactiveFav from '../../graphql/variables/fav'

// import types
import { CurrentSong, Range, Seconds } from './types'

export const useLogicPlayer = (currentSong: CurrentSong) => {
  // states
  const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const [volume, setVolume] = useState(100)
  const arrayFav = useReactiveVar(myReactiveFav)

  //Refs
  const audioPlayer = useRef<HTMLAudioElement>(null) //ref <audio/> tag

  // Is this song a Fav
  // ===============================================================================
  const isFav = (id: number) => {
    return arrayFav.findIndex((e) => e === id) > -1
  }
  //
  // ===============================================================================

  // Play, next and prev buttons
  // ===============================================================================

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (audioPlayer.current !== null) {
      isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()
    }
  }

  const nextSong = () => {
    !isPlaying && setIsPlaying(true)

    // In order to loop the song list
    currentSong === myReactiveSongs().length - 1
      ? myReactiveCurrentSong(0)
      : myReactiveCurrentSong(myReactiveCurrentSong() + 1)
  }

  const prevSong = () => {
    !isPlaying && setIsPlaying(true)

    // In order to loop the song list
    currentSong === 0
      ? myReactiveCurrentSong(myReactiveSongs().length - 1)
      : myReactiveCurrentSong(myReactiveCurrentSong() - 1)
  }
  //
  //
  // ================================================================================

  // This effect allows to read the duration when the metadata of the song loads
  useEffect(() => {
    setDuration(audioPlayer?.current?.duration as number)
  }, [audioPlayer.current?.onloadedmetadata, audioPlayer.current?.readyState])
  //
  //
  // ==============================================================================

  // Time has to be formatted.Example: 0->00:00, 126->02:06
  const formatTime = (secs: Seconds) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }
  const durationFormatted = formatTime(duration)
  const currentTimeFormatted = formatTime(currentTime)
  //
  //
  //  ==============================================================================

  // The progress bar needs % of progress
  const range = Math.floor((currentTime * 100) / duration)

  // REVISAR. no se que mierda hago aquí. setCurrenTime dos veces?? en el momento de escribir esto se lee correctamente el current time pero no se modifica moviendo el input manualmente
  const handleCurrentTime = () => {
    setCurrentTime(audioPlayer.current?.currentTime as number)
  }

  const handleProgressBar = (range: Range) => {
    const seconds = (range * duration) / (currentTime * 100)
    setCurrentTime(seconds)
  }
  //
  //
  //  ==============================================================================

  // Speed of the song
  const handleSpeed = () => {
    setSpeed(speed + 0.5)
  }
  useEffect(() => {
    audioPlayer.current.playbackRate = speed
  }, [speed, audioPlayer.current?.readyState])
  //
  //
  //  ==============================================================================

  // Hover Volume
  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  //
  //
  //  ==============================================================================

  // Volume
  const handleVolume = (arg: number) => {
    setVolume(arg)
  }
  useEffect(() => {
    audioPlayer.current.volume = volume / 100
    console.log('🚀 ~ file: logic.ts:128 ~ useEffect ~ volume', volume)
  }, [volume, audioPlayer.current?.readyState])
  //
  //
  //  ==============================================================================

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
    speed,
    handleSpeed,
    isHovered,
    handleHover,
    handleVolume,
    volume,
    isFav,
  }
}
