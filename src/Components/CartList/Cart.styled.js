import styled from "styled-components";

export const CartListTitle = styled.h2`
  color: #868b8e;
`;

export const CartItemContainer = styled.div`
  display: flex;
  max-height: 256px;
  margin: 2rem 0;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  padding: 1rem;
  position: relative;
`;

export const ImgContainer = styled.div`
  width: 15%;
  max-height: 100%;

  & > img {
    max-height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;

export const CartTitle = styled.h3`
  color: #868b8e;
`;
export const PriceTitle = styled.h4`
  margin-top: 1rem;
`;

export const ButtonsCalculate = styled.button`
  min-width: 2rem;
  background: none;
  margin: 0.5rem;
  border-radius: 8px;
  border-width: 1px;

  &:hover {
    background: #b9b7bd;
  }
`;
