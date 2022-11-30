// import components
//===================

import { Wrapper, Tittle } from './styles'
import { SearchBar } from '../../components/SearchBar/index'
import { CardSong } from '../../components/CardSong'
import { CardLoading } from '../../components/CardLoading'
import { SortButton } from '../../components/SortButton'

// import logic
// ===================

import { SONGS_QUERY } from '../../graphql/queries'

import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

//import types
// ===================
import { SongTypes } from './types'

//########################################################

export default function Explore() {
  // Sort menu as controlled form
  const [sort, setSort] = useState('name')

  // SearchBar is an controlled form
  const [filter, setFilter] = useState('')

  // We don't want to call the API for each stroke, so we call the API
  // using debouncedFilter instead of filter
  const debouncedFilterObj = useDebounce(filter, 650)
  const debouncedFilter = debouncedFilterObj[0]
  const { data, loading, error } = useQuery(SONGS_QUERY, {
    variables: { debouncedFilter, sort },
  })
  if (error) return <pre>{error.message}</pre> // Se puede mejorar el cómo se muestra el error
  typeof debouncedFilter
  return (
    <Wrapper>
      <Tittle>Explore</Tittle>
      <SearchBar input={filter} handleChange={setFilter} />
      <SortButton handleChange={setSort} />
      {loading ? (
        <CardLoading />
      ) : (
        data.songs.songs.map((song: SongTypes) => <CardSong song={song} key={song.id} />)
      )}
    </Wrapper>
  )
}
