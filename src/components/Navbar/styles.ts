import styled from 'styled-components'

export const NavbarDiv = styled.div`
  width: 15rem;

  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.navBackground};
`
export const NavbarHeader = styled.div`
  display: flex;
  column-gap: 0.5rem;

  padding: 24px 12px 16px 16px;

  border-bottom: ${({ theme }) => theme.colors.navDottedLine};
`
export const NavbarUserName = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 133.3333%;
`
export const NavbarMail = styled.p`
  font-size: 0.75rem;
  line-height: 100%;
`

export const NavbarList = styled.ul`
  padding: 1rem 0.75rem;

  list-style: none;

  font-size: 14px;
`
export const NavbarLink = styled.a`
  color: inherit;
  text-decoration: none;
`

export const NavbarDivLink = styled.div`
  padding: 12px;
  margin-bottom: 0.25rem;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.navDottedLine};
`
