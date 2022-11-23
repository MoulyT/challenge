export type propType = {
  $variant?: string
}

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
  song: SongTypes
}

export type CacheFav = number[]

export type LocalStorage = number[]

export type HandleGenre= (arg: string) => string