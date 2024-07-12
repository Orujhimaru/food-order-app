import "./SettingsProductManagement.scss";
import React from "react";
import { foods, categories } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState, useRef } from "react";

export default function SettingsProductManagement() {
  const [category, setCategory] = useState("all");
  const [foodList, setFoodList] = useState(foods); // yemekler
  const [editState, setEditState] = useState(false);
  const [editedFoodItem, setEditedFoodItem] = useState({});

  const inputRef1 = useRef();
  const inputRef2 = useRef();

  function setEditMode(dish) {
    if (isObjectEmpty(editedFoodItem)) {
      setEditState(true);
      setEditedFoodItem(dish);
    } else {
      setEditState(false);
      setEditedFoodItem({});
    }
  }

  function isObjectEmpty(objectName) {
    return Object.keys(objectName).length === 0;
  }

  function editFoodList(newObj) {
    if (newObj.description.length === 0 || newObj.price.length === 0) {
      return;
    }
    setFoodList(
      foodList.map((dish) => {
        return dish.id === newObj.id ? newObj : dish;
      })
    );
  }

  function renderDishes(dishes) {
    console.log(dishes);
    console.log(foodList);
    let arr = dishes?.map((dish) => {
      return (
        (dish.category.key === category || category === "all") && (
          <div className="dish" key={dish.id}>
            <img src={dish.image}></img>
            {editState === true && editedFoodItem.id === dish.id ? (
              <>
                <input
                  type="text"
                  // onChange={(event) => setEditedField(event.target.value)}
                  ref={inputRef1}
                  placeholder={dish.description}
                ></input>
                <input
                  type="text"
                  // onChange={(event) => setEditedField2(event.target.value)}
                  // value={editedField2}
                  ref={inputRef2}
                  placeholder={dish.price}
                ></input>
                <button
                  className="edit-button-save"
                  onClick={() => {
                    const newObj = {
                      ...dish,
                      description: inputRef1.current.value,
                      price: inputRef2.current.value,
                    };
                    editFoodList(newObj);
                    setEditMode(newObj);
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
                    setEditMode(dish);
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
        <button className="new-dish">
          <h3>+</h3>
          <h3>Add dish</h3>
        </button>
        {renderDishes(foodList)}
      </div>
    </div>
  );
}
