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
        <label>Food name:</label>
        <input
          onChange={(event) => onInput(event)}
          className="pop-up-text"
          type="text"
          id="fname"
          placeholder="Food name.."
        />

        <label>Description</label>
        <input
          onChange={(event) => onInput(event)}
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
