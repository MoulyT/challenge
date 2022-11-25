import styled from 'styled-components/macro'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  max-width: 1440px;

  background-color: ${({ theme }) => theme.colors.primary};
`
