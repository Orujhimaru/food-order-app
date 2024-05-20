import { useEffect, useState, useRef } from "react";
import "./circular.scss";

export default function CircularReport({ delivery, toGo, dineIn }) {
  const ref3 = useRef();
  const ref2 = useRef();
  const ref1 = useRef();

  const [count1, setCount1] = useState(0);
  const [total, setTotal] = useState(delivery + toGo + dineIn);
  // propslarda degisiklik olursa guncellenir mi ? useState icinde bulundurdugum icin.

  let big =
    toGo > dineIn && toGo > delivery
      ? { name: "To Go", value: toGo }
      : dineIn > toGo && dineIn > delivery
      ? { name: "Dine In", value: dineIn }
      : { name: "Delivery", value: delivery };
  let mid =
    toGo > dineIn && toGo < delivery
      ? { name: "To Go", value: toGo }
      : dineIn > toGo && dineIn < delivery
      ? { name: "Dine In", value: dineIn }
      : { name: "Delivery", value: delivery };
  let sm =
    toGo < dineIn && toGo < delivery
      ? { name: "To Go", value: toGo }
      : dineIn < toGo && dineIn < delivery
      ? { name: "Dine In", value: dineIn }
      : { name: "Delivery", value: delivery };
  console.log(big.name + " " + mid.name + " " + sm.name);

  useEffect(() => {
    console.log(count1);
    let progress = setTimeout(() => {
      //   if (count1 === delivery) {
      //     return;
      //   } else {
      //     setCount(count1 + 1);
      //   }
      if (count1 === 360) {
        return;
      } else {
        setCount1(count1 + 1);
      }
      if (count1 < ((big.value * 100) / total) * 3.6) {
        ref3.current.style.background = `conic-gradient(#65B0F6 0deg, #65B0F6 ${count1}deg, #353440 ${count1}deg)`;
      }
      if (count1 < ((mid.value * 100) / total) * 3.6) {
        ref2.current.style.background = `conic-gradient(#FFB572 0deg, #FFB572 ${count1}deg, #2A2836 ${count1}deg)`;
      }
      if (count1 < ((sm.value * 100) / total) * 3.6) {
        ref1.current.style.background = `conic-gradient(#FF7CA3 0deg, #FF7CA3 ${count1}deg, #353440 ${count1}deg)`;
      }
    }, 5);

    return () => {
      clearTimeout(progress);
    };
  });

  return (
    <div className="circular-report-container">
      <div className="flex">
        <div className="inner-1"></div>
        <div ref={ref1} className="inner-2"></div>
        <div ref={ref2} className="inner-3"></div>
        <div ref={ref3} className="inner-4"></div>
      </div>
      <div className="order-stats">
        <div className="order-stat">
          <div className="stat-indicator-pink"></div>
          <h3>
            {sm.name}
            <br /> {sm.value} customers
          </h3>
        </div>
        <div className="order-stat">
          <div className="stat-indicator-blue"></div>
          <h3>
            {big.name}
            <br /> {big.value} customers
          </h3>
        </div>
        <div className="order-stat">
          <div className="stat-indicator-yellow"></div>
          <h3>
            {mid.name}
            <br /> {mid.value} customers
          </h3>
        </div>
      </div>
    </div>
  );
}
