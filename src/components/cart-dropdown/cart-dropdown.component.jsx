//componentes
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";

//import link para o button
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  //contexto que será usado como array para os produtos
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();

  const toCheckout = () => {
    Navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((value) => (
          <CartItem key={value.id} product={value} />
        ))}
      </div>
      <Button onClick={toCheckout}>Finalizar</Button>
    </div>
  );
};

export default CartDropdown;
