import { ReactComponent as Z1Logo } from '../../assets/images/z1-logo.svg'
import './styles.scss'

export default function Navbar() {
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
            <div>home</div>
          </a>
        </li>
        <li>
          <a href='./explore'>
            <div>Explore</div>
          </a>
        </li>
      </ul>
    </div>
  )
}
