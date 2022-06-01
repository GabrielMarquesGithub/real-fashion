import { ProductCardContainer, ProductFooter, Name, Price } from "./product-card.style";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  //o ideal é manter funções fora de execuções de eventos como on click, por questões de legibilidade e optimização
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductFooter>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add ao Carrinho
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
