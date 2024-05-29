import "./OrderCard.scss";

export default function OrderCard() {
  return (
    <div className="order-card-container">
      <div className="order-card">
        <div className="order-flex">
          <div className="icon-container">
            <img src="/public/bookmark.svg"></img>
          </div>
          <h5>
            <span style={{ color: "#50D1AA" }}>+32.40%</span>
          </h5>
        </div>

        <h3>$10,243.00</h3>
        <h4>Total revenue</h4>
      </div>

      <div className="order-card">
        <div className="order-flex">
          <div className="icon-container">
            <img src="/public/coin.svg"></img>
          </div>
          <h5>
            <span style={{ color: "#FF7CA3" }}>-15.60%</span>
          </h5>
        </div>
        <h3>23,343</h3>
        <h4>Total Dish Ordered</h4>
      </div>
      <div className="order-card">
        <div className="order-flex">
          <div className="icon-container">
            <img src="/public/customer.svg"></img>
          </div>
          <h5>
            <span style={{ color: "#50D1AA" }}>+2.40%</span>
          </h5>
        </div>
        <h3>1,234</h3>
        <h4>Total Customer</h4>
      </div>
    </div>
  );
}
