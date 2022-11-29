import { Input, SearchButton, Form } from './styles'
import { ReactComponent as LogoButton } from '../../assets/images/icon-search.svg'
import { Filter } from './types'

export const SearchBar = ({ input, handleChange }: Filter) => {
  return (
    <Form>
      <Input
        type='text'
        placeholder='Search by tittle, tag...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <SearchButton>
        <LogoButton />
      </SearchButton>
    </Form>
  )
}
