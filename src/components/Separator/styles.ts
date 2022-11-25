import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  height: 1rem;

  background-image: radial-gradient(
    ${({ theme }) => theme.colors.navDottedLine} 1px,
    transparent 1px
  );
  background-repeat: repeat-x;
  background-size: 1rem 1rem;
  background-position-x: 0px;
`
