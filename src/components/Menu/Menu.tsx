import MenuContainer from './MenuContainer'
import MenuTitle from './MenuTitle'
import './Menu.scss'

const Menu: React.FC = () => {
  return (
    <div className="menu-container" id="menu">
      <div className="menu-content">
        <MenuTitle />
        <MenuContainer />
      </div>
    </div>
  )
}
export default Menu
