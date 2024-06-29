import "./SettingsProductManagement.scss";
import React from "react";
import { foods, categories } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState } from "react";

export default function SettingsProductManagement() {
  const [category, setCategory] = useState("all");
  const [foodList, setFoodList] = useState(foods); // yemekler
  const [editMode, setEditMode] = useState([false, -1]); // BU FIELD INPUT VE YA H4 GOSTERILMESINI SAGLIYOR, ID ve TRUE/FALSE valuelari ile.
  const [editedField1, setEditedField] = useState(""); // 1. input field in degeri.

  const [editedField2, setEditedField2] = useState("");

  function editModeToggle(id, desc, price) {
    if (editMode[1] !== id && editMode[0] === true) {
      return;
    }
    setEditMode((previousMode) => [!previousMode[0], id]);
    editFoodList(id, desc, price);
    setEditedField("");
    setEditedField2("");
  }
  // console.log(foodList);

  function editFoodList(id, desc, price) {
    if (desc === "" || price === "") {
      return;
    }
    setFoodList((prevFoodList) =>
      prevFoodList.map((dish) => {
        return dish.id === id
          ? { ...dish, description: desc, price: price }
          : dish;
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
              <>
                <input
                  type="text"
                  onChange={(event) => setEditedField(event.target.value)}
                  value={editedField1}
                  placeholder={dish.description}
                ></input>
                <input
                  type="text"
                  onChange={(event) => setEditedField2(event.target.value)}
                  value={editedField2}
                  placeholder={dish.price}
                ></input>
                <button
                  className="edit-button-save"
                  onClick={() =>
                    editModeToggle(dish.id, editedField1, editedField2)
                  }
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
                  onClick={() =>
                    editModeToggle(dish.id, editedField1, editedField2)
                  }
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
