import { CacheFav, SongTypes, HandleGenre } from './types'

//handleCacheFav search in the LocalStorage if the user already has some
// favorite songs. If she has, it return in the var cacheFav which are those songs
// If not, it initializes an array in order to save future songs in LocalStorage
export const handleCacheFav = () => {
  let cacheFav: CacheFav = []

  localStorage.getItem('favorite') === null
    ? localStorage.setItem('favorite', JSON.stringify([]))
    : (cacheFav = JSON.parse(localStorage.getItem('favorite') as string))

  return cacheFav
}

// handleGenre its a simple function that transforms ROCK_METAL=>rock metal
export const handleGenre: HandleGenre = (genre: SongTypes['genre']) => {
  const genreArray = genre.split('')

  for (let i = 0; i < genreArray.length; i++) {
    genreArray[i] === '_' && genreArray.splice(i, 1, ' ')
  }

  const genreString = genreArray.join('')
  const genreProcessed = genreString.toLowerCase()

  return genreProcessed
}