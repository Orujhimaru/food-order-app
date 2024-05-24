import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import OrderReports from "@/components/OrderReports/OrderReports";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <div className="mainContent">
          {/* TEMPORARY DIV FOR SPACING 
          Dashboard Analytics Header*/}
          <div style={{ height: "200px" }}></div>
          <OrderReports />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
