import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &.active {
    color: white;
    background-color: #00000035;
  }

  &:hover{
    background-color: #00000035;
  }
    
`
