import MobileNav from '../Nav/MobileNav'
import Nav from '../Nav/Nav'
import './Hero.scss'

interface Props {
  handleActive: () => void
  active: boolean
}

const Hero: React.FC<Props> = ({ handleActive, active }: Props) => {
  return (
    <div className="background" id="hero">
      {active ? (
        <MobileNav handleActive={handleActive} />
      ) : (
        <div className="content-container">
          <header>
            <Nav handleActive={handleActive} />
          </header>
          <div className="hero-content">
            <div className="hero-title">
              <h1 className="hero-h1">Old 82 Brew</h1>
              <h2 className="hero-h2">
                Brookfield’s new coffee shop, located on the corner of Old 82
                and Route 7.
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Hero
