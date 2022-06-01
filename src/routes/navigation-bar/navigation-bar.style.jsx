//importe do styled para permitir uma nova maneira de estilização, junto do especial 'keyframes'
import styled, { keyframes } from "styled-components";
//import de componentes não 'naturais' do react
import { Link } from "react-router-dom";

//utilização do keyframes
export const dropdownAnimation = keyframes`
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.3);
    }
`;
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
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
