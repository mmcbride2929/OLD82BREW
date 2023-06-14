import './Rewards.scss'
import image from '../../assets/loyalty-rewards-edit.jpg'

const Rewards = () => {
  return (
    <div className="rewards-container">
      <div className="rewards-content">
        <div className="rewards-container-left">
          <h1>Loyalty Cards</h1>
          <p>
            Experience the perks of loyalty at Old 82 Brew! With our loyalty
            card, your dedication to great coffee pays off. After buying five
            coffees, your sixth one is on us. Join our program today and start
            enjoying the rewards of being a valued member.
          </p>
        </div>
        <img src={image} alt="loyalty-program" />
      </div>
    </div>
  )
}
export default Rewards
