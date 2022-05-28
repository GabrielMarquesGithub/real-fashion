import "./checkout.style.scss";

import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, cartTotalValue } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Foto</span>
        </div>
        <div className="header-block">
          <span>Descrição</span>
        </div>
        <div className="header-block">
          <span>Quantidade</span>
        </div>
        <div className="header-block">
          <span>Preço</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} product={cartItem} />
      ))}
      <span className="total">Total: ${cartTotalValue}</span>
    </div>
  );
};
export default Checkout;
