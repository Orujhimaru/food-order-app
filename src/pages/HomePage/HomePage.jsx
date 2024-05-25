import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import OrderReports from "@/components/OrderReports/OrderReports";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <div className="mainContent">
          <OrderReports />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
