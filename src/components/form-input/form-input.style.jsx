// o import 'css' do styled substitui 'mixin', é para guardar um css reutilizável
import styled, { css } from "styled-components";

//as variáveis de styled components são de JS normal
const subColor = "grey";
const mainColor = "black";

const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  //testando condicional, se a prop shrink for um valor true, recebe o css vindo de 'ShrinkLabel'
  ${({ shrink }) => shrink && ShrinkLabel}
`;

export const FormInputStyle = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabel}
  }
`;
