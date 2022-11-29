export type FavTypes = {
  handleFav: () => void
  isFav: boolean
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
