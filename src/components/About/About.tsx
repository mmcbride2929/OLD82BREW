import './About.scss'
import image1 from '../../assets/about-us.jpg'
import image2 from '../../assets/brookfield.jpg'

const About: React.FC = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content-container-1">
        <div className="about-paragraph">
          <h1>Our Story</h1>
          <p>
            Old 82 Brew was started by Matthew Chu in 2023. Pellentesque finibus
            eleifend quam, sit amet sollicitudin enim placerat at. Nullam
            convallis pulvinar metus, a efficitur diam volutpat nec. Suspendisse
            potenti. Donec aliquam facilisis justo, sed facilisis ex vestibulum
            vitae.
          </p>
        </div>
        <img src={image1} alt="owner" />
      </div>
      <div className="about-content-container-2">
        <img src={image2} alt="brookfield-mural" />
        <div className="about-paragraph">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque finibus eleifend quam, sit amet sollicitudin enim
            placerat at. Nullam convallis pulvinar metus, a efficitur diam
            volutpat nec. Suspendisse potenti. Donec aliquam facilisis justo,
            sed facilisis ex vestibulum vitae.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
