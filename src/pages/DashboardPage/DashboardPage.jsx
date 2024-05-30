import Sidebar from "@/components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import OrderCard from "../../components/OrderCard/OrderCard";

function DashboardPage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        {/* <h1 style={{ height: "100px" }}>Homepage example</h1> */}
        <OrderCard />
      </div>
    </div>
  );
}

export default DashboardPage;
