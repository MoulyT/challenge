import { Wrapper, Tittle, SubTittle } from './styles'
import { SearchBar } from '../../components/SearchBar/index'
import { CardSong } from '../../components/CardSong'
import { useQuery, gql } from '@apollo/client'

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

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>

  return (
    <Wrapper>
      <Tittle>Explore</Tittle>
      <SearchBar />
      <SubTittle>Featured songs</SubTittle>
      {data.songs.songs.map((song) => (
        <CardSong song={song} key={song.id} />
      ))}
    </Wrapper>
  )
}
