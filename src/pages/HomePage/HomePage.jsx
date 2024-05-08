import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1 style={{ height: "1600px" }}>Homepage example</h1>
      </div>
    </div>
  );
}

export default HomePage;
