import "./OrderReports.scss";

export default function ReportElement({ order }) {
  const { img, userName, orderName, price, status } = order;
  return (
    <div className="order-report">
      <div className="order-flex-start">
        <img className="image-pp" src={img}></img>
        <h4> {userName}</h4>
      </div>
      <div className="order-flex-start">
        <h4>{orderName}</h4>
      </div>
      <div className="order-flex-start">
        <h4>{price}</h4>
      </div>
      <div className="order-flex-end">
        <div className={`order-status order-status-${status}`}>{status}</div>
      </div>
    </div>
  );
}
