import Sidebar from "@/components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import OrderReports from "../../components/OrderReports/OrderReports";
function DashboardPage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        {/* <h1 style={{ height: "100px" }}>Homepage example</h1> */}
        <OrderReports />
      </div>
    </div>
  );
}

export default DashboardPage;
