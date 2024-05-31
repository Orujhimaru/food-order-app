import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import DishesMenu from "./DishesMenu/DishesMenu";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import { foods } from "@/db/food";

function HomePage() {
  const { fireStoreUser } = useAuth();

  const [category, setCategory] = useState("all");

  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <CategoryTabs setCategory={setCategory} category={category} />
        <DishesMenu category={category} foods={foods} />
      </div>
    </div>
  );
}

export default HomePage;
