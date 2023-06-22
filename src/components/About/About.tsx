import './About.scss'
import image1 from '../../assets/about-us.jpg'
import image2 from '../../assets/brookfield.jpg'

const About: React.FC = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content-container-1">
        <div className="about-paragraph">
          <h1>About Us</h1>
          <p>
            Old 82 Brew is a coffee shop founded in 2023 by Matthew Chu,
            dedicated to providing a delightful coffee experience. At Old 82
            Brew, we offer a range of hot and cold drinks. Indulge in our
            flavorful beverages, from rich espressos to refreshing iced coffees.
            Pair your coffee with our delectable assortment of pastries. Join us
            at Old 82 Brew, where we invite you to relax, sip, and savor the
            perfect blend of exceptional coffee and delightful treats.
          </p>
        </div>
        <img src={image1} alt="owner" />
      </div>
      <div className="about-content-container-2">
        <img src={image2} alt="brookfield-mural" />
        <div className="about-paragraph">
          <h1>Our Mission</h1>
          <p>
            At Old 82 Brew, we cherish our regular customers and foster a
            welcoming environment. Through personalized service and genuine
            appreciation, we create a sense of home. We also strive to make a
            positive impact by engaging with our community. Join us at Old 82
            Brew, where community matters and regular customers are celebrated.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
