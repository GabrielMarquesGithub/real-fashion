import "./product-card.style.scss";

import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  //o ideal é manter funções fora de execuções de eventos como on click, por questões de legibilidade e optimização
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add ao Carrinho
      </Button>
    </div>
  );
};

export default ProductCard;
