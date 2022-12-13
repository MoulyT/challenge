import { InfoContainer, Heart, AlbumImg, AlbumInfo, Text } from './styles'
import HeartLogo from '../../assets/images/fav-icon-active.png'
import HeartVoidLogo from '../../assets/images/fav-icon-inactive.png'
import { Props } from './types'

export const PlayerInfo = ({ name, author, imgURL, fav }: Props) => {
  return (
    <InfoContainer>
      {fav ? (
        <Heart src={HeartLogo} alt='Heart filled' />
      ) : (
        <Heart src={HeartVoidLogo} alt='Heart void' />
      )}

      <AlbumImg src={imgURL} alt={name} />
      <AlbumInfo>
        <Text $variant='song-name'>{name}</Text>
        <Text $variant='artist'>{author}</Text>
      </AlbumInfo>
    </InfoContainer>
  )
}
