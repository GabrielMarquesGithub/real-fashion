//importe do styled para permitir uma nova maneira de estilização, junto do especial 'keyframes'
import styled, { keyframes } from "styled-components";
//import de componentes não 'naturais' do react
import { Link } from "react-router-dom";

//import de um SVG para logo, foi passado para o nome 'LogoCoroa'
import { ReactComponent as LogoCoroa } from "../../assets/crown.svg";

//utilização do keyframes
export const dropdownAnimation = keyframes`
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.3);
    }
`;

export const LogoContainer = styled(Link)`
  padding: 25px;
`;
export const LogoCoroaStyle = styled(LogoCoroa)`
  width: 50px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const CartIconContainer = styled.span`
  ${({ open }) =>
    open &&
    `
    position: relative;
    z-index: 6;
    transition: all 200ms;
    transform: scale(1.5);
  `}
`;
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  ${CartIconContainer}:hover,${LogoCoroaStyle}:hover {
    transform: scale(1.2);
    transition: transform 200ms cubic-bezier(0.25, 0.25, 0.25, 0.25);
  }
`;
export const NavLink = styled(Link)`
  margin-right: 30px;
  padding: 5px 5px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
export const BgDropdownMenu = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  //ele é chamado em meio a string como uma variável normal
  animation: ${dropdownAnimation} 0.5s forwards;
  z-index: 4;
  overflow: hidden;
`;
