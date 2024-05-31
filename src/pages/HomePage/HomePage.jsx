import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import Header from "@/components/Header/Header";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Header />

        <h1 style={{ height: "1600px" }}>Homepage example</h1>
      </div>
    </div>
  );
}

export default HomePage;
