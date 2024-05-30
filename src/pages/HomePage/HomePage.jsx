import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import OrderReports from "@/components/OrderReports/OrderReports";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <div className="mainContent"></div>
        <h1 style={{ height: "100px" }}>Homepage example</h1>
      </div>
    </div>
  );
}

export default HomePage;
