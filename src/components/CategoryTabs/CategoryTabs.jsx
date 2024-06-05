import { categories } from "@/db/food";
import { useState } from "react";
import "./CategoryTabs.scss";

function CategoryTabs({ setCategory, category }) {
  return (
    <ul className="category-tabs" key={}>
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
