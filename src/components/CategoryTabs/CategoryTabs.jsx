import { categories } from "@/db/food";
import { useState } from "react";
import "./CategoryTabs.scss";

function CategoryTabs({ setCategory, category }) {
  console.log("category");

    return (
    <ul className="category-tabs">
      {categories.map((cat) => (
        <li
          onClick={() => {
            setCategory(cat.key);
          }}
          className={cat.key === category ? "active" : ""}
        >
          {cat.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryTabs;
