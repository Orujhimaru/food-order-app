import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { useState } from "react";
import { foods } from "@/db/food";
import "./MostOrderedDishes.scss";

export default function MostOrderedDishes() {
  return (
    <div className="most-ordered-container">
      <div className="most-ordered-header">
        <h3>Most Ordered</h3>
        <DropdownFilter
          setCat={() => {}}
          icon={"/public/mask.svg"}
          list={["Today", "Month", "Year"]}
          filterTopic={"Today"}
        />
      </div>
      <div className="food-h">
        <img src="/src/assets/Image-2.png"></img>
        <div className="food-v">
          <h3>Spicy seasoned seafood noodles</h3>
          <h4>200 dishes ordered</h4>
        </div>
      </div>
      <div className="food-h">
        <img src="/src/assets/Image-3.png"></img>
        <div className="food-v">
          <h3>Salted pasta with mushroom sauce</h3>
          <h4>120 dishes ordered</h4>
        </div>
      </div>
      <div className="food-h">
        <img src="/src/assets/Image-5.png"></img>
        <div className="food-v">
          <h3>Beef dumpling in hot and sour soup</h3>
          <h4>80 dishes ordered</h4>
        </div>
      </div>

      <button className="show-all-button">View All</button>
    </div>
  );
}
