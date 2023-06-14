import './MenuItem.scss'

interface Props {
  name: string
  priceSM?: string
  priceLG: string
}

const MenuItem = ({ name, priceSM, priceLG }: Props) => {
  return (
    <div className="column">
      <h2>{name}</h2>
      <div className="price-container">
        <h3>{priceSM}</h3>
        <h3>{priceLG}</h3>
      </div>
    </div>
  )
}
export default MenuItem
