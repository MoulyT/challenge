import { Wrapper, Tittle, SubTittle } from './styles'
import { SearchBar } from '../../components/SearchBar/index'
import { CardSong } from '../../components/CardSong'

export default function Explore() {
  return (
    <Wrapper>
      <Tittle>Explore</Tittle>
      <SearchBar />
      <SubTittle>Featured songs</SubTittle>
      <CardSong />
    </Wrapper>
  )
}
