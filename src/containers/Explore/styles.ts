import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  padding: 0 2rem;
  margin: 2.5rem 2.5rem 0 4rem;
  width: 100%;
`
export const Tittle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

export const SubTittle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`
