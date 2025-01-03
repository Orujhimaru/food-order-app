import "./OrderReports.scss";
import userPhoto from "../../profile-picture.png";
export default function ReportElement({ order, colored }) {
  const { userName, orderName, price, status } = order;
  const classN = colored ? "order-report order-odd-background" : "order-report";
  return (
    <div className={classN}>
      <div className="order-flex-start">
        <img className="image-pp" src={userPhoto}></img>
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
