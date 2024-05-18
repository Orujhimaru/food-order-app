import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./OrderReport.scss";
import DropdownFilter from "./DropdownFilter";
import ReportElement from "./ReportElement";

// mock data
let arrOfOrders = [
  {
    id: "1234dfs141",
    userName: "Eren Jeager",
    img: "/profile-picture.png",
    orderName: "Spicy seasoned seafood noodles ",
    price: "$125",
    status: "completed",
  },
  {
    id: "12sf341",
    userName: "Hangi",
    img: "/profile-picture.png",
    orderName: "Raw meat",
    price: "$12532",
    status: "pending",
  },
  {
    id: "32134141",
    userName: "Levi",
    img: "/profile-picture.png",
    orderName: "Potato",
    price: "$32",
    status: "preparing",
  },
  {
    id: "123as434ff141",
    userName: "Eren Jeager",
    img: "/profile-picture.png",
    orderName: "Spicy seasoned seafood noodles ",
    price: "$125",
    status: "completed",
  },
  {
    id: "1234rfgadsv141",
    userName: "Hangi",
    img: "/profile-picture.png",
    orderName: "Raw meat",
    price: "$12532",
    status: "pending",
  },
  {
    id: "1234s34f141",
    userName: "Levi",
    img: "/profile-picture.png",
    orderName: "Potato",
    price: "$32",
    status: "preparing",
  },
  {
    id: "12343gdfs4ff141",
    userName: "Eren Jeager",
    img: "/profile-picture.png",
    orderName: "Spicy seasoned seafood noodles ",
    price: "$125",
    status: "completed",
  },
  {
    id: "1234rfgsvfsdf141",
    userName: "Hangi",
    img: "/profile-picture.png",
    orderName: "Raw meat",
    price: "$12532",
    status: "pending",
  },
  {
    id: "123434ff1sags41",
    userName: "Eren Jeager",
    img: "/profile-picture.png",
    orderName: "Spicy seasoned seafood noodles ",
    price: "$125",
    status: "completed",
  },
  {
    id: "1234rgsfdffgsv141",
    userName: "Hangi",
    img: "/profile-picture.png",
    orderName: "Raw meat",
    price: "$12532",
    status: "pending",
  },
];

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
  // Orders array state
  const [elements, setElements] = React.useState(returnElements(arrOfOrders));
  // MAKE DROPDOWN VISIBLE state
  const [dropDown, setDropDown] = React.useState(false);

  // Q1: Dropdown kismi sadece Filter buttonuna tikladigimda kapaniyor,
  // baska bir yere tikladigimda kapanmasini nasil yapa bilirim ?

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
    // q2: IKi kere run printlemesinin sebebi StrictMode mu ?
    if (category === "all") {
      setElements(returnElements(arrOfOrders));
    } else {
      let arr = arrOfOrders.filter((a) => a.status === category);
      setElements(returnElements(arr));
    }
  }, [category]);

  return (
    // Containerin height i ni limitleyip scroll ekle.
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
        </div>
      </div>

      <div className="order-reports">{elements}</div>
    </div>
  );
}

export default OrderReports;
