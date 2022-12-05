import { InfoContainer, Heart, AlbumImg, AlbumInfo, Text } from './styles'
import HeartLogo from '../../assets/images/fav-icon-active.png'
import { Props } from './types'

export const PlayerInfo = ({ name, author, imgURL }: Props) => {
  return (
    <InfoContainer>
      <Heart src={HeartLogo} alt='Heart filled' />
      <AlbumImg src={imgURL} alt={name} />
      <AlbumInfo>
        <Text $variant='song-name'>{name}</Text>
        <Text $variant='artist'>{author}</Text>
      </AlbumInfo>
    </InfoContainer>
  )
}
