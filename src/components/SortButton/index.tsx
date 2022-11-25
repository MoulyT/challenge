import { Container, SubTittle, Form, DropDown, DropDownItem } from './styles'
import { HandleChange } from './types'

export const SortButton = ({ handleChange }: HandleChange) => (
  <Container>
    <SubTittle>Featured Songs</SubTittle>

    <Form>
      <DropDown name='sort' onChange={(e) => handleChange(e.target.value)}>
        <DropDownItem value='name'>Sort by: name</DropDownItem>
        <DropDownItem value='author.name'>Sort by: author</DropDownItem>
        <DropDownItem value='genre.name'>Sort by: genre</DropDownItem>
      </DropDown>
    </Form>
  </Container>
)
