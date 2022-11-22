import { Wrapper, Tittle, SubTittle } from './styles'
import { SearchBar } from '../../components/SearchBar/index'
import { CardSong } from '../../components/CardSong'
import { useQuery, gql } from '@apollo/client'
import { SongTypes } from './types'
import { useState } from 'react'

// ¿Por qué no puedo invocar esta query dentro del componente Explore?

const SONGS_QUERY = gql`
  {
    songs {
      songs {
        audio {
          url
          id
        }
        description
        genre
        id
        image
        name
        author {
          name
          id
          description
        }
      }
    }
  }
`

export default function Explore() {
  const { data, loading, error } = useQuery(SONGS_QUERY)
  const [filter, setFilter] = useState('')

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>

  return (
    <Wrapper>
      <Tittle>Explore</Tittle>
      <SearchBar filter={filter} handleChange={setFilter} />
      <SubTittle>Featured songs</SubTittle>
      {data.songs.songs.map((song: SongTypes) => (
        <CardSong song={song} key={song.id} />
      ))}
    </Wrapper>
  )
}
