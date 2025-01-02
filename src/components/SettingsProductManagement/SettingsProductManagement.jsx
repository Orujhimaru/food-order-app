import "./SettingsProductManagement.scss";
import React from "react";
import { foods, categories } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState, useRef } from "react";
import PopUp from "./PopUp.jsx";
import meal1 from "../../assets/Image-2.png";
import meal2 from "../../assets/Image-3.png";
import meal3 from "../../assets/Image-5.png";
import meal4 from "../../assets/Image-6.png";
import save from "../../save_icon.png";
import edit from "../../edit-icon.svg";

export default function SettingsProductManagement() {
  const mealList = [meal1, meal2, meal3, meal4];
  const [category, setCategory] = useState("all");
  const [foodList, setFoodList] = useState(foods); // yemekler
  const [editedFoodItem, setEditedFoodItem] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  function editFoodList() {
    // Updates the list after checking input values.
    if (
      editedFoodItem.description.length === 0 ||
      editedFoodItem.price.length === 0
    ) {
      return;
    }
    setFoodList(
      foodList.map((dish) => {
        return dish.id === editedFoodItem.id ? editedFoodItem : dish;
      })
    );
    setEditedFoodItem({});
  }

  function addToFoodList() {
    // Updates the list after checking input values.
    if (
      editedFoodItem.description.length === 0 ||
      editedFoodItem.price.length === 0
    ) {
      return;
    }
    let arr = foodList;
    arr.push(editedFoodItem);
    setFoodList(arr);
    setEditedFoodItem({});
    // console.log(foodList);
  }

  const handleInputChange = (event) => {
    if (event.target.name === "category") {
      setEditedFoodItem({
        ...editedFoodItem,
        [event.target.name]: event.target.value,
        category: categories[event.target.value - 1],
        id: foodList.length + 1,
        image: { meal2 },
      });
    } else {
      setEditedFoodItem({
        ...editedFoodItem,
        [event.target.name]: event.target.value,
        id: foodList.length + 1,
        image: { meal2 },
      });
    }
  };

  const handleInput = (event) => {
    setEditedFoodItem({
      ...editedFoodItem,
      [event.target.name]: event.target.value,
    });
  };

  function renderDishes(dishes) {
    let arr = dishes?.map((dish) => {
      // console.log(category);
      return (
        (dish.category.key === category || category === "all") && (
          <div className="dish" key={dish.id}>
            <img src={mealList[dish.id % 4]}></img>
            {editedFoodItem && editedFoodItem.id === dish.id ? (
              <>
                <input
                  name="description"
                  type="text"
                  onChange={(event) => handleInput(event)}
                  placeholder={dish.description}
                ></input>
                <input
                  name="price"
                  type="number"
                  onChange={(event) => handleInput(event)}
                  placeholder={dish.price}
                ></input>
                <button
                  className="edit-button-save"
                  onClick={() => {
                    editFoodList();
                  }}
                >
                  <div className="button-elements-container">
                    <img src={save}></img>
                    <h4>Save dish</h4>
                  </div>
                </button>
              </>
            ) : (
              <>
                <h4>{dish.description}</h4>
                <h4>${dish.price}</h4>
                <button
                  className="edit-button"
                  onClick={() => {
                    setEditedFoodItem(dish);
                  }}
                >
                  <div className="button-elements-container">
                    <img src={edit}></img>
                    <h4>Edit dish</h4>
                  </div>
                </button>
              </>
            )}
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
        <button
          className="new-dish"
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          <h3>+</h3>
          <h3>Add dish</h3>
        </button>
        {showPopUp && (
          <PopUp
            save={() => {
              addToFoodList();
              setShowPopUp(false);
            }}
            onClose={() => {
              setShowPopUp(false);
            }}
            onInput={(event) => {
              handleInputChange(event);
            }}
          />
        )}
        {renderDishes(foodList)}
      </div>
    </div>
  );
}
