import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./OrderReport.scss";
import DropdownFilter from "./DropdownFilter";
import ReportElement from "./ReportElement";
import { arrOfOrders } from "./data";

// mock data
function returnElements(array) {
  let arr = array.map((order) => {
    return (
      <ReportElement
        key={order.id}
        img={order.img}
        userName={order.userName}
        orderName={order.orderName}
        price={order.price}
        status={order.status}
      />
    );
  });
  return arr;
}

function OrderReports() {
  console.log("render");
  // Orders array state
  const [elements, setElements] = React.useState(returnElements(arrOfOrders));
  // MAKE DROPDOWN VISIBLE state
  const [dropDown, setDropDown] = React.useState(false);
  // Q1: Dropdown kismi sadece Filter buttonuna tikladigimda kapaniyor,
  // baska bir yere tikladigimda kapanmasini nasil yapa bilirim ?
  // Q2: USE REF NEREDE KULLANILIR ?

  // CHANGE category STATE { all, preparing, pending, completed}
  const [category, setCategory] = React.useState("all");

  function setDropdownVisible() {
    setDropDown((visible) => !visible);
  }

  function setCat(newValue) {
    setCategory(newValue);
  }

  // CHANGING THE LIST OF ORDERS BY THEIR STATUS
  useEffect(() => {
    console.log("run");
    // q3: IKi kere run printlemesinin sebebi StrictMode mu ?
    if (category === "all") {
      setElements(returnElements(arrOfOrders));
    } else {
      let arr = arrOfOrders.filter((a) => a.status === category);
      setElements(returnElements(arr));
    }
    setDropdownVisible();
  }, [category]);

  return (
    <div className="order-report-container">
      <div className="order-report-header">
        <h3>Order Report</h3>
        <div className="positioning">
          <button
            className="order-report-filter-btn"
            onClick={setDropdownVisible}
          >
            Filter Order
          </button>
          {dropDown && <DropdownFilter setCat={setCat} />}
          {/* BU DOGRU MU ? DROPDOWN DEGISTIGINDE TUM ORDERCOMPONENET yeniden renderlaniyor. */}
        </div>
      </div>

      <div className="order-reports">{elements}</div>
    </div>
  );
}

export default OrderReports;
