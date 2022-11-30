import { Input, SearchButton, Form } from './styles'
import IconSearch from '../../assets/images/icon-search.png'
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

      <SearchButton src={IconSearch} alt='Search bar' />
    </Form>
  )
}
