import { useState } from "react";
import { useEffect } from "react";
import "./OrderReports.scss";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import ReportElement from "./ReportElement";
import { arrOfOrders } from "../../db/data";
import { useRef } from "react";
import filter from "../../filter.svg";

// mock data
function returnOrderReportElements(array) {
  let arr = array.map((order, index) => {
    return (
      <ReportElement
        key={order.id}
        order={order}
        colored={index % 2 === 0 ? true : false}
      />
    );
  });
  return arr;
}

function OrderReports() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
  });
  const scrollDemoRef = useRef(null);
  const dropdown = useRef(null);

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollTop } = scrollDemoRef.current;
      setScrollPosition({ scrollTop });
    }
    if (scrollPosition.scrollTop > 100) {
      // activate transition
      // dropdown.className = "fade-out";
      // console.log(dropdown.className);
    } else {
      dropdown.className = "";
    }
  };

  // Orders array state
  const [elements, setElements] = useState(
    returnOrderReportElements(arrOfOrders)
  );
  // CHANGE category STATE { all, preparing, pending, completed}
  const [category, setCategory] = useState("all");

  function setCat(newValue) {
    setCategory(newValue);
  }

  // CHANGING THE LIST OF ORDERS BY THEIR STATUS
  useEffect(() => {
    console.log("run effect");
    // q3: IKi kere run printlemesinin sebebi StrictMode mu ?
    if (category === "all") {
      setElements(returnOrderReportElements(arrOfOrders));
    } else {
      let arr = arrOfOrders.filter((a) => a.status === category);
      setElements(returnOrderReportElements(arr));
    }
  }, [category]);

  return (
    <div
      className="order-report-container"
      ref={scrollDemoRef}
      onScroll={handleScroll}
    >
      <div style={{ marginTop: "16px" }} className="order-report-header">
        <h3>Order Report</h3>
        <div ref={dropdown} style={{ position: "relative" }}>
          <DropdownFilter
            setCat={setCat}
            icon={filter}
            list={["All", "Completed", "Pending", "Preparing"]}
            filterTopic={"Orders"}
          />
        </div>
      </div>

      <div className="order-reports">
        <div className="order-report order-report-sticky">
          <div className="order-flex-start">
            <h3>Customer</h3>
          </div>
          <div className="order-flex-start">
            <h3>Menu</h3>
          </div>
          <div className="order-flex-start">
            <h3>Total Payment</h3>
          </div>
          <div className="order-flex-end">
            <h3 style={{ marginRight: "20px" }}>Status</h3>
          </div>
        </div>
        <br></br>
        {elements}
      </div>
    </div>
  );
}

export default OrderReports;
