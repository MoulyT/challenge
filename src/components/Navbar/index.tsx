import { ReactComponent as Z1Logo } from '../../assets/images/z1-logo.svg'
import { ReactComponent as HomeLogo } from '../../assets/images/icon-home.svg'
import { ReactComponent as ExploreLogo } from '../../assets/images/icon-explore.svg'
import './styles.scss'

export default function Navbar() {
  console.log('do not forget dot line of navbar')
  const currentPath: string = window.location.pathname

  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <Z1Logo />
        <div className='navbar__user'>
          <p className='navbar__username'>Z1 Digital Studio</p>
          <p className='navbar__mail'>mouly@sample.com</p>
        </div>
      </div>
      <ul>
        <li>
          <a href='./'>
            <div
              className={currentPath === '/' ? 'navbar__link--active navbar__link' : 'navbar__link'}
            >
              <HomeLogo className='navbar__icon' /> Home
            </div>
          </a>
        </li>
        <li>
          <a href='./explore'>
            <div
              className={
                currentPath === '/explore' ? 'navbar__link--active navbar__link' : 'navbar__link'
              }
            >
              <ExploreLogo className='navbar__icon' />
              Explore
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
