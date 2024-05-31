import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import DishesMenu from "./DishesMenu/DishesMenu";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState, useEffect } from "react";
import { foods } from "@/db/food";
import { useAuth } from "@/components/AuthProvider";

function HomePage() {
  const { fireStoreUser } = useAuth();

  const [category, setCategory] = useState("all");

  return (
    <div>
      <Sidebar />

      <div className="mainRoot">
      <CategoryTabs setCategory={setCategory} category={category} />
      <DishesMenu filterCondition="" />
      </div>

    </div>
  );
}

export default HomePage;
