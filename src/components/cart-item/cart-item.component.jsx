import { CartItemContainer, CartItemDetails, CartItemImg, CartItemName } from "./cart-item.style";

const CartItem = ({ product: { imageUrl, name, price, num } }) => {
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {num} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
