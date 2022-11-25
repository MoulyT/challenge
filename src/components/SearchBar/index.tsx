import { Input, SearchButton, Form } from './styles'
import { ReactComponent as LogoButton } from '../../assets/images/icon-search.svg'
import { Filter } from './types'

export const SearchBar = ({ filter, handleChange }: Filter) => {
  return (
    <Form>
      <Input
        type='text'
        placeholder='Search by tittle, tag...'
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
      />

      <SearchButton>
        <LogoButton />
      </SearchButton>
    </Form>
  )
}
