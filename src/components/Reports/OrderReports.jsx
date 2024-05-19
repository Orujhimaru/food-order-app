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
  console.log("render ALL");
  // Orders array state
  const [elements, setElements] = React.useState(returnElements(arrOfOrders));
  // CHANGE category STATE { all, preparing, pending, completed}
  const [category, setCategory] = React.useState("all");

  function setCat(newValue) {
    setCategory(newValue);
  }

  // CHANGING THE LIST OF ORDERS BY THEIR STATUS
  useEffect(() => {
    console.log("run effect");
    // q3: IKi kere run printlemesinin sebebi StrictMode mu ?
    if (category === "all") {
      setElements(returnElements(arrOfOrders));
    } else {
      let arr = arrOfOrders.filter((a) => a.status === category);
      setElements(returnElements(arr));
    }
  }, [category]);

  return (
    <div className="order-report-container">
      <div className="order-report-header">
        <h3>Order Report</h3>
        <div className="positioning">
          <DropdownFilter setCat={setCat} />
        </div>
      </div>

      <div className="order-reports">{elements}</div>
    </div>
  );
}

export default OrderReports;
