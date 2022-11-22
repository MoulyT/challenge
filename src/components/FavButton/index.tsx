import { Button } from './styles'
import { ReactComponent as HeartEmpty } from '../../assets/images/fav-icon-inactive.svg'
import { ReactComponent as HeartFilled } from '../../assets/images/fav-icon-active.svg'
import { FavTypes } from './types'

export const FavButton = ({ handleFav, isFav }: FavTypes) => {
  return <Button onClick={handleFav}>{isFav ? <HeartFilled /> : <HeartEmpty />}</Button>
}
