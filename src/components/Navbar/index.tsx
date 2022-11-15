import { ReactComponent as Z1Logo } from '../../assets/images/z1-logo.svg'
import { ReactComponent as HomeLogo } from '../../assets/images/icon-home.svg'
import { ReactComponent as ExploreLogo } from '../../assets/images/icon-explore.svg'
import {
  NavbarDiv,
  NavbarHeader,
  NavbarUserName,
  NavbarMail,
  NavbarList,
  NavbarLink,
  NavbarDivLink,
} from './styles'

export default function Navbar() {
  console.log('do not forget dot line of navbar')
  // const currentPath: string = window.location.pathname
  // let isPath:boolean
  return (
    <NavbarDiv>
      <NavbarHeader>
        <Z1Logo />
        <div>
          <NavbarUserName>Z1 Digital Studio</NavbarUserName>
          <NavbarMail>mouly@sample.com</NavbarMail>
        </div>
      </NavbarHeader>
      <NavbarList>
        <li>
          <NavbarLink href='./'>
            <NavbarDivLink>
              <HomeLogo />
              Home
            </NavbarDivLink>
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href='./explore'>
            <NavbarDivLink>
              <ExploreLogo />
              Explore
            </NavbarDivLink>
          </NavbarLink>
        </li>
      </NavbarList>
    </NavbarDiv>
  )
}

{
  /* // <div className='navbar'>
//   <div className='navbar__header'>
//     <Z1Logo />
//     <div className='navbar__user'>
//       <p className='navbar__username'>Z1 Digital Studio</p>
//       <p className='navbar__mail'>mouly@sample.com</p>
//     </div>
//   </div>
//   <ul>
//     <li>
//       <a href='./'>
//         <div
//           className={currentPath === '/' ? 'navbar__link--active navbar__link' : 'navbar__link'}
//         >
//           <HomeLogo className='navbar__icon' /> Home
//         </div>
//       </a>
//     </li>
//     <li>
//       <a href='./explore'>
//         <div
//           className={
//             currentPath === '/explore' ? 'navbar__link--active navbar__link' : 'navbar__link'
//           }
//         >
//           <ExploreLogo className='navbar__icon' />
//           Explore
//         </div>
//       </a>
//     </li>
//   </ul>
// </div> */
}
