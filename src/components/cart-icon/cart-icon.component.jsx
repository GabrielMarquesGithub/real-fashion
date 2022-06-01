import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.style";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
