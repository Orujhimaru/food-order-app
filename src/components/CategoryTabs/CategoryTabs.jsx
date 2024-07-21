import "./CategoryTabs.scss";

function CategoryTabs({ setCategory, category, categories }) {
  return (
    <ul className="category-tabs">
      {categories &&
        categories.map((cat) => (
          <li
            onClick={() => {
              setCategory(cat.key);
            }}
            className={cat.key === category ? "active" : ""}
            key={cat.id}
          >
            {cat.name}
          </li>
        ))}
    </ul>
  );
}

export default CategoryTabs;
