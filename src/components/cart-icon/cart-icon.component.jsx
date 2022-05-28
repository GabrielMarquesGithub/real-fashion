import "./cart-icon.style.scss";

import { ReactComponent as CartSVG } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <CartSVG className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
