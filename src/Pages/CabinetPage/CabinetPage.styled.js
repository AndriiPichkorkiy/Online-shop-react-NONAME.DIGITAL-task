import styled from "styled-components";

export const CabinetContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  height: 100%;
`;

export const CabinetMenuColumn = styled.div``;
export const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CabinetTitle = styled.h2`
  color: #868b8e;
`;

export const CabinetMenuList = styled.ul``;

export const CabinetMenuListItem = styled.li`
  margin-top: 0.5rem;

  ${({ active }) => {
    if (active)
      return {
        color: "#E7D2CC",
      };
  }}
`;

export const LogOutBtn = styled.button`
  border-radius: 4px;
  border-width: 0px;
  background: none;

  margin: 0;
  padding: 0;

  &:hover {
    color: #e7d2cc;
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  width: 15%;
`;
export const TitleOrder = styled.h3`
  margin-top: 1rem;
  color: #868b8e;
`;
