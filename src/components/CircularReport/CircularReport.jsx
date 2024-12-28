import "./CircularReport.scss";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { useState } from "react";

import CircularReportAnimation from "./CircularReportAnimation/CircularReportAnimation";

export default function CircularReport({ delivery, toGo, dineIn }) {
  const [category, setCat] = useState("Today");

  let newDelivery = delivery,
    newToGo = toGo,
    newDineIn = dineIn;

  if (category == "month") {
    newDelivery = Math.floor(delivery * 20);
    newToGo = Math.floor(toGo * 7);
    newDineIn = Math.floor(dineIn * 13);
  } else if (category == "year") {
    newDelivery = Math.floor(delivery * 180);
    newToGo = Math.floor(toGo * 80);
    newDineIn = Math.floor(dineIn * 140);
  }
  return (
    <div className="circular-report-column">
      <div className="circular-report-header ">
        Most Type of Order
        <div className="cr-header-right">
          <div style={{ position: "relative" }}>
            <DropdownFilter
              setCat={setCat}
              icon={"/public/mask.svg"}
              list={["Today", "Month", "Year"]}
              filterTopic={"Timeframe"}
            />
          </div>
        </div>
      </div>
      <div className="circular-report-container">
        <CircularReportAnimation
          delivery={newDelivery}
          toGo={newToGo}
          dineIn={newDineIn}
        />
        <div className="order-stats">
          <div className="order-stat">
            <div className="stat-indicator-pink"></div>
            <h3>
              Dine In
              <br /> {newDineIn} customers
            </h3>
          </div>
          <div className="order-stat">
            <div className="stat-indicator-yellow"></div>
            <h3>
              To Go
              <br /> {newToGo} customers
            </h3>
          </div>
          <div className="order-stat">
            <div className="stat-indicator-blue"></div>
            <h3>
              Delivery
              <br /> {newDelivery} customers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
