import { InfoContainer, Heart, AlbumImg, AlbumInfo, Text } from './styles'
import HeartLogo from '../../assets/images/fav-icon-active.png'

export const PlayerInfo = () => {
  return (
    <InfoContainer>
      <Heart src={HeartLogo} alt='Heart filled' />
      <AlbumImg />
      <AlbumInfo>
        <Text $variant='song-name'>Song name</Text>
        <Text $variant='artist'>Artist</Text>
      </AlbumInfo>
    </InfoContainer>
  )
}
