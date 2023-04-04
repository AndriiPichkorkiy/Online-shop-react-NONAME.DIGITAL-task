import styled from "styled-components";

export const ProductPageContainer = styled.div`
  width: 100%;
  max-width: ${({ short }) => (short ? "15%" : "unset")};
  border-color: #b9b7bd;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  margin: 2rem;
  padding: 1rem;
`;

export const Title = styled.h3`
  color: #4e4f50;
  font-size: 1.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
`;

export const ImageThumb = styled.img`
  height: 200px;
  object-fit: contain;
  object-position: left;
  margin-top: 1rem;
  /* width: 100%; */
`;
