import logo from '../../assets/logo.jpg'
import './Nav.scss'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from 'react-icons/rx'

interface Props {
  handleActive: () => void
}

const Nav: React.FC<Props> = ({ handleActive }: Props) => {
  return (
    <nav>
      <div className="desktop">
        <a href="/">
          <img className="nav-logo" src={logo} alt="" />
        </a>
        <div className="mobile">
          <RxHamburgerMenu className="hamburger" onClick={handleActive} />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="about" smooth={true} duration={500}>
              <a href="#about" className="nav-links">
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link to="menu" smooth={true} duration={500}>
              <a href="#menu" className="nav-links">
                MENU
              </a>
            </Link>
          </li>
          <li>
            <Link to="visit" smooth={true} duration={500}>
              <a href="#visit" className="nav-links">
                VISIT
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav
