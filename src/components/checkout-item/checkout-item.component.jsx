import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
//import css
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Details,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.style";

const CheckoutItem = ({ product }) => {
  //desconstrução de product
  const { imageUrl, name, price, num } = product;
  //uso de dados do context
  const { addItemToCart, removeItemToCart, deleteItemToCart } = useContext(CartContext);

  //funções para execução de funções vindas do context
  const addItem = () => addItemToCart(product);
  const removeItem = () => removeItemToCart(product);
  const deleteItem = () => deleteItemToCart(product);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Details>{name}</Details>

      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{num}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>

      <Details>{price}</Details>
      <RemoveButton onClick={deleteItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
