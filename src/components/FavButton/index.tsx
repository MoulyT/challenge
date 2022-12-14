import { Button, HeartImg } from './styles'
import HeartEmpty from '../../assets/images/fav-icon-inactive.png'
import HeartFilled from '../../assets/images/fav-icon-active.png'
import { FavTypes } from './types'

export const FavButton = ({ handleFav, isFav, songId }: FavTypes) => {
  return (
    <Button onClick={() => handleFav(songId)}>
      {!isFav ? (
        <HeartImg src={HeartEmpty} alt='Heart empty' />
      ) : (
        <HeartImg src={HeartFilled} alt='Heart filled' />
      )}
    </Button>
  )
}
