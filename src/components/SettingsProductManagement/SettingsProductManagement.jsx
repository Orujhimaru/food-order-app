import "./SettingsProductManagement.scss";
import React from "react";
import { foods } from "@/db/food";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import { useState } from "react";

export default function SettingsProductManagement() {
  const [deleteState, setDeleteState] = React.useState(false);
  const [category, setCategory] = useState("Hot dishes");

  const [coldDishes, grill, appetizer, dessert, soup] = categories;

  function deleteCategories() {
    setDeleteState((visible) => !visible);
  }

  return (
    <div className="settings-cat-main-container">
      <div className="settings-cat-header"></div>
      <CategoryTabs categories={categories} category={category} />
    </div>
  );
}
