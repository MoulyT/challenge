export type FavTypes = {
  handleFav: (songId: number, isFav: boolean, setIsFav: SetIsFav) => void
  isFav: boolean
  setIsFav: React.Dispatch<React.SetStateAction<boolean>>
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
