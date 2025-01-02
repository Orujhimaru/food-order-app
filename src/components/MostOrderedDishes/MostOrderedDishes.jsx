import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { foods } from "@/db/food";
import "./MostOrderedDishes.scss";

import meal2 from "../../assets/Image-3.png";
import mask from "../../mask.svg";

export default function MostOrderedDishes() {
  const arr = foods.slice(0, 3);
  let elements = arr.map((food) => {
    return (
      <div className="food-h" key={food.id}>
        <img src={meal2}></img>
        <div className="food-v">
          <h3>{food.description}</h3>
          <h4>200 dishes ordered</h4>
        </div>
      </div>
    );
  });

  return (
    <div className="most-ordered-container">
      <div className="most-ordered-header">
        <h3>Most Ordered</h3>
        <DropdownFilter
          setCat={() => {}}
          icon={mask}
          list={["Today", "Month", "Year"]}
          filterTopic={"Today"}
        />
      </div>
      {elements}
      <button className="show-all-button">View All</button>
    </div>
  );
}
