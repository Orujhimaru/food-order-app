import React, { useState, useEffect } from "react";
import { foods, orderTypes } from "../../db/food";
import "./DishesMenu.scss";
import meal1 from "../../assets/Image-2.png";
import meal2 from "../../assets/Image-3.png";
import meal3 from "../../assets/Image-5.png";
import meal4 from "../../assets/Image-6.png";

function DishesMenu({ inputText }) {
  const mealList = [meal1, meal2, meal3, meal4];
  const [orderType, setOrderType] = useState("all");
  const [filteredDishes, setFilteredDishes] = useState(foods);

  useEffect(() => {
    if (orderType === "all" && inputText === "") {
      setFilteredDishes(foods);
    } else {
      const newFoods = foods.filter((dish) => dish.orderType === orderType);
      // setFilteredDishes(newFoods);
      const searchFoods = newFoods.filter((dish) =>
        dish.description.includes(inputText)
      );
      setFilteredDishes(searchFoods);
    }
  }, [orderType, inputText]);

  const handleOrderTypeChange = (event) => {
    setOrderType(event.target.value);
  };

  return (
    <div>
      <div className="menu-top-section">
        <h2 className="menu-title">Choose Dishes</h2>
        <div className="ordertype-general">
          <select
            id="orderType-select"
            value={orderType}
            onChange={handleOrderTypeChange}
          >
            {orderTypes.map((type) => (
              <option key={type.key} value={type.key}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ordertype-ticket">
        <div className="menu-container">
          {filteredDishes.map((food) => {
            const { id, description, price } = food;
            return (
              <div className="meal-card" key={id}>
                <img
                  className="meal-image"
                  src={mealList[0 + Math.floor(Math.random() * 4)]}
                  alt={description}
                />
                <p className="meal-description">{description}</p>
                <p className="meal-price">${price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DishesMenu;
