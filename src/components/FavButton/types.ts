export type FavTypes = {
  handleFav: (songId: number) => void
  isFav: boolean
  songId: number
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

export type SetIsFav = (arg: boolean) => void
