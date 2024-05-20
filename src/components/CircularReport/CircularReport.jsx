import { useEffect, useState, useRef } from "react";
import "./circular.scss";

export default function CircularReport({ delivery, toGo, dineIn }) {
  const ref3 = useRef();
  const ref2 = useRef();
  const ref1 = useRef();

  const [count1, setCount1] = useState(0);

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

      if (count1 < delivery) {
        ref3.current.style.background = `conic-gradient(#65B0F6 0deg, #65B0F6 ${count1}deg, #353440 ${count1}deg)`;
      }
      if (count1 < toGo) {
        ref2.current.style.background = `conic-gradient(#FFB572 0deg, #FFB572 ${count1}deg, #2A2836 ${count1}deg)`;
      }
      if (count1 < dineIn) {
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
    </div>
  );
}
