import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import DishesMenu from "./DishesMenu/DishesMenu";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <DishesMenu filterCondition="" />
      </div>
    </div>
  );
}

export default HomePage;
