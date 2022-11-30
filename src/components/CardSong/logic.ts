import { useState } from 'react'
import { CacheFav, SongTypes, HandleGenre, IsFav, SetIsFav, Props } from './types'
import { gql, makeVar, useQuery, useReactiveVar } from '@apollo/client'
import myReactiveFav from '../../graphql/variables/fav'

// There are 3 functions in this doc: handleCacheFav, handleFav, handleGenre

// handleCacheFav:
// search in the LocalStorage if the user already has some favorite songs. If she has, it return in the var cacheFav
// which are those songs.If not, it initializes an array in order to save future songs in LocalStorage

export const useLogic = ({ song }: Props) => {
  const [isFav, setIsFav] = useState(-1)
  const favList = useReactiveVar(myReactiveFav)

  const handleCacheFav = () => {
    let cacheFav: CacheFav = []

    localStorage.getItem('favorite') === null
      ? localStorage.setItem('favorite', JSON.stringify([]))
      : (cacheFav = JSON.parse(localStorage.getItem('favorite') as string))

    console.log(
      cacheFav,
      'handleCache: ',
      cacheFav.findIndex((e) => e === song.id),
    )

    const position = cacheFav.findIndex((e) => e === song.id)

    if (position >= 0) {
      setIsFav(position)
    } else {
      setIsFav(-1)
    }
  }

  // If you push the fav button you set isFav to !isFav and push/remove the song from local Storage
  function handleFav(songId: number) {
    if (isFav >= 0) {
      const position = favList.findIndex((e) => e === songId)
      myReactiveFav(favList.splice(position, 1))

      //myReactiveFav(newArray)
      localStorage.setItem('favorite', JSON.stringify(favList))
      setIsFav(-1)
    } else {
      myReactiveFav([...favList, songId])
      localStorage.setItem('favorite', JSON.stringify([...favList, songId]))
      setIsFav(favList.length - 1)
    }

    return isFav
  }

  // handleGenre its a simple function that transforms ROCK_METAL=>rock metal
  const handleGenre: HandleGenre = (genre: SongTypes['genre']) => {
    const genreArray = genre.split('')

    for (let i = 0; i < genreArray.length; i++) {
      genreArray[i] === '_' && genreArray.splice(i, 1, ' ')
    }

    const genreString = genreArray.join('')
    const genreProcessed = genreString.toLowerCase()

    return genreProcessed
  }

  return {
    handleFav,
    handleGenre,
    isFav,
    setIsFav,
    handleCacheFav,
  }
}
