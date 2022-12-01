import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 104px;
  width: 100vw;

  margin-bottom: -24px;
  padding: 16px 32px 40px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 22px;
`
