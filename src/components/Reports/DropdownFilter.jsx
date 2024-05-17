import "./OrderReport.scss";

export default function DropdownFilter({ setCat }) {
  return (
    <div className="order-dropdown">
      <div onClick={() => setCat("all")}>All</div>
      <div onClick={() => setCat("completed")}>Completed</div>
      <div onClick={() => setCat("pending")}>Pending</div>
      <div onClick={() => setCat("preparing")}>Preparing</div>
    </div>
  );
}
