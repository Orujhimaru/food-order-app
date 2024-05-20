import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import CircularReport from "@/components/CircularReport/CircularReport.jsx";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1>Homepage example</h1>
        <CircularReport />
      </div>
    </div>
  );
}

export default HomePage;
