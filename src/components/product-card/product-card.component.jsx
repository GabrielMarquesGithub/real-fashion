import "./product-card.style.scss";

import Button from "../button/button.component";

const ProductCard = ({ product: { imageUrl, name, price } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add ao Carrinho</Button>
    </div>
  );
};

export default ProductCard;
