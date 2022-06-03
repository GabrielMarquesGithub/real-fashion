import styled, { keyframes } from "styled-components";

//import ícone em SVG
import { ReactComponent as CartSVG } from "../../assets/shopping-bag.svg";

const animationCart = keyframes`
  0%{
    transform: scale(1.1);
  }
  50%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1.05);
  }
`;
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${({ cartAnimation }) => cartAnimation && animationCart} 0.5s;
`;
export const ShoppingIcon = styled(CartSVG)`
  width: 24px;
  height: 24px;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
