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

export const CardLoading = () => {
  return (
    <Container>
      <Img />
      <TextContainer>
        <SongTittle>Loading</SongTittle>
        <Text $variant='artist'></Text>
        <Text></Text>
        <ButtonContainer>
          <PlayButton>
            <PlayIcon />
          </PlayButton>
          <Text $variant='song-duration'></Text>
          <Genre></Genre>
        </ButtonContainer>
      </TextContainer>
    </Container>
  )
}
