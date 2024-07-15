import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";

import Header from "@/components/Header/Header";

import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import DishesMenu from "@/components/DishesMenu/DishesMenu";
import { useState, useEffect } from "react";
import { foods, categories } from "@/db/food";
import { useAuth } from "@/components/AuthProvider";


function HomePage() {
  const { fireStoreUser } = useAuth();

  const [category, setCategory] = useState("all");

  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Header />

        <div className="dishesMen">
          <DishesMenu />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
