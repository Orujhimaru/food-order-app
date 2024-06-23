import "./SettingsProductManagement.scss";
import React from "react";
import { foods, categories } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState } from "react";

export default function SettingsProductManagement() {
  // const [deleteState, setDeleteState] = React.useState(false);
  const [category, setCategory] = useState("all");
  const [foodList, setFoodList] = useState(foods);
  const [editMode, setEditMode] = useState([false, -1]);
  const [editedField1, setEditedField] = useState("");
  // const [coldDishes, grill, appetizer, dessert, soup] = categories;
  // function deleteCategories() {
  //   setDeleteState((visible) => !visible);
  // }
  function editModeToggle(id, desc) {
    // console.log(editMode);
    if (editMode[1] !== id && editMode[0] === true) {
      return;
    }
    setEditMode((previousMode) => [!previousMode[0], id]);
    editFoodList(id, desc);
    setEditedField("");
    // console.log(editMode);
  }
  // console.log(foodList);

  function editFoodList(id, desc) {
    setFoodList((prevFoodList) =>
      prevFoodList.map((dish) => {
        return dish.id === id ? { ...dish, description: desc } : dish;
      })
    );
  }

  function renderDishes(dishes) {
    console.log("edit mode started");
    let arr = dishes.map((dish) => {
      return (
        (dish.category.key === category || category === "all") && (
          <div className="dish" key={dish.id}>
            <img src={dish.image}></img>
            {editMode[0] === true && editMode[1] === dish.id ? (
              <input
                type="text"
                onChange={(event) => setEditedField(event.target.value)}
                // neden gozukmuyor value input fieldin icinde ?
                // focus state de gozukmuyor, blur state de gozukuyor.
                value={editedField1}
                // defaultValue={dish.description}
                //neden calismiyor ???
              ></input>
            ) : (
              <h4>{dish.description}</h4>
            )}
            <h4>{dish.price}</h4>
            <button
              className="edit-button"
              onClick={() => editModeToggle(dish.id, editedField1)}
            >
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
        categories={categories}
        category={category}
      />
      <div className="dishes-container">
        <button className="new-dish">
          <h3>+</h3>
          <h3>Add dish</h3>
        </button>
        {renderDishes(foodList)}
      </div>
    </div>
  );
}
