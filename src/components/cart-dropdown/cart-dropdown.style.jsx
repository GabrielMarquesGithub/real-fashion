import styled from "styled-components";

//import de um componente que já será passado estilizado
import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
  border-radius: 10px;
  position: absolute;
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 20px;
  right: 20px;
  z-index: 5;

  h2 {
    padding: 0;
    margin: 0;
  }

  ${Button} {
    margin-top: auto;
  }
`;
export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
