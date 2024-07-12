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
    }
    // if (editedFoodItem.id !== id || editState === true) {
    //   return;
    // }

    // setEditMode((previousMode) => [!previousMode[0], id]);
    // editFoodList(id, desc, price);
    // setEditedField("");
    // setEditedField2("");
    // editFoodList();
  }

  // console.log(foodList);
  function isObjectEmpty(objectName) {
    return Object.keys(objectName).length === 0;
  }

  function editFoodList(newObj) {
    setFoodList((previousList) =>
      previousList.map((dish) => {
        return dish.id === newObj.id ? newObj : dish;
      })
    );
    setEditedFoodItem({});
    console.log(foodList);
    console.log(editedFoodItem);
  }

  function renderDishes(dishes) {
    let arr = dishes.map((dish) => {
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
                      description: inputRef1.current,
                      price: inputRef2.current,
                    };
                    {
                      console.log(newObj);
                    }
                    editFoodList(newObj);
                    // setEditMode(newObj);
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
  //                editMode[0] === true && editMode[1] === dish.id
  // ? "edit-button-save"

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
