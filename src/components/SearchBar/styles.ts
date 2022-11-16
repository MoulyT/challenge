import styled from 'styled-components'

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
export const SearchButton = styled.button`
  position: absolute;

  top: 9px;

  border: none;
  background-color: transparent;
`
