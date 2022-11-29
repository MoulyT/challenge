import {
  Container,
  LeftContainer,
  CenterContainer,
  RightContainer,
  AlbumImg,
  AlbumInfo,
  Text,
} from './styles'
import { ReactComponent as PrevSong } from '../../assets/images/prev-song.svg'
import { ReactComponent as NextSong } from '../../assets/images/next-song.svg'
// import { ReactComponent as Pause } from '../../assets/images/pause.svg'
// import { ReactComponent as Play } from '../../assets/images/play-button.svg'

// import { FavButton } from '../FavButton'

export const Reproductor = () => {
  return (
    <Container>
      <LeftContainer>
        {/* <FavButton handleFav={} isFav={} /> */}
        <AlbumImg />
        <AlbumInfo>
          <Text $variant='song-name'></Text>
          <Text $variant='artist'></Text>
        </AlbumInfo>
      </LeftContainer>
      <CenterContainer>
        <PrevSong />
        {/* {isPlaying ? <Pause /> : <Play />} */}
        <NextSong />
      </CenterContainer>
      <RightContainer></RightContainer>
    </Container>
  )
}
