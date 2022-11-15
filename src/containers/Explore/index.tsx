import { Wrapper, Tittle, SubTittle } from './styles'
import { SearchBar } from '../../components/SearchBar/index'

export default function Explore() {
  return (
    <Wrapper>
      <Tittle>Explore</Tittle>
      <SearchBar />
      <SubTittle>Featured songs</SubTittle>
    </Wrapper>

    // <div className='explore_wrapper'>
    //   <h1>Explore</h1>
    // </div>
  )
}
