import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import OrderReports from "@/components/Reports/OrderReports";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1>Homepage example</h1>
        {/* {Compound componenet olarak Order Reportsu children olarak passlememiz gerekir mi ?} */}
        <OrderReports />
      </div>
    </div>
  );
}

export default HomePage;
