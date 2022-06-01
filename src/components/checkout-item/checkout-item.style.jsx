import styled from "styled-components";

//tags simples e span

export const Details = styled.span`
  width: 23%;
`;
export const Quantity = styled(Details)`
  width: 23%;
  display: flex;
  align-items: center;
`;
export const Arrow = styled.div`
  position: relative;
  bottom: 1px;
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;

//container principal
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
//container da imagem
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
//container principal botão de remoção
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
