import { useEffect, useState } from 'react'
import { CacheFav, SongTypes, HandleGenre, Props } from './types'
import myReactiveFav from '../../graphql/variables/fav'
import myReactivePlayer from '../../graphql/variables/player'
import myReactiveCurrentSong from '../../graphql/variables/currentSong'
import myReactiveSongs from '../../graphql/variables/songs'

// There are 3 functions in this custom hook: handleCacheFav, handleFav, handleGenre

export const useLogic = ({ song }: Props) => {
  const [isFav, setIsFav] = useState(-1)
  const id = song.id
  // handleCacheFav:
  // search in the LocalStorage if the user already has some favorite songs. If she has, it return in the var cacheFav
  // which are those songs.If not, it initializes an array in order to save future songs in LocalStorage.
  // Then save it in the reactive var

  const handleCacheFav = () => {
    let cacheFav: CacheFav = []

    localStorage.getItem('favorite') === null
      ? localStorage.setItem('favorite', JSON.stringify([]))
      : (cacheFav = JSON.parse(localStorage.getItem('favorite') as string))

    const position = cacheFav.findIndex((e) => e === song.id)

    if (position >= 0) {
      setIsFav(position)
    }
    myReactiveFav(cacheFav)
  }

  useEffect(() => {
    handleCacheFav()
  }, [])

  // If you push the fav button you set isFav to !isFav and push/remove the song from local Storage
  function handleFav(songId: number) {
    if (isFav >= 0) {
      const array = myReactiveFav()
      array.splice(isFav, 1)
      myReactiveFav(array)

      localStorage.setItem('favorite', JSON.stringify(myReactiveFav()))
      setIsFav(-1)
    } else {
      myReactiveFav([...myReactiveFav(), songId])
      localStorage.setItem('favorite', JSON.stringify(myReactiveFav()))
      setIsFav(myReactiveFav().length - 1)
    }
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

  // using the id it retrieves the position in the reproduction qeu
  const idToPosition = (id: number) => {
    let position
    for (let i = 0; i < myReactiveSongs().length; i++) {
      if (myReactiveSongs()[i].id === id) position = i
    }

    return position
  }

  const handlePlayer = () => {
    !myReactivePlayer() && myReactivePlayer(true) // This doesn't work: myReactivePlayer(!myReactivePlayer), dunno why

    myReactiveCurrentSong(idToPosition(id))
  }

  return {
    handleFav,
    handleGenre,
    isFav,
    setIsFav,
    handleCacheFav,
    handlePlayer,
  }
}
