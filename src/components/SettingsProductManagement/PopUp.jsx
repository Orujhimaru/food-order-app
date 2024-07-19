import "./PopUp.scss";
import React from "react";

function PopUp({ save, onClose, onInput }) {
  return (
    <div className="pop-up">
      <div className="pop-flex">
        <h3>Add meal information</h3>
        <button className="cross-stand-alone" onClick={onClose}>
          X
        </button>
      </div>
      <form>
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

        <input
          onClick={save}
          className="submit-pop-up"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default PopUp;
