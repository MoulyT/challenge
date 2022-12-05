import { makeVar } from '@apollo/client'

type SongTypes = {
  audio: { id: number; url: string }
  author: { description: string; id: number; name: string }
  description: string
  genre: string
  id: number
  image: string
  name: string
}

const myReactiveSongs = makeVar<SongTypes[]>([])

export default myReactiveSongs
