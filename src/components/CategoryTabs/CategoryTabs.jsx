import { categories } from "@/db/food";
import { useState } from "react";
import "./CategoryTabs.scss";

function CategoryTabs({ setCategory, category }) {
  return (
    <ul className="category-tabs">
      {categories.map((cat,index) => (
        <li key={index}
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
