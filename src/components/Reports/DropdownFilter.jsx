import "./OrderReport.scss";
import React from "react";

export default function DropdownFilter({ setCat }) {
  console.log("render Dropdown");
  const [dropDown, setDropDown] = React.useState(false);
  function setDropdownVisible() {
    setDropDown((visible) => !visible);
  }
  return (
    <>
      <button className="order-report-filter-btn" onClick={setDropdownVisible}>
        Filter Order
      </button>
      {dropDown && (
        <div className="order-dropdown">
          <div onClick={() => setCat("all")}>All</div>
          <div onClick={() => setCat("completed")}>Completed</div>
          <div onClick={() => setCat("pending")}>Pending</div>
          <div onClick={() => setCat("preparing")}>Preparing</div>
        </div>
      )}
    </>
  );
}
