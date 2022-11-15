import styled, { ThemeConsumer } from 'styled-components'

export const Input = styled.input`
  padding: 1rem;

  max-width: 1024px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.navDottedLine};
`
