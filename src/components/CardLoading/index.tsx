import { Img, Container, SongTittle, Text, TextContainer } from './styles'

export const CardLoading = () => {
  return (
    <Container>
      <Img />
      <TextContainer>
        <SongTittle>Loading</SongTittle>
        <Text $variant='artist'></Text>
      </TextContainer>
    </Container>
  )
}
