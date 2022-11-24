import { Wrapper, Tittle, SubTittle } from './styles'
import { SearchBar } from '../../components/SearchBar/index'
import { CardSong } from '../../components/CardSong'
import { useQuery, gql } from '@apollo/client'
import { SongTypes } from './types'
import { useState } from 'react'

import { useDebounce } from 'use-debounce'
import { CardLoading } from '../../components/CardLoading'

const SONGS_QUERY = gql`
  query MyQuery($debouncedFilter: String) {
    songs(search: $debouncedFilter, sort: { order: ASC }) {
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
  // SearchBar is an controlled form
  const [filter, setFilter] = useState('')

  // We don't want to call the API for each stroke, so we call the API
  // using debouncedFilter instead of filter
  const debouncedFilterObj = useDebounce(filter, 650)
  const debouncedFilter = debouncedFilterObj[0]
  const { data, loading, error } = useQuery(SONGS_QUERY, {
    variables: { debouncedFilter },
  })

  if (error) return <pre>{error.message}</pre> // Se puede mejorar el cómo se muestra el error

  return (
    <Wrapper>
      <Tittle>Explore</Tittle>
      <SearchBar filter={filter} handleChange={setFilter} />
      <SubTittle>Featured songs</SubTittle>
      {loading ? (
        <CardLoading />
      ) : (
        data.songs.songs.map((song: SongTypes) => <CardSong song={song} key={song.id} />)
      )}
    </Wrapper>
  )
}
