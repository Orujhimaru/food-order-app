import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import DishesMenu from "@/components/DishesMenu/DishesMenu";
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
        <CategoryTabs
        setCategory={setCategory}
        category={category}
         
        />
        <DishesMenu
        category={category}
         
        />
      </div>
    </div>
  );
}

export default HomePage;
