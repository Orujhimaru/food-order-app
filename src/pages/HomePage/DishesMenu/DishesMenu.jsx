import "./DishesMenu.scss";

function DishesMenu({ category, foods }) {
  const filteredFoods =
    category == "all"
      ? foods
      : foods.filter((food) => {
          return food.category.key == category;
        });

  return (
    <div className="dishes-menu-container">
      {filteredFoods.map((food, index) => {
        return (
          <div className="dishes-menu-item" key={index}>
            <div className="dishes-menu-item-desc-container">
              <img src={food.image} alt="" />
              <span className="dishes-menu-item-name">{food.description}</span>
              <span className="dishes-menu-item-price">$ {food.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DishesMenu;
