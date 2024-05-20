import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import CircularReport from "@/components/CircularReport/CircularReport.jsx";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1 style={{ display: "block" }}>Homepage example</h1>
        <CircularReport delivery={560} toGo={250} dineIn={1150} />
      </div>
    </div>
  );
}

export default HomePage;
