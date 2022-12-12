import React from 'react'

export type SongTypes = {
  audio: { id: number; url: string }
  author: { description: string; id: number; name: string }
  description: string
  genre: string
  id: number
  image: string
  name: string
}

export type Props = {
  currentSong: number
  audioURL: string
  play: () => void
  next: () => void
  prev: () => void
  audioRef: React.RefObject<HTMLAudioElement>
  isPlaying: boolean
  handleCurrentTime: () => void
  currentTime: string
}
