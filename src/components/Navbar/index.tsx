import Z1Logo from '../../assets/images/z1-logo.svg'
import IconHome from '../../assets/images/icon-home.png'
import IconExplore from '../../assets/images/icon-explore.png'

import {
  NavbarDiv,
  NavbarHeader,
  NavbarUserName,
  NavbarMail,
  NavbarList,
  NavbarLink,
  NavbarDivLink,
  StyledLogo,
  Logo,
} from './styles'
import { Separator } from '../Separator/index'
import { PATHS } from '../../global/constants/paths'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <NavbarDiv>
        <NavbarHeader>
          <Logo src={Z1Logo} alt='Z1' />
          <div>
            <NavbarUserName>Z1 Digital Studio</NavbarUserName>
            <NavbarMail>mouly@sample.com</NavbarMail>
          </div>
        </NavbarHeader>
        <Separator />
        <NavbarList>
          <li>
            <NavbarLink to={PATHS.HOME}>
              <NavbarDivLink>
                <StyledLogo src={IconHome} alt='Home' />
                Home
              </NavbarDivLink>
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to={PATHS.EXPLORE}>
              <NavbarDivLink>
                <StyledLogo src={IconExplore} alt='Explore' />
                Explore
              </NavbarDivLink>
            </NavbarLink>
          </li>
        </NavbarList>
      </NavbarDiv>
      <Outlet />
    </>
  )
}
