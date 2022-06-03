import styled from "styled-components";

export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export const CategoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 2px black;
  opacity: 0.5;
  color: white;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 30px;
  }

  p {
    font-weight: lighter;
    font-size: 22px;
  }
`;

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: end;
  justify-content: end;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BgImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryBodyContainer} {
      opacity: 0.9;
    }
  }
  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
