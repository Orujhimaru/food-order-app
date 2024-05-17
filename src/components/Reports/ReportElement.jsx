import "./OrderReport.scss";

export default function ReportElement(props) {
  return (
    <div className="order-report">
      <div className="flex-start">
        <img className="image-pp" src={props.img}></img>
        <h4> {props.userName}</h4>
      </div>
      <div className="flex-start">
        <h4>{props.orderName}</h4>
      </div>
      <div className="flex-start">
        <h4>{props.price}</h4>
      </div>
      <div className="flex-end">
        <div className={`order-status order-status-${props.status}`}>
          {props.status}
        </div>
      </div>
    </div>
  );
}
