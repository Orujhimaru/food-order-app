import "./SettingsProductManagement.scss";
import React from "react";
import { foods, categories } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState, useRef } from "react";
import PopUp from "./PopUp.jsx";

export default function SettingsProductManagement() {
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
    console.log(foodList);
  }

  const handleInputChange = (event) => {
    if (event.target.name === "category") {
      setEditedFoodItem({
        ...editedFoodItem,
        [event.target.name]: event.target.value,
        category: categories[event.target.value - 1],
        id: foodList.length + 1,
        image: "/src/assets/Image-2.png",
      });
    } else {
      setEditedFoodItem({
        ...editedFoodItem,
        [event.target.name]: event.target.value,
        id: foodList.length + 1,
        image: "/src/assets/Image-2.png",
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
      console.log(category);
      return (
        (dish.category.key === category || category === "all") && (
          <div className="dish" key={dish.id}>
            <img src={dish.image}></img>
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
                  type="text"
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
                    <img src={"/public/save_icon.png"}></img>
                    <h4>Save dish</h4>
                  </div>
                </button>
              </>
            ) : (
              <>
                <h4>{dish.description}</h4>
                <h4>{dish.price}</h4>
                <button
                  className="edit-button"
                  onClick={() => {
                    setEditedFoodItem(dish);
                  }}
                >
                  <div className="button-elements-container">
                    <img src={"/public/edit-icon.svg"}></img>
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
