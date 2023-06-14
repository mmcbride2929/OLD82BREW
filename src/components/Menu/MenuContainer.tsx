import './MenuContainer.scss'
import MenuItem from './MenuItem'

const MenuContainer: React.FC = () => {
  return (
    <div className="menu-container">
      <div className="menu-section-container">
        <div className="menu-row">
          <div className="menu-section">
            <div className="price-header-container">
              <h1>Brewed Coffee</h1> <span>12oz | 16oz</span>
            </div>
            <MenuItem name={'Coffee'} priceSM={'2.25'} priceLG={'2.80'} />
            <MenuItem name={'Decaf Coffee'} priceSM={'2.25'} priceLG={'2.80'} />
            <MenuItem name={'Latte'} priceSM={'4.25'} priceLG={'4.80'} />
            <MenuItem name={'Cappuccino'} priceSM={'4.25'} priceLG={'4.80'} />
            <MenuItem name={'Americano'} priceSM={'4.25'} priceLG={'4.80'} />
            <MenuItem name={'Mocha'} priceSM={'4.25'} priceLG={'4.80'} />
            <MenuItem name={'Espresso'} priceSM={'3.00'} priceLG={'3.50'} />
          </div>
          <div className="menu-section">
            <h1>House Special</h1>
            <MenuItem
              name={'Caramel Latte'}
              priceSM={'4.25'}
              priceLG={'4.80'}
            />
            <MenuItem
              name={'Iced Caramel Latte'}
              priceSM={'4.25'}
              priceLG={'4.80'}
            />
            <MenuItem name={'Iced Coffee'} priceSM={'2.25'} priceLG={'2.80'} />
            <MenuItem
              name={'Hot Chocolate'}
              priceSM={'3.00'}
              priceLG={'3.50'}
            />
            <MenuItem name={'Flat White'} priceSM={'4.25'} priceLG={'4.80'} />
            <MenuItem
              name={'Hazelnut Mocha'}
              priceSM={'4.25'}
              priceLG={'4.80'}
            />
            <MenuItem name={'French Capp'} priceSM={'4.25'} priceLG={'4.80'} />
          </div>
        </div>
        <div className="menu-row">
          <div className="menu-section">
            <h1>Tea & Chai</h1>

            <MenuItem name={'Vanilla Chai'} priceSM={'3.25'} priceLG={'3.75'} />
            <MenuItem name={'Spiced Chai'} priceSM={'3.25'} priceLG={'3.75'} />
            <MenuItem
              name={'Dirty Spiced Chai'}
              priceSM={'4.25'}
              priceLG={'4.99'}
            />
            <MenuItem
              name={'Dirty Vanilla Chai'}
              priceSM={'4.25'}
              priceLG={'4.99'}
            />
            <MenuItem name={'Green Tea'} priceSM={'2.00'} priceLG={'2.50'} />
          </div>
          <div className="menu-section">
            <h1>Desserts</h1>
            <MenuItem name={'Cinnabuns'} priceLG={'4.00'} />
            <MenuItem name={'Scones'} priceLG={'4.00'} />
            <MenuItem name={'Bear Claw'} priceLG={'4.25'} />
            <MenuItem name={'Danish'} priceLG={'4.50'} />
            <MenuItem name={'Cinna Twist'} priceLG={'2.00'} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MenuContainer
