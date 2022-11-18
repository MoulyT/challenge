import {
  ButtonContainer,
  Img,
  Container,
  PlayButton,
  SongTittle,
  Text,
  TextContainer,
  Genre,
} from './styles'
import { ReactComponent as PlayIcon } from '../../assets/images/play-button.svg'

export const CardSong = () => (
  <Container>
    <Img />
    <TextContainer>
      <SongTittle>Baby One More Time</SongTittle>
      <Text $variant='artist'>Ed Sheeran</Text>
      <Text>
        Faced with the trend of making the user spend as much time possible in an app our goal at Z1
        is to create experiences that add up and that are built...
      </Text>

      <ButtonContainer>
        <PlayButton>
          <PlayIcon />
        </PlayButton>
        <Text $variant='song-duration'>5 min</Text>
        <Genre>Rock</Genre>
      </ButtonContainer>
    </TextContainer>
  </Container>
)
