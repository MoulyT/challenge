import { ReactComponent as Z1Logo } from '../../assets/images/z1-logo.svg'

import {
  NavbarDiv,
  NavbarHeader,
  NavbarUserName,
  NavbarMail,
  NavbarList,
  NavbarLink,
  NavbarDivLink,
  StyledExploreLogo,
  StyledHomeLogo,
} from './styles'
import { Separator } from '../Separator/index'
import { PATHS } from '../../global/constants/paths'
import { activeLink } from './logic'

export default function Navbar() {
  return (
    <NavbarDiv>
      <NavbarHeader>
        <Z1Logo />
        <div>
          <NavbarUserName>Z1 Digital Studio</NavbarUserName>
          <NavbarMail>mouly@sample.com</NavbarMail>
        </div>
      </NavbarHeader>
      <Separator />
      <NavbarList>
        <li>
          <NavbarLink href={PATHS.HOME}>
            <NavbarDivLink $isActive={activeLink(PATHS.HOME)}>
              <StyledHomeLogo />
              Home
            </NavbarDivLink>
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href={PATHS.EXPLORE}>
            <NavbarDivLink $isActive={activeLink(PATHS.EXPLORE)}>
              <StyledExploreLogo />
              Explore
            </NavbarDivLink>
          </NavbarLink>
        </li>
      </NavbarList>
    </NavbarDiv>
  )
}
