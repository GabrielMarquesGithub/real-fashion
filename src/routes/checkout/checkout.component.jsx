import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.style";

import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, cartTotalValue } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Foto</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Descrição</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantidade</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Preço</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} product={cartItem} />
      ))}
      <Total>Total: ${cartTotalValue}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
