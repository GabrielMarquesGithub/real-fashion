import { BgImage, CategoryContainer, CategoryBodyContainer } from "./category-item.style";

import { useNavigate } from "react-router-dom";

const CategoryItem = ({ product: { title, id, imageUrl, route } }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryContainer key={id} onClick={onNavigateHandler}>
      <BgImage image={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Compre Agora</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
