import "./categories.style.scss";

import CategoryItem from "../category-item/category-item.component";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((product) => (
        <CategoryItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Categories;
