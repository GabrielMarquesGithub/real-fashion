import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, Title, Preview } from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products.slice(0, 4).map((obj) => (
          <ProductCard key={obj.id} product={obj} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
