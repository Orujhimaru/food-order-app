import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import Header from "@/components/Header/Header";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import DishesMenu from "@/components/DishesMenu/DishesMenu";
import { useState, useEffect } from "react";
import { foods, categories } from "@/db/food";
import { useAuth } from "@/components/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";

function HomePage() {
  // const { fireStoreUser } = useAuth();

  const [category, setCategory] = useState("all");
  const [searchResults, setSearchResults] = useState("");

  return (
    <div>
      <NavBar />

      <div className="mainRoot">
        <Header onInputChange={setSearchResults} />

        <div className="dishesMen">
          <DishesMenu inputText={searchResults} />
          {/* searchParameter={a} */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
