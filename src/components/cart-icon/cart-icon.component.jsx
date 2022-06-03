import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.style";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useEffect } from "react";
import { useState } from "react";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  const [cartAnimation, setCartAnimation] = useState(false);
  useEffect(() => {
    setCartAnimation(true);
    const time = setTimeout(() => {
      setCartAnimation(false);
      clearTimeout(time);
    }, 500);
  }, [cartCount]);
  return (
    <CartIconContainer cartAnimation={cartAnimation}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
