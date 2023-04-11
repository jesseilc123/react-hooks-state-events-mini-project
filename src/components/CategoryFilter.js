import React from "react";

function CategoryFilter({categories, isCategory, setIsCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {categories.map((cat) => (
          <button key={cat} id={cat} className={isCategory === cat ? "selected" : null } onClick={() => setIsCategory(cat)}>{cat}</button>
        ))}
    </div>
  );
}

export default CategoryFilter;
