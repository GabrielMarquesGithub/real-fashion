//componentes
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

//import style
import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.style";

//import link para o button
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const CartDropdown = () => {
  //contexto que será usado como array para os produtos
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();

  const toCheckout = () => {
    Navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {!cartItems.length ? (
          <EmptyMessage>Carrinho Vazio</EmptyMessage>
        ) : (
          cartItems.map((value) => <CartItem key={value.id} product={value} />)
        )}
      </CartItems>
      <Button onClick={toCheckout}>Finalizar</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
