import { Input, SearchButton, Form } from './styles'
import { ReactComponent as LogoButton } from '../../assets/images/icon-search.svg'

export const SearchBar = () => (
  <Form>
    <Input type='text' placeholder='Search by tittle tag...' />

    <SearchButton>
      <LogoButton />
    </SearchButton>
  </Form>
)
