import "./OrderCard.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import coin from "../../coin.svg";
import bookmark from "../../bookmark.svg";
import customer from "../../customer.svg";

gsap.registerPlugin(useGSAP);

export default function OrderCard() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".num-anim", {
        textContent: 0,
        duration: 1,
        ease: "power1.in",
        snap: { textContent: 1 },
        stagger: {
          each: 1.0,
          onUpdate: function () {
            this.targets()[0].innerHTML = this.targets()[0].textContent;
          },
        },
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)
  return (
    <div className="order-card-container" ref={container}>
      <div className="order-card">
        <div className="order-flex">
          <div className="icon-container">
            <img src={coin}></img>
          </div>
          <h5>
            +
            <span className="num-anim" style={{ color: "#50D1AA" }}>
              32.40
            </span>
            %
          </h5>
        </div>
        <div className="yanyana">
          <h3>$</h3>
          <h3 className="num-anim">10243.00</h3>
        </div>
        <h4>Total revenue</h4>
      </div>

      <div className="order-card">
        <div className="order-flex">
          <div className="icon-container">
            <img src={bookmark}></img>
          </div>
          <h5>
            -
            <span className="num-anim" style={{ color: "#FF7CA3" }}>
              15.60
            </span>
            %
          </h5>
        </div>
        <div className="yanyana">
          <h3>$</h3>
          <h3 className="num-anim">23343</h3>
        </div>
        <h4>Total Dish Ordered</h4>
      </div>
      <div className="order-card">
        <div className="order-flex">
          <div className="icon-container">
            <img src={customer}></img>
          </div>
          <h5>
            +
            <span className="num-anim" style={{ color: "#50D1AA" }}>
              2.40
            </span>
            %
          </h5>
        </div>
        <div className="yanyana">
          <h3>$</h3>
          <h3 className="num-anim">1234</h3>
        </div>
        <h4>Total Customer</h4>
      </div>
    </div>
  );
}
