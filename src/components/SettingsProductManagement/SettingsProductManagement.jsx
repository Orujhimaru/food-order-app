import "./SettingsProductManagement.scss";
import React from "react";
import { foods, categories } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState } from "react";

export default function SettingsProductManagement() {
  // const [deleteState, setDeleteState] = React.useState(false);
  const [category, setCategory] = useState("all");
  const [categoryList, setCategoryList] = useState(categories);
  console.log(categories);
  // const [coldDishes, grill, appetizer, dessert, soup] = categories;
  // function deleteCategories() {
  //   setDeleteState((visible) => !visible);
  // }

  function renderDishes(dishes, cateogry) {
    let arr = dishes.map((dish) => {
      return (
        (dish.category.key === category || category === "all") && (
          <div className="dish" key={dish.id}>
            <img src={dish.image}></img>
            <h4>{dish.description}</h4>
            <h4>{dish.price}</h4>
            <button className="edit-button">
              <img src={"/public/edit-icon.svg"}></img>
              Edit dish
            </button>
          </div>
        )
      );
    });
    return arr;
  }

  return (
    <div className="settings-cat-main-container">
      <div className="settings-cat-header">
        <h3>Product Management</h3>
      </div>
      <CategoryTabs
        setCategory={setCategory}
        categories={categoryList}
        category={category}
      />
      <div className="dishes-container">
        <div className="new-dish">
          <h3>+</h3>
          <h3>Add dish</h3>
        </div>
        {renderDishes(foods, category)}
      </div>
    </div>
  );
}
