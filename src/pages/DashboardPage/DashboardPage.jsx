import Sidebar from "@/components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import OrderCard from "../../components/OrderCard/OrderCard";
import CircularReport from "../../components/CircularReport/CircularReport";
import OrderReports from "../../components/OrderReports/OrderReports";
import NavBar from "../../components/NavBar/NavBar";
import MostOrderedDishes from "../../components/MostOrderedDishes/MostOrderedDishes";

function DashboardPage() {
  return (
    <div>
      <NavBar />
      <div className="mainRoot">
        {/* <h1 style={{ height: "100px" }}>Homepage example</h1> */}
        <div className="container-100">
          <div className="container-60">
            <div style={{ fontSize: "28px", fontWeight: "500" }}>Dashboard</div>
            <OrderCard />
            <OrderReports />
          </div>
          <div className="container-40">
            <MostOrderedDishes />
            <CircularReport delivery={1231} dineIn={500} toGo={123} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
