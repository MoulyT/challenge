import styled from 'styled-components/macro'

export const Form = styled.form`
  display: flex;

  position: relative;

  margin-bottom: 2.5rem;
`

export const Input = styled.input`
  padding: 1rem;
  padding-left: 2.5rem;

  max-width: 1024px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.navDottedLine};
`
export const SearchButton = styled.img`
  position: absolute;

  top: 15px;
  left: 11px;
`
