import styled from "styled-components";

export const CategoryShopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CategoryShopTitle = styled.h2`
  display: inline-block;
  font-size: 44px;
  margin-right: 20px;
  margin-bottom: 25px;
`;
export const SearchInputContainer = styled.div`
  border: solid 5px black;
  display: inline-block;
  position: relative;
  border-radius: 50px;
`;
export const SearchInputStyle = styled.input`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  padding: 5px 40px 5px 10px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 50px;
  transition: width 800ms cubic-bezier(0.68, -0.55, 0.27, 1.55) 150ms;

  &:focus,
  &:not(:placeholder-shown) {
    width: 400px;
    transition: width 800ms cubic-bezier(0.68, -0.55, 0.27, 1.55);

    + button[type="reset"] {
      bottom: 13px;
      right: 10px;
      transition: bottom 150ms ease-out 800ms, right 150ms ease-out 800ms;
    }
    + button[type="reset"]::after {
      top: 0;
      right: 10px;
      opacity: 1;
      transition: top 150ms ease-out 1000ms, right 150ms ease-out 1000ms, opacity 150ms ease 1000ms;
    }
  }
`;
export const SearchButton = styled.button`
  background-color: transparent;
  width: 25px;
  height: 25px;
  border: 0;
  padding: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -13px;
  right: -15px;
  transition: bottom 150ms ease-out 150ms, right 150ms ease-out 150ms;
  &:before,
  &:after {
    content: "";
    height: 25px;
    border-left: solid 5px black;
    position: absolute;
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
    opacity: 0;
    top: -20px;
    right: -10px;
    transition: top 150ms ease-out, right 150ms ease-out, opacity 150ms ease-out;
  }
`;
