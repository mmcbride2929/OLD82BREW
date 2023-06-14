import './Visit.scss'
import image from '../../assets/map.png'

const Visit = () => {
  return (
    <div className="visit-container" id="visit">
      <div className="visit-content">
        <a href="https://www.google.com/maps/place/Old+82+Brew/@41.2343075,-80.5674976,15z/data=!4m2!3m1!1s0x0:0xe0bad3069f3bd96e?sa=X&ved=2ahUKEwjJ2Y6X28D_AhUIjYkEHU90AIAQ_BJ6BAhBEAc">
          <img src={image} alt="map-location" />
        </a>
        <div className="details-container">
          <div className="details-section">
            <h1>Hours</h1>
            <p>Mon-Sat 10am - 8pm</p>
          </div>
          <div className="details-section">
            <h1>Location</h1>
            <p>6949 Warren Sharon Rd, Brookfield, OH</p>
          </div>
          <div className="details-section">
            <h1>Phone</h1>
            <p>330-448-2145</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Visit
