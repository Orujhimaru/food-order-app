import React, { useState, useEffect } from "react";
import { foods, orderTypes } from "../../db/food";
import "./DishesMenu.scss";

function DishesMenu() {
  const [orderType, setOrderType] = useState("all");
  const [filteredDishes, setFilteredDishes] = useState(foods);

  useEffect(() => {
    if (orderType === "all") {
      setFilteredDishes(foods);
    } else {
      setFilteredDishes(foods.filter((dish) => dish.orderType === orderType));
    }
  }, [orderType]);

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
            const { id, image, description, price } = food;
            return (
              <div className="meal-card" key={id}>
                <img className="meal-image" src={image} alt={description} />
                <p className="meal-description">{description}</p>
                <p className="meal-price">{price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DishesMenu;
