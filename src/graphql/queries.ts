import { gql } from '@apollo/client'

export const SONGS_QUERY = gql`
  query MyQuery($debouncedFilter: String, $sort: String!) {
    songs(search: $debouncedFilter, sort: { key: $sort, order: ASC }) {
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
