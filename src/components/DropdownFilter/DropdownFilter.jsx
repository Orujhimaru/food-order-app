import "../OrderReports.scss";
import React from "react";

export default function DropdownFilter({ setCat, icon, list }) {
  console.log("render Dropdown");
  const [dropDown, setDropDown] = React.useState(false);
  function setDropdownVisible() {
    setDropDown((visible) => !visible);
  }

  let dropDownElements = list.map((i, index) => {
    let cat = i.toLowerCase();
    return (
      <div key={index} onClick={() => setCat(cat)}>
        {i}
      </div>
    );
  });

  console.log(dropDownElements);

  return (
    <>
      <button className="order-report-filter-btn" onClick={setDropdownVisible}>
        <img src={icon} />
        Filter Order
      </button>
      {dropDown && <div className="order-dropdown">{dropDownElements}</div>}
    </>
  );
}
