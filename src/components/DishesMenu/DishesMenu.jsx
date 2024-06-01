import { foods } from "../../db/food";
import "./DishesMenu.scss";

function DishesMenu({ category }) {
  let filteredDishes = [];
  function filterDishesByCategory() {
    if (category === "all") {
      filteredDishes = foods;
    } else {
      filteredDishes = foods.filter((dish) => dish.category.key === category);
    }
  }
  filterDishesByCategory();

  return (
    <div>
      <div className="menu-top-section">
        <h2 className="menu-title">Choose Dishes </h2>
      </div>

      <div className="menu-container">
        {filteredDishes.map((food) => {
          const { id, image, description, price, bowl } = food;
          return (
            <div className="meal-card" key={id}>
              <img className="meal-image" src={image} />
              <p className="meal-description"> {description}</p>
              <p className="meal-price">{price}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DishesMenu;
