import "./PopUp.scss";
import React from "react";
import { categories } from "@/db/food";

function PopUp({ save, onClose, onInput }) {
  return (
    <div className="pop-up">
      <div className="pop-flex">
        <h3>Add meal information</h3>
        <button className="cross-stand-alone" onClick={onClose}>
          X
        </button>
      </div>
      <label>Food description:</label>
      <input
        onChange={(event) => onInput(event)}
        name="description"
        className="pop-up-text"
        type="text"
        id="fname"
        placeholder="Food name.."
      />

      <label>Food Price</label>
      <input
        onChange={(event) => onInput(event)}
        name="price"
        className="pop-up-text"
        type="text"
        id="desc"
        placeholder="Description"
      />

      <select name="category" onChange={(event) => onInput(event)}>
        {categories.map((cat) => {
          return (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          );
        })}
      </select>

      <input
        onClick={save}
        className="submit-pop-up"
        type="submit"
        value="Create"
      />
    </div>
  );
}

export default PopUp;
