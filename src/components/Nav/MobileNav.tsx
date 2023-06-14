import './MobileNav.scss'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/logo.jpg'

interface Props {
  handleActive: () => void
}

const MobileNav: React.FC<Props> = ({ handleActive }: Props) => {
  return (
    <div className="mobile-modal">
      <div className="wrapper-top">
        <a>
          <img className="nav-logo" src={logo} alt="" />
        </a>
        <AiOutlineClose className="mobile-close" onClick={handleActive} />
      </div>
      <div className="wrapper-bottom">
        <ul className="mobile-nav-list">
          <div className="mobile-container"></div>
          <li>
            <a
              href="#about"
              onClick={handleActive}
              className="mobile-nav-links"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a href="#menu" onClick={handleActive} className="mobile-nav-links">
              MENU
            </a>
          </li>
          <li>
            <a
              href="#visit"
              onClick={handleActive}
              className="mobile-nav-links"
            >
              VISIT
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default MobileNav
