import { dishesMenu } from "./DishesMenuData"
import './DishesMenu.scss'

function DishesMenu({ filterCondition }) {

  const filteredItems = filterCondition == "" ? dishesMenu : dishesMenu.filter((item) => {
    return item.category == filterCondition;
  })
  return (
    <div className="dishes-menu-container">
      {filteredItems.map((item, index) => {
        return <div className="dishes-menu-item" key={index}>

          <div className="dishes-menu-item-desc-container">
            <img src={item.image} alt="" />
            <span className="dishes-menu-item-name">{item.name}</span>
            <span className="dishes-menu-item-price">$ {item.prices}</span>
          </div>

        </div>
      })}

    </div>
  )
}

export default DishesMenu
